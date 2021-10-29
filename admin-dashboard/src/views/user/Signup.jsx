import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { Fade, FadeTransform, Transform } from "react-animation-components";
import Signup from "../../components/login/signup";
import { registerUser } from "../../redux/auth/user.actions";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      cnfpassword: "",
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.onUserRegister = this.onUserRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  onUserRegister = (e) => {
    e.preventDefault();
    // console.log(this.state);
    if (!this.props.loading) {
      if (this.state.email !== "" && this.state.password !== "") {
        let err_email = this.validateEmail(this.state.email);
        let err_pwd = this.validatePassword(this.state.password);
        if (!err_email && !err_pwd) {
          if (this.state.password === this.state.cnfpassword) {
            this.props.registerUser(this.state, this.props.history);
            // console.log(this.state);
          } else {
            alert("Passwords not match.");
          }
        } else {
          if (err_email) {
            alert(err_email);
          } else {
            alert(err_pwd);
          }
        }
      }
    }
  };

  componentDidUpdate() {
    if (this.props.error) {
      alert(this.props.error);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Row className="h-100">
          <Col xs="12" md="10" className="mx-auto my-auto">
            <Signup
              {...this.props}
              fields={this.state}
              handleChange={this.handleChange}
              onUserRegister={this.onUserRegister}
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
  registerUser: (values, history) => dispatch(registerUser(values, history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
