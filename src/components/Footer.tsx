import { Box, Button, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

const styles = {
    footerWrapper: {
        backgroundColor: "lightgray",
        boxShadow: "-1px -3px 4px 1px rgb(0 0 0 / 30%)",
        height: 80,
        display: "flex",
        alignItems: "center",
        px: 3,
    },
    footnote: { flexGrow: 1 },
};

export const Footer: FunctionComponent<{ onRefresh: any }> = ({
    onRefresh,
}) => {
    return (
        <Box sx={styles.footerWrapper}>
            <Typography variant="h6" component="div" sx={styles.footnote}>
                Code available{" "}
                <a
                    href="https://github.com/dfa1234/report-dashboard"
                    target="_blank"
                    rel="noreferrer"
                >
                    on github
                </a>
            </Typography>
            <Button onClick={onRefresh}>Generate another set of data</Button>
        </Box>
    );
};
