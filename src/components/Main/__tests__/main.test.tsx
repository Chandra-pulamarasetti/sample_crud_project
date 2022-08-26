import React from "react";
import Main from "../Main";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const MainApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );
};

describe("render main container", () => {
  test("render main component with update button", async () => {
    render(<MainApp />);
    const buttons = await screen.findAllByText('Update');
    expect(buttons.length).toBe(100)
  });
  
});