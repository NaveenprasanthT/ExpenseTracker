import React,{useState,useContext, useEffect} from 'react';
import { TextField,FormControl, Grid, Typography, InputLabel, Select, MenuItem, Button } from '@mui/material';
import {incomeCategories,expenseCategories} from '../../../Constants/Categories';
import { ExpenceTracker } from '../../../context/context';
import {v4} from 'uuid';
import Message from '../../Snackbar';

import {useSpeechContext} from '@speechly/react-client';

const initialState ={
    type:'',
    category:'',
    amount:'',
    date:'',
}

const Form =()=>{
    const[data,setData] = useState(initialState);
    const {addTransactions} = useContext(ExpenceTracker);

    const [open,setOpen] = useState(false);

    const {segment} = useSpeechContext();

    const createTransactions = () =>{
        const transaction = {...data, amount: Number(data.amount),id:v4()}
        
        if(data.type && data.amount && data.category && data.date){
        addTransactions(transaction);
        setOpen(true);
        }

        setData(initialState);
    }

    useEffect(()=>{
        if(segment){
            if(segment.intent.intent === 'add_expense'){
                setData({...data,type:"Expense"})
            }
            if(segment.intent.intent === 'add_income'){
                setData({...data,type:"Income"})
            }
            if(segment.intent.intent === 'add_delete'){
                if(data.category !== "" || data.amount !== "0"){
                setData(initialState); 
            }
            }

            if(segment.intent.intent === 'add_expence' || 'add_income'){
            segment.entities.forEach((e) =>{
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;
                switch(e.type){
                    case 'amount':
                        setData({...data,amount: e.value})
                        break;
                    case 'category':
                        setData({...data,category: category})
                        break;
                    case 'date':
                        setData({...data,date: e.value})
                        break;
                    default:
                        break;
                } 
                             
            });
            }
        }
        if(data.type && data.amount && data.category && data.date){
            createTransactions();
        }
    },[segment])  // eslint-disable-line react-hooks/exhaustive-deps
 

    const selected = data.type === 'Income' ? incomeCategories : expenseCategories;

    return(
        <Grid container spacing={2}>
        <Message open={open} setOpen={setOpen}/>
        <Grid item xs={12}>
            <Typography align='center'>
                {segment && segment.words.map((w) => w.value).join(" ")}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select 
                    value={data.type}
                    onChange={(e) => setData({...data,type:e.target.value})}
                >
                    <MenuItem value='Income'>Income</MenuItem>
                    <MenuItem value='Expense'>Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                    value={data.category}
                    onChange={(e)=>setData({...data,category:e.target.value})}                
                >
                    {selected.map((c)=> <MenuItem value={c.type}>{c.type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField label='Amount' type='number' fullWidth
                value={data.amount}
                onChange={(e)=>setData({...data,amount:e.target.value})}
        ></TextField>
        </Grid>
        <Grid item xs={6}>
            <TextField label='date' type='date'fullWidth
                value={data.date}
                onChange={(e) => setData({...data,date:e.target.value})}    
        ></TextField>
        </Grid>
        <Grid item xs={12}>
            <Button variant='outlined' color='primary' onClick={createTransactions} fullWidth>Create</Button>
        </Grid>
    </Grid>
    );
}


export default Form;
