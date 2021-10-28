import React from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import { motion } from "framer-motion";
import { Worker } from "@react-pdf-viewer/core";
import { connect } from "react-redux";
import { fetchUserPrescription } from "../../../redux/prescriptions/prescriptions.actions";
import { Fade, FadeTransform, Transform } from "react-animation-components";
import Loader from "../../../components/loader/Loader";
import { Viewer } from "@react-pdf-viewer/core";

const prescription_data = [
  {
    id: 0,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Fever",
    prescription_url:
      "https://ipfs.io/ipfs/QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
    hash: "QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
  },
  {
    id: 1,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Stomach Ache",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
  {
    id: 2,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Skin",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
  {
    id: 3,
    doctor_name: "Dr. ABC",
    prescription_date: new Date().toLocaleDateString("en-IN"),
    prescription_name: "Hair",
    prescription_url: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
  },
];
class MyPrescriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr_of_prescriptions: prescription_data,
      aws_uri: "https://hackrx-tier4.s3.ap-south-1.amazonaws.com/na.pdf",
      ipfshash: "QmaKsAAGGrbdC5RwBj7Pq1LhGbgwjhnp5n6keRD4DdCeMe",
    };
    this.load_prescription = this.load_prescription.bind(this);
  }

  load_prescription = (hash) => {
    console.log(hash);
    this.setState({ ipfshash: hash });
  };

  componentDidMount() {
    const user_id = JSON.parse(localStorage.getItem("user"));
    console.log(this.props.user_permissions, "PERMISSIONS");
    this.props.fetchUserPrescription(user_id._id["$oid"]);
  }

  render() {
    const { user_prescriptions, loading, error } = this.props;
    return (
      <FadeTransform
        in
        transformProps={{
          enterTransform: "translateX(0)",
          exitTransform: "translateX(100%)",
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
                    My Prescriptions
                  </CardHeader>
                  <Separator className="mb-5" />

                  <div className="render_prescription">
                    <Row>
                      <Col xs={4} className="prescription_title">
                        Consulted by
                      </Col>
                      <Col xs={4} className="prescription_title">
                        Date
                      </Col>
                      <Col xs={4} className="prescription_title">
                        Prescription
                      </Col>
                    </Row>
                    {loading && <Loader />}
                    {error && alert(error)}
                    {user_prescriptions.length !== 0 &&
                      this.state.arr_of_prescriptions.map((item, index) => (
                        <RenderPrescription
                          item={item}
                          key={index}
                          load_prescription={this.load_prescription}
                          history={this.props.history}
                        />
                      ))}
                  </div>
                </CardBody>
              </div>
            </Card>
          </Col>
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
                    Prescription
                  </CardHeader>
                  <Separator className="mb-5" />

                  {/*<PDFReader
                    width={500}
                    height={200}
                    url={`https://ipfs.infura.io/ipfs/${this.state.ipfshash}?filename=test.pdf`}
                  />*/}
                  <div className="view_prescription">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                      <Viewer
                        fileUrl={`https://ipfs.infura.io/ipfs/${this.state.ipfshash}?filename=test.pdf`}
                      />
                    </Worker>
                  </div>
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
      </FadeTransform>
    );
  }
}

const mapStateToProps = (state) => ({
  user_prescriptions: state.prescriptions.user_prescriptions,
  loading: state.prescriptions.loading,
  error: state.prescriptions.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserPrescription: (user_id) => dispatch(fetchUserPrescription(user_id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyPrescriptions);
const RenderPrescription = ({ item, key, history, load_prescription }) => (
  <Row className="prescription_row">
    <Col xs={4}>
      <span className="doctor_name">{item.doctor_name}</span>
    </Col>
    <Col xs={4}>
      <span className="prescription_date">{item.prescription_date}</span>
    </Col>
    <Col xs={4}>
      <Button
        onClick={() => load_prescription(item.hash)}
        className="btn btn-multiple-state prescription_button"
      >
        Load Prescription
      </Button>
    </Col>
  </Row>
);
