import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import UserMedicalCard from "../../../components/cards/UserMedicalCard";
import { Helmet } from "react-helmet";

class UserMedical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: 0,
      height: 0,
      weight: 0,
      allergy: "",
      medical_history: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  calculateBMI = () => {
    if (this.state.height === 0 || this.state.weight === 0) return;
    let bmi =
      (this.state.weight / this.state.height / this.state.height) * 10000;
    this.setState({ bmi: bmi });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFinish = () => {
    let user_details = JSON.parse(localStorage.getItem("user_details"));
    const user_full_details = { ...this.state, ...user_details };
    localStorage.removeItem("user_details");
    console.log(user_full_details);
  };

  render() {
    return (
      <>
        <Helmet>
          <title>User Medical Details</title>
        </Helmet>
        <Row>
          <Col xs={12}>
            <UserMedicalCard
              history={this.props.history}
              state={this.state}
              handleChange={this.handleChange}
              calculateBMI={this.calculateBMI}
              onFinish={this.onFinish}
            />
          </Col>
        </Row>
      </>
    );
  }
}
export default UserMedical;
