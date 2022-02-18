import { default as React, FunctionComponent } from "react";
import { Chart } from "react-google-charts";

const red = "#ff595e";
const blue = "#1982c4";
const green = "green";

export const options = {
    chart: {
        title: "Incomes, outcomes, and daily revenues for the grocery shop",
        hAxis: {
            format: "d/M/Y",
            gridlines: { count: 30 },
        },
    },
    series: [{ color: red }, { color: blue }, { color: green }],
};

export const Content: FunctionComponent<{ data: any[][] }> = ({ data }) => {
    return (
        <Chart
            chartType="Line"
            width="100%"
            height="500px"
            data={data}
            options={options}
        />
    );
};
