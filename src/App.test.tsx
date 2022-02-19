import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import React from "react";
import App from "./App";
import * as testJson from "./mocks/sampleDatas.json";

beforeEach(() => {
    fetchMock.resetMocks();
});

test("renders the app with loading test", async () => {
    fetchMock.mockResponse(JSON.stringify((testJson as any).default));

    render(<App />);

    await waitFor(() => {
        const loadingCicle = screen.getByTestId("loading");
        expect(loadingCicle).toBeInTheDocument();
    });
});
