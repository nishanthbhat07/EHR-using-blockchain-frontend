import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import Login from "../../components/login/login";
import { loginUser } from "../../redux/auth/user.actions";
import { Fade, FadeTransform, Transform } from "react-animation-components";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.onUserLogin = this.onUserLogin.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }
  validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };
  validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Please enter your password";
    } else if (value.length < 6) {
      error = "Password too short. Password has to be atleast 6 characters";
    }
    return error;
  };

  onUserLogin = (values) => {
    if (!this.props.loading) {
      if (values.email !== "" && values.password !== "") {
        this.props.loginUser(values, this.props.history);
      }
    }
  };

  componentDidUpdate() {
    if (this.props.error) {
      alert(this.props.error);
    }
  }

  render() {
    const { email, password } = this.state;
    const initialValues = { email, password };
    return (
      <FadeTransform
        in
        transformProps={{
          enterTransform: "translateX(0)",
          exitTransform: "translateX(100%)",
        }}
      >
        <Row className="h-100">
          <Col xs="12" md="10" className="mx-auto my-auto">
            <Login
              {...this.props}
              initialValues={initialValues}
              validateEmail={this.validateEmail}
              validatePassword={this.validatePassword}
              onUserLogin={this.onUserLogin}
              isLoading={this.props.loading}
            />
          </Col>
        </Row>
      </FadeTransform>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.authUser.user,
  loading: state.authUser.loading,
  error: state.authUser.error,
});
const mapDispatchToProps = (dispatch) => ({
  loginUser: (values, history) => dispatch(loginUser(values, history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
