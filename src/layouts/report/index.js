import {
    Button,
    Container,
    Grid,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
  } from "@mui/material";
  import Paper from "@mui/material/Paper";
  import { styled } from "@mui/material/styles";
  import TableCell, { tableCellClasses } from "@mui/material/TableCell";
  // import { Box } from "@mui/system";
  import React, { useEffect, useRef, useState } from "react";
  import { useForm } from "react-hook-form";
  import FileDownloadIcon from "@mui/icons-material/FileDownload";
  import { toast } from "react-toastify";
//   import dateFormat from "../../DateFormat/dateFormat";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Footer from "examples/Footer";

  import { PDFExport } from "@progress/kendo-react-pdf";
  import AdminReport from "./AdminReport";
  import Swal from "sweetalert2";
  // import { allData, getAllOrders } from "../../../redux/dataSlice/dataSlice";
//   import {useDispatch,useSelector} from 'react-redux'
// import dateFormat from "../DateFormat/DateFormat";
import dateFormat from "./components/DateFormat";
  



// import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// import { useTheme } from "@mui/material";
// import { tokens } from "../../../../theme";
// import CourierModal from "./CourierModal";
// import Header from "../../../../components/Header";








const allOrder = [
  {
    _id:38478347,
    costomerName : "Jon",
  Date : "10-05-2022",
  category:"Residential Movers Packers",
  totalpay:4343
  },
  {
    _id:384784347,
    costomerName : "Daneal",
  Date : "12-05-2022",
  category:"Commercial Movers Packers",
  totalpay:4343
  },
  {
    _id:384738347,
    costomerName : "Lilin",
  Date : "04-06-2022",
  category:" Storage Residential",
  totalpay:4343
  },
  {
    _id:384278347,
    costomerName : "David",
  Date : "04-06-2022",
  category:" Storage Commercial",
  totalpay:4343
  },
  {
    _id:3847228347,
    costomerName : "Rian",
  Date : "12-06-2022",
  category:" Courier",
  totalpay:42343
  },
  {
    _id:3847833347,
    costomerName : "Jon",
  Date : "10-05-2022",
  category:"Residential Movers Packers",
  totalpay:4343
  },
  {
    _id:3847668347,
    costomerName : "Daneal",
  Date : "12-05-2022",
  category:"Commercial Movers Packers",
  totalpay:4343
  },
  {
    _id:3847865347,
    costomerName : "Lilin",
  Date : "04-06-2022",
  category:" Storage Residential",
  totalpay:4343
  },
  {
    _id:38478343227,
    costomerName : "David",
  Date : "04-06-2022",
  category:" Storage Commercial",
  totalpay:4343
  },
  {
    _id:3847832343447,
    costomerName : "Rian",
  Date : "12-06-2022",
  category:" Courier",
  totalpay:42343
  },
  {
    _id:3834233478347,
    costomerName : "Jon",
  Date : "10-05-2022",
  category:"Residential Movers Packers",
  totalpay:4343
  },
  {
    _id:38473428347,
    costomerName : "Daneal",
  Date : "12-05-2022",
  category:"Commercial Movers Packers",
  totalpay:4343
  },
  {
    _id:38478333322247,
    costomerName : "Lilin",
  Date : "04-06-2022",
  category:" Storage Residential",
  totalpay:4343
  },
  {
    _id:3847834234247,
    costomerName : "David",
  Date : "04-06-2022",
  category:" Storage Commercial",
  totalpay:4343
  },
  {
    _id:32342348478347,
    costomerName : "Rian",
  Date : "12-06-2022",
  category:" Courier",
  totalpay:42343
  }
 
]

// console.log('this is from fack data', allOrder)

