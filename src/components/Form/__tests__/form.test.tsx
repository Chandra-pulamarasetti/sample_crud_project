import React from "react";
import { Provider } from "react-redux";
import { store } from "./../../../store";
import FormComponent from "../FormComponent";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

type propType = {
  isUpdating: boolean;
};

const FormApp: React.FC<propType> = ({ isUpdating }: propType) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FormComponent isUpdating={isUpdating} />
      </Provider>
    </BrowserRouter>
  );
};

describe("render form component", () => {
  test("render form component with update post text", () => {
    render(<FormApp isUpdating={true} />);
    const headerElement = screen.getByText(/Update Post/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("render form component with create post text", () => {
    render(<FormApp isUpdating={false} />);
    const headerElement = screen.getByText(/Create Post/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("render form component to validate form inputs", () => {
    render(<FormApp isUpdating={false} />);

    // userID
    const userIdInput = screen.getByTestId("userId-input");
    expect(userIdInput).toBeInTheDocument();
    expect(userIdInput).toHaveAttribute("type", "number");
    userEvent.type(userIdInput, "123");
    expect(screen.getByTestId("userId-input")).toHaveValue(123);

    // title
    const titleInput = screen.getByTestId("title-input");
    expect(titleInput).toBeInTheDocument();
    expect(titleInput).toHaveAttribute("type", "text");
    userEvent.type(titleInput, "Good Morning");
    expect(screen.getByTestId("title-input")).toHaveValue("Good Morning");

    // body
    const bodyInput = screen.getByTestId("body-input");
    expect(bodyInput).toBeInTheDocument();
    userEvent.type(bodyInput, "body text");
    expect(screen.getByTestId("body-input")).toHaveValue("body text");

    // cancel button
    const cancelBtn = screen.getByTestId("cancel-btn");
    expect(cancelBtn).toBeInTheDocument();

    // submit button
    const submitBtn = screen.getByTestId("submit-btn");
    expect(submitBtn).toBeInTheDocument();
  });
});
