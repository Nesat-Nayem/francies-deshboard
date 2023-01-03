/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/* <MDAvatar src={image} name={name} size="sm" variant="rounded" /> */}
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      // { Header: "Moving From", accessor: "project", width: "30%", align: "left" },
      { Header: "Moving From", accessor: "project", align: "left" },
      { Header: "Moving To", accessor: "budget", align: "left" },
      { Header: "Number", accessor: "status", align: "center" },
      { Header: "Date", accessor: "completion", align: "center" },
      { Header: "PicUp Time", accessor: "action", align: "center" },
      { Header: "Perking Area", accessor: "parkingArea", align: "center" },
      { Header: "Details", accessor: "detailsInfo", align: "center" },
    ],

    rows: [
      {
        // project: <Project image={LogoAsana} name="Asana" />,
        project: <Project image={LogoAsana} name="Pune" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
           	Hyderabad
          </MDTypography>
        ),
        status: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            91 234343432
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
          02 - 02 - 23
          </MDTypography>
        ),
        action: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            12:00 PM
          </MDTypography>
        ),
        parkingArea: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            parking area here
          </MDTypography>
        ),
        detailsInfo: (
          <MDTypography  component='a' href="" variant="button" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            View
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoGithub} name="	Hyderabad" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
          Bangalore
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          91 234343432
          </MDTypography>
        ),
        // completion: <Progress color="success" value={100} />,
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
          12 - 02 - 23
          </MDTypography>
        ),
        action: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            12:00 AM
          </MDTypography>
        ),
        parkingArea: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            area perking
          </MDTypography>
        ),
        detailsInfo: (
          <MDTypography  component='a' href="" variant="button" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            View
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoAtlassian} name="Bangalore" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
        	Mumbai
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           91 234343432
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
          12 - 02 - 23
          </MDTypography>
        ),
        action: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            02:00 PM
          </MDTypography>
        ),
        parkingArea: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            parking 
          </MDTypography>
        ),
        detailsInfo: (
          <MDTypography  component='a' href="" variant="button" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            View
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoSpotify} name="	Delhi" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           91 234343432
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
          12 - 02 - 23
          </MDTypography>
        ),
        action: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            09:00 PM
          </MDTypography>
        ),
        parkingArea: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
           parking address 
          </MDTypography>
        ),
        detailsInfo: (
          <MDTypography  component='a' href="" variant="button" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            View
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoSlack} name="	Mumbai" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $1,000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            91 234343432
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
          12 - 01 - 23
          </MDTypography>
        ),
        action: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            08:00 PM
          </MDTypography>
        ),
        parkingArea: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            lot star point
          </MDTypography>
        ),
        detailsInfo: (
          <MDTypography  component='a' href="" variant="button" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            View
          </MDTypography>
        ),
      },
      {
        project: <Project image={logoInvesion} name="Invesion" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $2,300
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          91 234343432
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
          13 - 02 - 23
          </MDTypography>
        ),
        action: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            01:00 AM
          </MDTypography>
        ),
        parkingArea: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
           lot star point
          </MDTypography>
        ),
        detailsInfo: (
          <MDTypography component='a' href="" variant="button" color="text" fontWeight="medium">
            {/* <Icon>more_vert</Icon> */}
            View
          </MDTypography>
        ),
      },
    ],
  };
}
