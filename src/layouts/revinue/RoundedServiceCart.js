import React from 'react';
import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box, Container, Stack, Grid, Paper, Typography, IconButton } from '@mui/material';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RoundedServiceCart = () => {
    const data01 = [
        { name: 'Movers Packers', value: 23434 },
        { name: 'Storage', value: 34554 },
        { name: 'Courier', value: 53534 },
    ];
    return (
        <Paper elevation={3} sx={{ height: '100%' }}>
            <Typography sx={{fontFamily: 'Bitter', fontWeight:700,fontSize:'0.9rem', color:"#D600B1"}} variant='body1' pt={2} ml={2}>Overall Revenue</Typography>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart >
                    <Pie
                        data={data01}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data01.map((entry, index) => (
                            console.log('all revenue name',entry?.value),
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

            </ResponsiveContainer>
            {
                data01.map((entry, i) =>
                    <Box px={2} key={i}>
                        <Stack
                            sx={{
                                borderTop: '1px solid #bfbfbf',
                                py: 1,
                            }}
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Box

                            >
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        background: COLORS[i],
                                        p: .8,
                                        borderRadius: '100%',
                                    }}  ></Box>
                                <Typography sx={{fontSize:"0.9rem"}} ml={1} component={'span'}>{entry?.name}</Typography>

                            </Box>
                            <Typography sx={{fontSize:"0.9rem"}} ml={1} component={'span'}>${entry?.value}</Typography>
                        </Stack>
                    </Box>)
            }
        </Paper>
    );
};

export default RoundedServiceCart;