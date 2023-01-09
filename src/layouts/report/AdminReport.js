import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const AdminReport = ({ attendance }) => {
    const {  costomerName, totalpay, username, Date, category,  } = attendance;
    return (
        <>
        <StyledTableRow>
            <StyledTableCell sx={{fontFamily:"Bitter"}} align="left">{costomerName}</StyledTableCell>
            <StyledTableCell sx={{fontFamily:"Bitter"}} align="left">{Date}</StyledTableCell>
            <StyledTableCell sx={{fontFamily:"Bitter"}} align="center">{category}</StyledTableCell>
             <StyledTableCell sx={{fontFamily:"Bitter"}} align="center">$ {totalpay}</StyledTableCell>
        </StyledTableRow>
    </>
    );
};

export default AdminReport;