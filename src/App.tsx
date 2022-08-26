import "./App.css";
import React from "react";
import RequiredAuth, { AuthProvider } from "./auth";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import FormComponent from "./components/Form/FormComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/create"
            element={
              <RequiredAuth>
                <FormComponent isUpdating={false} />
              </RequiredAuth>
            }
          />
          <Route
            path="/update/:id"
            element={
              <RequiredAuth>
                <FormComponent isUpdating={true} />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
