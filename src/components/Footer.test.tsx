import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Footer } from "./Footer";

test("renders a working generate button", async () => {
    const onRefreshMock = jest.fn();
    render(<Footer onRefresh={onRefreshMock} />);
    const btn = screen.getByText(/Generate/i);
    fireEvent.click(btn);
    expect(onRefreshMock).toHaveBeenCalledTimes(1);
});
