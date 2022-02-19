import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";

const styles = {
    headerWrapper: {
        backgroundColor: "lightgray",
        boxShadow: "-2px 2px 4px 1px rgb(0 0 0 / 30%)",
        height: 80,
        display: "flex",
        alignItems: "center",
        px: 3,
    },
    title: { flexGrow: 1 },
};

export const Header: FunctionComponent<{
    interval: { start: Date; end: Date };
    setInterval: (start: Date, end: Date) => unknown;
}> = ({ interval, setInterval }) => {
    const [from, setFrom] = useState<Date | null>(interval.start);
    const [to, setTo] = useState<Date | null>(interval.end);

    return (
        <Box sx={styles.headerWrapper}>
            <Typography variant="h6" component="div" sx={styles.title}>
                Daily Shop Report
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="From"
                    inputFormat="dd/MM/yyyy"
                    value={from}
                    onChange={(d: Date | null) => setFrom(d)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                    label="To"
                    inputFormat="dd/MM/yyyy"
                    value={to}
                    onChange={(d: Date | null) => setTo(d)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <Button onClick={() => !!from && !!to && setInterval(from, to)}>
                    Filter
                </Button>
            </LocalizationProvider>
        </Box>
    );
};
