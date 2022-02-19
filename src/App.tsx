import { Alert, Box, CircularProgress } from "@mui/material";
import React, { useCallback, useState } from "react";
import { ChartContent } from "./components/ChartContent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useDataApi } from "./hook/useDataApi";

const styles = {
    globalWrapper: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    mainContent: {
        display: "flex",
        minHeight: 400,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        p: 2,
    },
};

function App() {
    const [dates, setDates] = useState<{ from: Date; to: Date }>({
        from: new Date("2021-06-01"),
        to: new Date("2021-12-21"),
    });

    const [data, isLoading, isError] = useDataApi<any[][]>(dates);

    const refreshCallback = useCallback(() => {
        fetch(`/.netlify/functions/populate-data-api`).then(() =>
            setDates({
                from: dates.from,
                to: dates.to,
            })
        );
    }, []);

    return (
        <Box sx={styles.globalWrapper}>
            <Header
                interval={{ start: dates.from, end: dates.to }}
                setInterval={(start, end) => {
                    setDates({
                        from: start,
                        to: end,
                    });
                }}
            />
            <Box sx={styles.mainContent}>
                {isLoading && <CircularProgress />}
                {isError && (
                    <Alert severity="error">Server is not available</Alert>
                )}
                {!isLoading && !!data && <ChartContent data={data} />}
            </Box>
            <Footer onRefresh={refreshCallback} />
        </Box>
    );
}

export default App;
