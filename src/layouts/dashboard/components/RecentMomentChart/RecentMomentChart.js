import React from 'react';
import { Box, Container, Stack, Grid, Paper, Typography, IconButton } from '@mui/material';

import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const RecentMomentChart = ({ data }) => {
    // console.log('admin chart data check', data)
    return (
        <Paper elevation={3} sx={{ p: 2,  }} style={{background: '#f2f0f0', boxShadow:"none", marginTop:'0px', marginLeft:'0px',width:'auto'}} >
            {/* <Typography  bold gutterBottom variant='h6'>Weekly Report</Typography> */}
            <ResponsiveContainer   height={200} style={{marginTop:'0px', marginLeft:'0px',width:'auto'}}  >
                <AreaChart  height={200} data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0891B2" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#0891B2" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#0891B2" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default RecentMomentChart;