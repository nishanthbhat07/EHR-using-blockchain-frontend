import React from "react";

import {
  Card,
  Input,
  Label,
  FormGroup,
  Button,
  CardTitle,
  Form,
} from "reactstrap";
import AuthCardImg from "./auth-card-image";

const SignUp = (props) => {
  const { isLoading, fields, handleChange, onUserRegister } = props;
  return (
    <Card className="auth-card">
      <div className="position-relative image-side ">
        <AuthCardImg />
      </div>
      <div className="form-side">
        <Card className="inner-card">
          <CardTitle className="mb-4 title">Register</CardTitle>
          <Form>
            <FormGroup className="form-group has-float-label">
              <Label>Full Name</Label>
              <Input
                value={fields.name}
                onChange={(e) => handleChange(e)}
                name="name"
                className="form-control"
                required
              />
            </FormGroup>
            <FormGroup className="form-group has-float-label">
              <Label>Email</Label>
              <Input
                value={fields.email}
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                className="form-control"
                required
              />
            </FormGroup>
            <FormGroup className="form-group has-float-label">
              <Label>Password</Label>
              <Input
                value={fields.password}
                onChange={(e) => handleChange(e)}
                type="password"
                name="password"
                className="form-control"
                required
              />
            </FormGroup>
            <FormGroup className="form-group has-float-label">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                value={fields.cnfpassword}
                onChange={(e) => handleChange(e)}
                name="cnfpassword"
                className="form-control"
                required
              />
            </FormGroup>
            <Button
              onClick={(e) => onUserRegister(e)}
              className={`btn btn-multiple-state signup-button-container ${
                isLoading ? "show-spinner d-inline-block" : null
              }`}
            >
              <span className="spinner d-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="label">Sign Up!</span>
            </Button>
          </Form>
          <div
            className="click-here"
            role="button"
            style={{ cursor: "pointer" }}
            onClick={() => props.history.push("/doctor/login")}
          >
            <span>Don't have an account? Click Here!</span>
          </div>
        </Card>
      </div>
    </Card>
  );
};
export default SignUp;
