import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box, TextField, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

export const Header: FunctionComponent<{
    from: Date;
    to: Date;
    onChangeFrom: any;
    onChangeTo: any;
}> = ({ from, to, onChangeFrom, onChangeTo }) => {
    return (
        <Box
            sx={{
                backgroundColor: "lightgray",
                boxShadow: "-2px 2px 4px 1px rgb(0 0 0 / 30%)",
                height: 80,
                display: "flex",
                alignItems: "center",
                px: 3,
            }}
        >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Daily Shop Report
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="From"
                    inputFormat="dd/MM/yyyy"
                    value={from}
                    onChange={onChangeFrom}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                    label="To"
                    inputFormat="dd/MM/yyyy"
                    value={to}
                    onChange={onChangeTo}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Box>
    );
};
