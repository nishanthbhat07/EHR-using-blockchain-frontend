import React from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { Separator } from "../../../components/common/Separator";

import { Worker } from "@react-pdf-viewer/core";
import { connect } from "react-redux";
import { fetchUserPrescription } from "../../../redux/prescriptions/prescriptions.actions";
import { Fade, FadeTransform, Stagger } from "react-animation-components";
import Loader from "../../../components/loader/Loader";
import { Viewer } from "@react-pdf-viewer/core";
import { Helmet } from "react-helmet";
import AddPatientForm from "./AddPatientForm";
class AddPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      contact: "",
      dob: "",
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleChangeGender = this.handleChangeGender.bind(this);

    this.onFinish = this.onFinish.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleChangeGender = (e) => {
    this.setState({ gender: e });
  };

  onFinish = () => {
    console.log(this.state);
  };

  // componentDidMount() {
  //   const user_id = JSON.parse(localStorage.getItem("user"));
  //   console.log(this.props.user_permissions, "PERMISSIONS");
  //   this.props.fetchUserPrescription(user_id._id["$oid"]);
  // }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Add Doctor</title>
        </Helmet>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Row>
            <Col xs={12} md={12} lg={6}>
              <Card className="d-flex flex-row mb-4">
                <div className="d-flex flex-grow-1 min-width-zero">
                  <CardBody>
                    <CardHeader
                      style={{
                        fontSize: 24,
                        marginTop: 15,
                        background: "inherit",
                      }}
                    >
                      Add Patient
                    </CardHeader>
                    <Separator className="mb-5" />
                    <div className="user_onboaring__rightside">
                      <Fade in>
                        <AddPatientForm
                          state={this.state}
                          handleChange={this.handleChange}
                          onFinish={this.onFinish}
                          handleChangeGender={this.handleChangeGender}
                        />
                      </Fade>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </FadeTransform>
      </React.Fragment>
    );
  }
}

export default AddPatient;
