import React,{useContext} from 'react';
import {Card,CardHeader,CardContent,Typography, Divider, Grid} from '@mui/material';
import Form from './Form/Form.jsx';
import Trans from './List/List.jsx';

import {ExpenceTracker} from '../../context/context'

import InfoCard from '../InfoCard.jsx';




function Main(){

    const {transactions} = useContext(ExpenceTracker);

    const inTrans = transactions.filter((t) => t.type === 'Income');
    const inTotal = inTrans.reduce((acc,val) => acc += val.amount,0);
  
    const outTrans = transactions.filter((t) => t.type === 'Expense');
    const outTotal = outTrans.reduce((acc,val) => acc += val.amount,0);
  
    const bal = inTotal - outTotal;

    const balance= bal<0 ? "You Have No Balance" : "Rs."+bal;

    return(
        <Card >
            <CardHeader title='Expence Tracker  ' subheader='Supports Speechly'/>
            <CardContent>
                <Typography align='center' style={{fontSize:'25px',fontWeight:'700'}}>Your Balance : {balance}</Typography>
                <Typography align='center' varient='subtitle3' style={{}}> 
                    <InfoCard />
                </Typography>
            </CardContent>
            <Divider />
            <Form />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid items xs={12}>
                       <Trans />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Main;
