import { render } from "@testing-library/react";
import React from "react";
import { ChartContent } from "./ChartContent";

const sampleDatas = [
    ["Date", "Incomes", "Outcomes", "Revenues"],
    [new Date("2021-06-01"), 870, 59, 811],
    [new Date("2021-06-02"), 1133, 667, 466],
    [new Date("2021-06-03"), 621, 775, -154],
];

test("renders the chart", () => {
    const { baseElement } = render(<ChartContent data={sampleDatas} />);
    // the chart can't be tested with jest as explained here
    // https://github.com/rakannimer/react-google-charts/issues/214
    expect(baseElement).toMatchSnapshot();
});
