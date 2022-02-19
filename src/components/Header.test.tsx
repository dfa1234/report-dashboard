import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";

test("renders the a working filter button", async () => {
    const callbackInterval = jest.fn();
    render(
        <Header
            interval={{ start: new Date(), end: new Date() }}
            setInterval={callbackInterval}
        />
    );
    const btnFilter = screen.getByText(/Filter/i);
    fireEvent.click(btnFilter);
    expect(callbackInterval).toHaveBeenCalledTimes(1);
});
