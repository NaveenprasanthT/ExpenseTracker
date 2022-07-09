import React,{useContext} from 'react';
import {List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Slide,IconButton } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import { ExpenceTracker } from '../../../context/context';



const Trans = () => {

    const {deleteTransactions,transactions} = useContext(ExpenceTracker);

    return(
        <List dense={false} sx={{maxHeight:"150px",overflow:"auto"}}>
            {transactions.map((transaction) => (
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={transaction.type === 'Income'? {color:"#fff",backgroundColor:"green"} : {color:"#fff",backgroundColor:"red"}}>
                            <CurrencyRupeeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`${transaction.amount} Rupees on ${transaction.date}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label='delete' onClick={() => deleteTransactions(transaction.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
            ))};
        </List>
    );
}

export default Trans;

