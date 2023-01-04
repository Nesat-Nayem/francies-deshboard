/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Container } from '@mui/material';
import { Link } from "react-router-dom";
import './ManageInvoice.css'
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";



const data = [
    {
        "_id":  "6393278ef8fa4344e4faa915",
        "clientName": "Lilin",
        "total": 8767,
        "status": "pending",
        "createdAt": "2022-10-11T10:55:34.595+00:00",
        "senderAddress": "Mumbai",
        "clientAddress": "4 Street King Town, Holend",
        "clientEmail": "dabid@holand.com",
        "description": "Discription Is Too Long",
        "items": [
          {
            "name": "Fridge",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "Table",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "Chare",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "TV",
            "price": 423,
            "quantity": 3,
            "total": 434
          }
        ],
        "paymentDue": "92387",
        "paymentTerms": "good"
      },
      {
        "_id": "6393278ef8fa4344e4faa913",
        "clientName": "David",
        "total": 8767,
        "status": "paid",
        "createdAt": "2022-10-11T10:55:34.595+00:00",
        "senderAddress": "Mumbai",
        "clientAddress": "4 Street King Town, Holend",
        "clientEmail": "dabid@holand.com",
        "description": "Discription Is Too Long",
        "items": [
          {
            "name": "Fridge",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "Table",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "Chare",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "TV",
            "price": 423,
            "quantity": 3,
            "total": 434
          }
        ],
        "paymentDue": "92387",
        "paymentTerms": "good"
      },
      {
        "_id":"6393278ef8fa4344e4faa914",
      
        "clientName": "Smith",
        "total": 8767,
        "status": "pending",
        "createdAt": "2022-10-11T10:55:34.595+00:00",
        "senderAddress": "Mumbai",
        "clientAddress": "4 Street King Town, Holend",
        "clientEmail": "dabid@holand.com",
        "description": "Discription Is Too Long",
        "items": [
          {
            "name": "Fridge",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "Table",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "Chare",
            "price": 423,
            "quantity": 3,
            "total": 434
          },
          {
            "name": "TV",
            "price": 423,
            "quantity": 3,
            "total": 434
          }
        ],
        "paymentDue": "92387",
        "paymentTerms": "good"
      }
]



function Invoince() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}> */}



{/* here gose to bootstrap  */}


<> 
        <Container sx={{ width: "100%", mb: 5, marginTop: "40px" }}>
            {/* <Header
            title="Invoice"
            subtitle="List Of Invoice Trans23 All Transaction"
          /> */}

<div className='mt-5' >


      <div >
        {/* ======= invoice item =========== */}
        {data?.map((invoice) => (
          // <Link to='invoicedetails' >
            <div className="invoice__item">
              <div>
                <h5 style={{fontSize:"0.83em", color:"black"}} className="invoice__id">
                  {invoice._id.slice(0, 6).toUpperCase()}
                </h5>
              </div>

              <div>
                <h6 style={{fontSize:"0.85rem", color:"black"}} className="invoice__client">{invoice.clientName}</h6>
              </div>

              <div>
                {/* <p className="invoice__created">{invoice?.createdAt.toDateString()}</p> */}
                <p className="invoice__created">{new Date(invoice?.createdAt)?.toDateString()}</p>
              </div>

              <div>
                <p  className="invoice__total">${invoice.total}</p>
              </div>

              <div>
                <button
                  className={`${
                    invoice.status === "paid"
                      ? "paid__status"
                      : invoice.status === "pending"
                      ? "pending__status"
                      : "draft__status"
                  }`}
                >
                  {invoice.status}
                </button>
              </div>
            </div>
        //  </Link>
        ))}
      </div>
    </div>

        </Container>

     
        </>







{/* here gose to bootstrap */}



          {/* </Grid>
        </Grid>
      </MDBox> */}
      <Footer />
    </DashboardLayout>
  );
}

export default Invoince;
