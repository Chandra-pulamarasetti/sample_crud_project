import App from "./App";
import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const ModalApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

describe("render home page", () => {
  test("renders learn react link", () => {
    render(<ModalApp />);
    const headerElement = screen.getByText(/My Posts/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("landing on a home page", () => {
    const homePage = "/";
    render(
      <MemoryRouter initialEntries={[homePage]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/My Posts/i)).toBeInTheDocument();
  });

  test("landing on a update page", () => {
    const updatePage = "/update/3";
    render(
      <MemoryRouter initialEntries={[updatePage]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Update Post - 3")).toBeInTheDocument();
  });

  test("landing on a create page", () => {
    const createPage = "/create";
    render(
      <MemoryRouter initialEntries={[createPage]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Create Post")).toBeInTheDocument();
  });
});
