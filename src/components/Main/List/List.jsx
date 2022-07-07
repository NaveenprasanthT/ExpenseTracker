import React,{useContext} from 'react';
import {List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Slide,IconButton } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import './liststyle.css';
import { ExpenceTracker } from '../../../context/context';



const Trans = () => {

    const {deleteTransactions,transactions} = useContext(ExpenceTracker);

    return(
        <List dense={false} className='list'>
            {transactions.map((transaction) => (
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income'? 'avatarIncome' : 'avatarExpence' }>
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

