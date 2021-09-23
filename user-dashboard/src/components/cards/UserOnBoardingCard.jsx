import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Label,
  FormGroup,
  Button,
  Form,
} from "reactstrap";
import { Separator } from "../common/Separator";
const UserOnBoardingCard = () => {
  return (
    <Card className="d-flex flex-row mb-4">
      <div className="d-flex flex-grow-1 min-width-zero">
        <CardBody className=" pl-0 align-self-center  flex-sm-row pl-3">
          <CardHeader style={{ fontSize: 24, marginTop: 15 }}>
            User On-Boarding Form
          </CardHeader>
          <Separator className="mb-5" />
          <div className="justify-content-center pl-3 ml-3">
            <Form>
              <FormGroup className="form-group ">
                <Label>Full Name</Label>
                <Input name="name" className="form-control" required />
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Address</Label>
                <Input
                  type="textarea"
                  name="address"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Contact</Label>
                <Input
                  type="text"
                  name="contact"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Age</Label>
                <Input
                  type="text"
                  name="age"
                  className="form-control"
                  required
                />
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Blood Group</Label>
                <Input type="select" name="blood_group" className="" required>
                  <option>A +ve</option>
                  <option>A -ve</option>
                  <option>O +ve</option>
                  <option>O -ve</option>
                  <option>B +ve</option>
                  <option>B -ve</option>
                  <option>AB +ve</option>
                  <option>AB -ve</option>
                </Input>
              </FormGroup>
              <FormGroup className="form-group ">
                <Label>Medical Information</Label>
                <Input
                  type="textarea"
                  name="medical_info"
                  className="form-control"
                  required
                />
              </FormGroup>
              <Button
                className={`btn btn-multiple-state signup-button-container`}
              >
                <span className="spinner d-block">
                  <span className="bounce1" />
                  <span className="bounce2" />
                  <span className="bounce3" />
                </span>
                <span className="label">Submit</span>
              </Button>
            </Form>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};
export default UserOnBoardingCard;
