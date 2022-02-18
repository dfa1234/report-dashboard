import { Alert, Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useDataApi } from "./hook/useDataApi";

function App() {
    const [from, setFrom] = useState<Date>(new Date("2021-06-01"));
    const [to, setTo] = useState<Date>(new Date("2021-12-21"));

    const [data, isLoading, isError] = useDataApi<any[][]>(from, to);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <Header
                from={from}
                to={to}
                onChangeFrom={(d: Date) => setFrom(d)}
                onChangeTo={(d: Date) => setTo(d)}
            />
            <Box
                sx={{
                    display: "flex",
                    minHeight: 400,
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    p: 2,
                }}
            >
                {isLoading && <CircularProgress />}
                {isError && (
                    <Alert severity="error">The server is not available</Alert>
                )}
                {!isLoading && !!data && <Content data={data} />}
            </Box>
            <Footer
                onRefresh={() => {
                    fetch(`/.netlify/functions/populate-data-api`).then(() =>
                        setFrom((value) => new Date(value))
                    );
                }}
            />
        </Box>
    );
}

export default App;
