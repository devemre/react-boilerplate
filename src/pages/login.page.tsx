import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

import { loginUser } from "../services/auth.service";
import { setAuthorizationHeader } from "../http";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserStore from "../store/slices/user-store.slice";
import Button from "../components/button.component";

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: any) => {
    const response = await loginUser(values.username, values.password);

    if (response) {
      setAuthorizationHeader(response.data.token);
      dispatch(UserStore.actions.setUser(response.data));
      navigate("/dashboard");
    }
  };

  const initialValues: FormValues = {
    username: "kminchelle",
    password: "0lelplR",
  };

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
          <Button text="Login" type="submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default React.memo(Login);
