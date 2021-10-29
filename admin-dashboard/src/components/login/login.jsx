import React from "react";
import { Card, Button, CardTitle, FormGroup, Label } from "reactstrap";
import { Formik, Form, Field } from "formik";

import AuthCardImg from "./auth-card-image";

const Login = (props) => {
  const {
    initialValues,
    validateEmail,
    validatePassword,
    onUserLogin,
    isLoading,
  } = props;
  return (
    <Card className="auth-card">
      <div className="position-relative image-side ">
        <AuthCardImg />
      </div>

      <div className="form-side">
        <Card className="inner-card">
          <CardTitle className="mb-4 title">Login</CardTitle>
          <Formik initialValues={initialValues} onSubmit={onUserLogin}>
            {({ errors, touched }) => (
              <Form>
                <FormGroup className="form-group has-float-label">
                  <Label>Email</Label>
                  <Field
                    className="form-control"
                    type="email"
                    name="email"
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && (
                    <div className="invalid-feedback d-block">
                      {errors.email}
                    </div>
                  )}
                </FormGroup>
                <FormGroup className="form-group has-float-label">
                  <Label>Password</Label>
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    validate={validatePassword}
                  />
                  {errors.password && touched.password && (
                    <div className="invalid-feedback d-block">
                      {errors.password}
                    </div>
                  )}
                </FormGroup>
                <Button
                  className={`btn btn-multiple-state signup-button-container ${
                    isLoading ? "show-spinner d-inline-block" : null
                  }`}
                >
                  <span className="spinner d-block">
                    <span className="bounce1" />
                    <span className="bounce2" />
                    <span className="bounce3" />
                  </span>
                  <span className="label">Sign In!</span>
                </Button>
              </Form>
            )}
          </Formik>

          <div
            className="click-here"
            role="button"
            style={{ cursor: "pointer" }}
            onClick={() => props.history.push("/doctor/register")}
          >
            <span>Already have an account? Click Here!</span>
          </div>
        </Card>
      </div>
    </Card>
  );
};
export default Login;