//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       // backgroundColor: "#A3D2ED",
//       backgroundColor: "#DB2777",
//       // color: theme.palette.common.black,
//       color: "#fff",
//       fontSize: 18,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 18,
//     },
//   }));
  
  const AdminReports = () => {
    const [inputValue, setInputValue] = useState("");
    const { register, handleSubmit } = useForm();
    const [filterDates, setFilterDates] = useState([]);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [filterData, setFilterData] = useState([]);
  
    // console.log('filterdata',filterData);
    // const {allOrder,getLoad} = useSelector(allData)
    // const [allOrder,setAllOrder]= useState([])
    // // console.log('redux admin report',getLoad)
    // console.log('it is from use effect',allOrder)
  
    // useEffect(()=>{
    //   fetch('https://lit-sands-58263.herokuapp.com/api/orders/allorder')
    //   .then(res => res.json())
    //   .then(data => setAllOrder(data))
    // },[])
  
    // const dispatch = useDispatch()
    // useEffect(() => {
  
    //   dispatch(getAllOrders())
  
  
  
    // }, []);
  
    useEffect(() => {
      const newFilterDate = allOrder.filter(
        (createdAt) =>
          createdAt?.createdAt >= startDate && createdAt?.createdAt <= endDate
      );
      setFilterDates(newFilterDate);
    }, [allOrder, startDate, endDate]);
  
    // console.log(filterDates);
  
    const onSubmit = (data, e) => {
      const newStartDate = dateFormat(new Date(data.startDate), "yyyy-MM-dd");
      setStartDate(newStartDate);
      const newEndDate = dateFormat(new Date(data.endDate), "yyyy-MM-dd");
      setEndDate(newEndDate);
  
      toast.success("Filtering Attendance", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 4000,
      });
    };
    const handleOnBlur = (e) => {
      const number = e.target.value;
      setInputValue(number);
    };
  
    // filter employees ID
    useEffect(() => {
      if (filterDates.length > 0) {
        const filterID = filterDates.filter((data) => data.ID === inputValue);
        if (filterID.length > 0 || inputValue > 0) {
          setFilterData(filterID);
        } else {
          setFilterData(filterDates);
        }
      } else {
        const filterID = allOrder.filter((data) => data.ID === inputValue);
        if (filterID.length > 0 || inputValue > 0) {
          setFilterData(filterID);
        } else {
          setFilterData(allOrder);
        }
      }
    }, [inputValue, allOrder, filterDates]);
    const [text, setText] = useState("");
  
   const [category,setCategory]= useState([])
  //  console.log(category)
  
   const filterServicess = (e) =>{
    setCategory(e.target.value)
   }
  
   useEffect(()=>{
    fetch(`https://lit-sands-58263.herokuapp.com/api/orders/category/${category}`)
    .then(res=>res.json())
    .then(data=>setFilterData(data))
   },[category])
   
  
    
  
  
    const pdfExportComponent = useRef(null);
    const handleOnclick = () => {
      pdfExportComponent.current.save();
  
      Swal.fire("Your Report Downloaded Successfully!");
    };
    // download total report



    const columns = [
      { field: "costomerName", headerName: "Customer Name", flex: 1 },
      { field: "Date", headerName: "Date", flex: 1 },
      {
        field: "category",
        headerName: "Category",
        
        flex: 1,
        // align: "center",
      },
   
      {
        field: "totalpay",
        headerName: "Token Amount",
        flex: 1,
      },
      // {
      //   field: "moveingTo",
      //   headerName: "Floor No",
      //   flex: 1,
      // },
      // {
      //   field: "picparkingarea",
      //   headerName: "Service Lift",
      //   flex: 1,
      // },
  
  
      // {
      //   field: "Details Info",
      //   renderCell: (index) => {
      //     return <Button onClick={() => handleOpenModal(index.id)}>View</Button>;
      //   },
       
      // },
    ];
  
    // const theme = useTheme();
    // // const colors = tokens(theme.palette.mode);
  
    // modal
  
    const [homerelocate, setHomerelocation] = useState([]);
    useEffect(() => {
      fetch("https://good-pear-lemur-sari.cyclic.app/api/homerelocate/getHomeRelocate")
        .then((data) => data.json())
        .then((result) => setHomerelocation(result));
    }, []);
  
    // index of reviews
    const [index, setIndex] = React.useState(0);
    console.log("index number", index);
  
    const [Mopen, setMOpen] = React.useState(false);
  
    const handleOpenModal = (index) => {
      setMOpen(true);
      setIndex(index);
    };
    const reloadpage = () => window.location.reload(true);
    const handleClose = () => {
      setMOpen(false);
      reloadpage();
    };
  
    // modal






    return (

        <DashboardLayout> 
        <DashboardNavbar />




      <Container>
        {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ mt: 2,
             color: "#DB2777",
             fontFamily: 'Bitter'
             
             }} variant="h4">
            Admin Details Report
          </Typography>
  
  
          <Button
            sx={{ padding: "2px 50px !important", height: "50px !important", marginTop:'20px', backgroundColor:'#DB2777' }}
            className="btn_regular "
            onClick={() => handleOnclick()}
            variant="contained"
          >
            <FileDownloadIcon /> Total Report
          </Button>
  
        </Box> */}
        <Box sx={{ mt: 6, mb: 3 }}>
          {/* searchbar */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      sx={{ width: "100%" }}
                      {...register("startDate")}
                      id="outlined-basic"
                      type="date"
                      variant="outlined"
                      label="Start Date *"
                      focused
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      sx={{ width: "100%" }}
                      {...register("endDate")}
                      id="outlined-basic"
                      type="date"
                      variant="outlined"
                      label="End Day *"
                      focused
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Button
                      sx={{
                        // background: "var(--p_color) !important",
                        background: "green !important",
                        color: "#fff !important",
                        // color: "green !important",
                        width: "50%",
                      }}
                      className="btn_regular"
                      type="Search"
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
  
            {/* <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <select
                className="form-select mb-3"
                style={{ background: "#E5E5E5" }}
  
                onChange={filterServicess}
              >
                <option value="">All Services</option>
                <option value="Computer">MoversPackers</option>
                <option value="Intriory">Storage</option>
                <option value="Cleaning">Courier</option>
                <option value="Electrical">Vehicle Transport</option>
              </select>
            </Grid> */}


          </Grid>
        </Box>
  
        {/* filter date and downlod selery sheed  */}
        <PDFExport ref={pdfExportComponent}>
          <Box>
            <TableContainer component={Paper}>
              {/* <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                    
                    sx={{ 
                       fontFamily: 'Bitter'
                       
                       }} 
                    
                    align="left">Customer Name</StyledTableCell>
                    <StyledTableCell
                      sx={{ 
                        fontFamily: 'Bitter'
                        
                        }} 
                     align="left">Date</StyledTableCell>
                    <StyledTableCell
                      sx={{ 
                        fontFamily: 'Bitter'
                        
                        }} 
                    align="center">Category</StyledTableCell>
                    <StyledTableCell
                      sx={{ 
                        fontFamily: 'Bitter'
                        
                        }} 
                    align="center">Token Amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData.map((attendance) => (
                    <AdminReport
                      key={attendance._id}
                      attendance={attendance}
                    ></AdminReport>
                  ))}
                </TableBody>
              </Table> */}


              <>
        <Box m="20px">
          {/* <Header
            // title="CONTACTS"
            title="Courier Service"
            subtitle="List Of Courier Service Inquery"
          /> */}
          <Box
            m="40px 0 0 0"
            height="100vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: 'green',
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#fff",
                // color: "white",
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: 'black',
              },
              "& .MuiButton-text": {
                marginRight: "10px",
                marginBottom: "10px",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: "#fff",
                // color: "white",
              },
              "& .css-rtrcn9-MuiTablePagination-root": {
                backgroundColor: "#fff",
              },
              "& .MuiCheckbox-root": {
                color:  'gray',
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: 'gray',
              },
              "& .css-ncvp9o-MuiDataGrid-root": {
                fontSize: "0.875rem",
              },
              "& .css-mn7xsg": {
                fontSize: "0.875rem",
              },
              "& .css-1moek5w-MuiTablePagination-selectLabel ": {
                marginTop: "13px !important",
                fontSize: "0.875rem !important",
              },
              "& .css-1y2jrxs": {
                marginTop: "13px !important",
                fontSize: "0.875rem !important",
              },
              "& .css-waeldj-MuiTablePagination-displayedRows": {
                marginTop: "13px",
                fontSize: "0.875rem",
              },
              "& .css-1byb7xb-MuiInputBase-root-MuiTablePagination-select": {
                fontSize: "0.875rem !important",
              },
              "& .css-1cccqvr": {
                fontSize: "0.875rem !important",
                marginTop: "5px !important",
              },
              "& .css-168yih5-MuiDataGrid-root":{
                    fontSize:"0.89rem"
              },
              "& .css-1gz2l3m":{
                    fontSize:"0.89rem"
              },
            }}
          >
            <DataGrid
              rows={allOrder}
              loading={!homerelocate.length}
              columns={columns}
              // components={{ Toolbar: GridToolbar }}
              getRowId={(allOrder) => allOrder._id}
            />
          </Box>
        </Box>
      </>



            </TableContainer>
          </Box>
        </PDFExport>
      </Container>

      <Footer />
        </DashboardLayout >
    );
  };
  
  export default AdminReports;
  