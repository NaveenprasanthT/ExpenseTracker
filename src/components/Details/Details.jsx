import React from 'react';
import { Card,CardHeader,CardContent,Typography} from '@mui/material';
import Chart from 'react-apexcharts';
import './styles.css';
import useTransactions from '../../useTransactions';

const Details = ( {title} ) =>{

    const {total,series,label}=useTransactions(title);

    return(
        <Card className={title === 'Income'? 'income':'expence' } variant='outlined'>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>Rs.{total}</Typography>
                <Chart
                    width="380" 
                    type="donut"
                    series = {series}

                    options={{labels:label}
                }
                
                />
            </CardContent>
        </Card>
    );
}

export default Details;