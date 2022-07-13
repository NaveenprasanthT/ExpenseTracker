import React,{useEffect,useState} from 'react';
import Details from './components/Details/Details';
import { Grid } from '@mui/material';
import Main from './components/Main/Main.jsx';
import {PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui';

const App = () =>{

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      });

    return(
        <div>
           <Grid container spacing={2} alignItems='center' justifyItems='center' style={{height: '100vh'}}>
                <Grid item xs={12} sm={4} sx={width < 600 ? {display:'none'}:{}}>
                    <Details title='Income'/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} sx={width > 600 ? {display:'none'}:{}}>
                    <Details title='Income'/>
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
