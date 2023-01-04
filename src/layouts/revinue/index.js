import React, { useState, useEffect } from 'react';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Footer from "examples/Footer";


import { Box, Container, Stack, Grid, Paper, Typography, IconButton, CircularProgress } from '@mui/material';

import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import axios from 'axios';
import CountUp from 'react-countup';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppsIcon from '@mui/icons-material/Apps';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';

import MDTypography from "components/MDTypography";

import {
     recentMoment,
     
    // } from '../../../../utilities/dataAnalize';
    } from '../../utilities/dataAnalize';

    
import RoundedServiceCart from './RoundedServiceCart';







const Revinue = () => {



    
    const [allOrders, setAllOrders] = useState([]);
    const [allProvider, setAllProvider] = useState([]);
    const [serviceCount, setServiceCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState({
        recentMoment: [],
        earning: 0,
        sales: 0,
        orders: 0,
        providers: 0,
        ordersApprove: 0,
        totalService: 0,

    });
    useEffect(() => {
        setLoading(true);
        let one = "https://dry-sea-00611.herokuapp.com/orders/"
        let two = "https://dry-sea-00611.herokuapp.com/provider/allProvider"
        let three = "https://dry-sea-00611.herokuapp.com/singleservice/count"
        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        const requestThree = axios.get(three);
        axios.all([requestOne, requestTwo, requestThree])
            .then(
                axios.spread((...responses) => {
                    setAllOrders(responses[0].data)
                    setAllProvider(responses[1].data);
                    setServiceCount(responses[2].data.count)
                })).catch(errors => {
                    // react on errors.
                }).finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (!loading) {
            setAllData(state => {
                return {
                    recentMoment: recentMoment(allOrders),
                    providers: allProvider.length,
                    totalService: serviceCount,
                }
            })
        }
    }, [loading])

    //
    if (loading) {
        return <Stack alignItems='center' >
            <CircularProgress></CircularProgress>
        </Stack >
    }




    return (
        <DashboardLayout> 
        <DashboardNavbar />



{/* came here revinue  */}




<>
        <Container>
            <Grid style={{marginTop:'10px', marginBottom:'20px'}} container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={10}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "space-between"
                                }}>

                                    <Typography sx={{fontFamily: 'Bitter',fontSize:'0.9rem', fontWeight:700, color:"#D600B1"}} variant='body1' > Revenue Movers Packers</Typography>
                                    <IconButton
                                        sx={{
                                            background: 'hsl(215deg 69% 90%)',
                                            color: 'hsl(215deg 70% 71%)'
                                        }}
                                    > <AccountBalanceWalletIcon></AccountBalanceWalletIcon></IconButton>
                                </Box>
                                {/* <Typography variant='h5' gutterBottom><CountUp end={allData.sales} /></Typography> */}
                                <Typography sx={{fontSize:"1.1rem", lineHeight:"1"}} variant='h5' gutterBottom>$<CountUp end={574433} /></Typography>
                                <Typography sx={{fontSize:"1rem"}} color='#00C49F' variant='body1' component={'span'}>Total</Typography>
                                {/* <MDTypography variant="h6" fontWeight="medium">
                                MoversPackers Revenue
        </MDTypography> */}
                                <Typography sx={{fontSize:"1rem"}} variant='body1' component={'span'}> MoversPackers Revenue</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "space-between"
                                }}>
                                    <Typography sx={{fontFamily: 'Bitter', fontSize:'0.9rem',fontWeight:700, color:"#6D0AD3"}} variant='body1' >Revenue Stotage</Typography>
                                    <IconButton
                                        sx={{
                                            background: 'hsl(215deg 69% 90%)',
                                            color: 'hsl(215deg 70% 71%)'
                                        }}
                                    > <AppsIcon></AppsIcon></IconButton>
                                </Box>
                                <Typography sx={{fontSize:"1.1rem", lineHeight:"1"}} variant='h5' gutterBottom>$<CountUp end={987874} /></Typography>
                                <Typography sx={{fontSize:"1rem"}} color='#00C49F' variant='body1' component={'span'}>Total</Typography>
                                <Typography sx={{fontSize:"1rem"}}   variant='body1' component={'span'}> Storage Revenue </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "space-between"
                                }}>
                                    <Typography  sx={{fontFamily: 'Bitter',fontSize:'0.9rem', fontWeight:700, color:"#D600B1"}} variant='body1' >Revenue Courier</Typography>
                                    <IconButton
                                        sx={{
                                            background: 'hsl(215deg 69% 90%)',
                                            color: 'hsl(215deg 70% 71%)'
                                        }}
                                    > <EmojiTransportationIcon></EmojiTransportationIcon></IconButton>
                                </Box>
                                <Typography sx={{fontSize:"1.1rem", lineHeight:"1"}} variant='h5' gutterBottom>$<CountUp end={987878} /></Typography>
                                <Typography sx={{fontSize:"1rem"}} color='#00C49F' variant='body1' component={'span'}>Total</Typography>
                                <Typography sx={{fontSize:"1rem"}} variant='body1' component={'span'}> Courier Revenue</Typography>
                            </Paper>
                        </Grid>
                 

                    </Grid>
                </Grid>
        
                <Grid item xs={12} md={5}>
                    <RoundedServiceCart allData={allData}></RoundedServiceCart>
                </Grid>
            </Grid>
            </Container>


        </>




{/* came here revinue  */}






        <Footer />
        </DashboardLayout >
    );
};

export default Revinue;