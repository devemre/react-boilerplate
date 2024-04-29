import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

import { fetchUser, loginUser } from "../services/auth.service";
import http from "../http";
import { useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppStore from "../store";

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const store = useStore();
  const navigate = useNavigate();

  const onSubmit = async (values: any) => {
    const response = await loginUser(values.username, values.password);

    if (response) {
      localStorage.setItem("boilerplate_token", response.data.token);
      http.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      store.dispatch({ type: "user/setUser", payload: response.data });
      navigate("/dashboard");
    }
  };

  const initialValues: FormValues = { username: "", password: "" };

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="flex flex-col gap-4 w-64 border border-1 rounded-md p-2">
          <h1 className="text-3xl text-center">Login</h1>
          <Field
            type="text"
            name="username"
            placeholder="username"
            className="border border-1 rounded-md hover:border-blue-500 focus:border-blue-700 p-2 transition-all outline-none"
          />
          <ErrorMessage name="username" component="div" />
          <Field
            type="password"
            name="password"
            placeholder="password"
            className="border border-1 rounded-md hover:border-blue-500 focus:border-blue-700 p-2 transition-all outline-none"
          />
          <ErrorMessage name="password" component="div" />
          <button
            type="submit"
            className="border rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default React.memo(Login);
