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

import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

import Typography from "@mui/material/Typography";
// import { Scrollbars } from 'react-custom-scrollbars';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
// import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";
import SidenavCollapseChild from "examples/Sidenav/SidenavCollapseChild";

function Sidenav({ color, brand, brandName, routes, ...rest }) {





  console.log("test routes fronm sidenav", routes)

  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  // const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, href, route }) => {
  const renderRoutes = routes.map((data, index) => {
    console.log('from side nav child test value test', data.child)

    let returnValue;

    // return routes.map((route, index) => (
    //   route.index ? (
    //     <Route
    //       index
    //       path={route.path}
    //       element={<PageWrapper state={route.state}>
    //         {route.element}
    //       </PageWrapper>}
    //       key={index}
    //     />
    //   ) : (
    //     <Route
    //       path={route.path}
    //       element={
    //         <PageWrapper state={route.child ? undefined : route.state}>
    //           {route.element}
    //         </PageWrapper>
    //       }
    //       key={index}
    //     >
    //       {route.child && (
    //         generateRoute(route.child)
    //       )}
    //     </Route>
    //   )
    // ));



    if (data.type === "collapse") {
      returnValue = data.href ? (
        <Link
          href={data.href}
          key={data.key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={data.name} 
            icon={data.icon}
            active={data.key === collapseName}
            noCollapse={data.noCollapse}
          />
        </Link>
      ) : (
        <>
        <NavLink key={data.key} to={data.route}>
          <SidenavCollapse name={data.name} icon={data.icon}  />
    
        </NavLink>

{/* { data?.child?.map((cdata, index)=>(
  // console.log("child test", cdata)
  <NavLink key={cdata.key} to={cdata.route}>
  <SidenavCollapseChild name ={cdata.name} icon={cdata.icon} active={data.key === collapseName} />
  </NavLink>
))
     } */}
     </>

      ); 
    }

    
   
    
    // if ( data.child.type === "collapse") {
    //   returnValue = data.child.href ? (
    //     <Link
    //       href={data.child.href}
    //       key={data.child.key}
    //       target="_blank"
    //       rel="noreferrer"
    //       sx={{ textDecoration: "none" }}
    //     >
    //       <SidenavCollapse
    //         name={data.child.name} 
    //         icon={data.child.icon}
    //         active={data.child.key === collapseName}
    //         noCollapse={data.child.noCollapse}
    //       />
    //     </Link>
    //   ) : (
    //     <NavLink key={data.child.key} to={data.child.route}>
    //       <SidenavCollapse name={data.child.name} icon={data.child.icon} active={data.child.key === collapseName} />
    //     </NavLink>
    //   ); 
    // }
    
    
    
    
    
    else if (data.type === "title") {
      returnValue = (
        <MDTypography
          key={data.key}
          color={textColor}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {data.title}
        </MDTypography>
      );
    } else if (data.type === "divider") {
      returnValue = (
        <Divider
          key={data.key}
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
      );
    }

    return returnValue;
  });

  return (
  

    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >


      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}tttt
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MDTypography>
        </MDBox>
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          {/* {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem" />} */}
          {/* {brand && <MDBox />} */}
          {/* {brand && <MDBox component="img" src="https://i.ibb.co/GkDmxyC/trans23jpg.jpg" alt="Brand" width="100%" />} */}
          {/* <MDBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </MDTypography>
          </MDBox> */}
            <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width:"100%",
          paddingBottom:"0px",
          // mt: 2,
          backgroundColor: "#fff!important",
          // backgroundColor: '#141B2D !important',
          // background: "black !important",
        
        }}
      >
        <Avatar
          sx={{ "& .css-1v6zmq-MuiAvatar-img ":{
            height:"100% !important"
          },
           width: 90, height: 90,marginTop: '20px' }}
          src="https://i.postimg.cc/nr6bk3yk/jon.jpg"
          // src={user.photoURL}
          alt="img"
        />
        <Typography  sx={{ color:'#153d77', fontSize:'17px',  fontWeight:'500', textAlign:'center', marginTop:'10px', marginBottom:"0px" }} variant="h6" gutterBottom mt={1}>
          {/* {user?.username} */}
          {/* Welcome Back! {user?.username}  */}
          David Smith
          {/* David */}
        </Typography>
        <Typography  sx={{ color:'#153d77', fontSize:'15px', textAlign:'center', marginBottom:"20px" }} variant="h6" gutterBottom >
          {/* {user?.username} */}
          {/* Welcome Back! {user?.username}  */}
         Francies
          {/* David */}
        </Typography>
      </Box>
        </MDBox>
      </MDBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      <List>{renderRoutes}</List>
      {/* <MDBox p={2} mt="auto">
        <MDButton
          component="a"
          href="https://www.creative-tim.com/product/material-dashboard-pro-react"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color={sidenavColor}
          fullWidth
        >
          upgrade to pro
        </MDButton>
      </MDBox> */}
    <SidenavRoot> </SidenavRoot>

  

 
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
