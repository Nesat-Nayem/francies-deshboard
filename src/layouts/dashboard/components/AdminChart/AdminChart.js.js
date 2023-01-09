import { Stack, Grid, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";



// note idea 

// 1. recent movement ar vator akon sodo all data ka patano hocca ame aro do ta api ar data kao patata pare

// this is 



import {
  recentMoment,
// } from "../../../../utilities/dataAnalize";
} from "../../../../utilities/dataAnalize";
import RecentMomentChart from "../RecentMomentChart/RecentMomentChart";

const AdminChart = () => {
  const [allOrders, setAllOrders] = useState([]);
  // console.log('check data allorder ', allOrders[0].data[0].username)
  const [allProvider, setAllProvider] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState({
    recentMoment: [],
  });
  // console.log('check 2nd point data api',allData.recentMoment)
  useEffect(() => {
    setLoading(true);
    let one = "https://energetic-pear-threads.cyclic.app/api/orders/allorder";
    let two = "https://energetic-pear-threads.cyclic.app/api/getprovider";
    // let three = "https://lit-sands-58263.herokuapp.com/api/products/getProduct";
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    // const requestThree = axios.get(three);
    axios
      .all([
        requestOne, 
        requestTwo,
        //  requestThree
      ])
      .then(
        axios.spread((...responses) => {
          setAllOrders(responses[0].data);
        })
      )
      .catch((errors) => {
        // react on errors.
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading) {
      setAllData((state) => {
        return {
          recentMoment: recentMoment(allOrders),
 
        };
      });
    }
  }, [loading]);

  //
  if (loading) {
    return (
      <Stack alignItems="center">
        <CircularProgress></CircularProgress>
      </Stack>
    );
  }

  return (
    <>
      <Grid container spacing={2} style={{background: '#f2f0f0', boxShadow:"none", marginTop:'0px', marginLeft:'0px',width:'auto'}} >
        <Grid item xs={12} md={12}  >
          <RecentMomentChart  data={allData.recentMoment}></RecentMomentChart>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminChart;
