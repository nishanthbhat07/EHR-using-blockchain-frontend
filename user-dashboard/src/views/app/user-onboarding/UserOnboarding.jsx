import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import UserOnBoardingCard from "../../../components/cards/UserOnBoardingCard";
import { Fade, FadeTransform, Transform } from "react-animation-components";
import { Helmet } from "react-helmet";

class UserOnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      contact: "",
      age: "",
      blood_group: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  changePage = () => {
    switch (this.props.history.location.pathname) {
      case "/app/user-on-boarding":
        console.log("[STATE]", this.state);
        localStorage.setItem("user_details", JSON.stringify(this.state));
        this.props.history.push("/app/user-on-boarding/user-medical");
        break;
      default:
        return 1;
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <Helmet>
          <title>User Medical Details</title>
        </Helmet>
        <FadeTransform
          in
          transformProps={{
            enterTransform: "translateX(0)",
            exitTransform: "translateX(100%)",
          }}
        >
          <Row>
            <Col xs={12}>
              <UserOnBoardingCard
                history={this.props.history}
                state={this.state}
                handleChange={this.handleChange}
                changePage={this.changePage}
              />
            </Col>
          </Row>
        </FadeTransform>
      </>
    );
  }
}
export default UserOnBoarding;
