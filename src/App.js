import React from 'react';
import Details from './components/Details/Details';
import { Grid } from '@mui/material';
import Main from './components/Main/Main.jsx';
import {PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui';

const App = () =>{
    return(
        <div>
           <Grid container spacing={2} alignItems='center' justifyItems='center' style={{height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title='Income'/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title='Expense'/>
                </Grid>
           </Grid>
           <PushToTalkButtonContainer>
                <PushToTalkButton />
           </PushToTalkButtonContainer>
        </div>
    );
}

export default App;