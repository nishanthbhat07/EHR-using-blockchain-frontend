import React, { Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardBody,
  Input,
  Label,
  FormGroup,
  Form,
} from "reactstrap";
import { Separator } from "../../../components/common/Separator";
import { connect } from "react-redux";
import Loader from "../../../components/loader/Loader";
import { fetchUserPermission } from "../../../redux/permissions/permission.actions";
import { Helmet } from "react-helmet";
import { Fade, FadeTransform, Stagger } from "react-animation-components";

class ViewMedical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      priv_key: "",
      public_key: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFinish = this.onFinish.bind(this);
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onFinish = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>View Patient Medical</title>
        </Helmet>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Row className="mt-3">
            <Col xs={12}>
              <Card className="d-flex flex-row mb-4">
                <div className="d-flex flex-grow-1 min-width-zero">
                  <CardBody>
                    <CardHeader>Access Patient File</CardHeader>
                    <Separator className="mb-5" />
                    <Row className="medical-access-form">
                      <Col xs={{ offset: 3, size: 6 }}>
                        <Form>
                          <FormGroup className="form-group ">
                            <Label>Name</Label>
                            <Input
                              type="text"
                              name="name"
                              value={this.state.name}
                              onChange={(e) => this.handleChange(e)}
                              className="form-control"
                              required
                            />
                          </FormGroup>
                          <FormGroup className="form-group ">
                            <Label>Private Key</Label>
                            <Input
                              type="text"
                              name="priv_key"
                              value={this.state.priv_key}
                              onChange={(e) => this.handleChange(e)}
                              className="form-control"
                              required
                            />
                          </FormGroup>
                          <FormGroup className="form-group ">
                            <Label>Public Key</Label>
                            <Input
                              type="text"
                              name="public_key"
                              value={this.state.public_key}
                              onChange={(e) => this.handleChange(e)}
                              className="form-control"
                              required
                            />
                          </FormGroup>
                          <Button
                            onClick={this.onFinish}
                            className={`btn btn-multiple-state signup-button-container`}
                          >
                            <span className="spinner d-block">
                              <span className="bounce1" />
                              <span className="bounce2" />
                              <span className="bounce3" />
                            </span>
                            <span className="label">Access File!</span>
                          </Button>
                        </Form>
                      </Col>
                    </Row>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </FadeTransform>
      </Fragment>
    );
  }
}

export default ViewMedical;
