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
import AddDoctorForm from "./AddDoctorForm";
class AddDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor_name: "",
      doctor_age: "",
      doctor_qualification: "",
      doctor_speciality: "",
      years_of_experience: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSpeciality = this.handleChangeSpeciality.bind(this);
    this.handleChangeQualification = this.handleChangeQualification.bind(this);

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
  handleChangeSpeciality = (e) => {
    this.setState({ doctor_speciality: e });
  };
  handleChangeQualification = (e) => {
    this.setState({ doctor_qualification: e });
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
                      Add Doctor
                    </CardHeader>
                    <Separator className="mb-5" />
                    <div className="user_onboaring__rightside">
                      <Fade in>
                        <AddDoctorForm
                          state={this.state}
                          handleChange={this.handleChange}
                          onFinish={this.onFinish}
                          handleChangeQualification={
                            this.handleChangeQualification
                          }
                          handleChangeSpeciality={this.handleChangeSpeciality}
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

export default AddDoctor;
