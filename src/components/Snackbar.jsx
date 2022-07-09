import React from 'react';
import {Snackbar} from '@mui/material'
import {Alert} from '@mui/material'

const Message = ({open, setOpen}) =>{

    const handleClose = (event, reason) =>{
        if(reason === 'clickaway') return;

        setOpen(false)
    }

    return(
        <div>
            <Snackbar 
                anchorOrigin={{vertical:"top", horizontal:"right"}}
                open={open}
                autoHideDuration={2500}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" elevation={6} variant='filled'>
                    Transaction Successfullly Added.
                </Alert>
            </Snackbar> 
        </div>
    );
}

export default Message;