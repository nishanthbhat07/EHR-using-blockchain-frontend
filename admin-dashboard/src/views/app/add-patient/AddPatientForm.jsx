import React from "react";
import { Separator } from "../../../components/common/Separator";
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
import { Transform, Fade } from "react-animation-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const Gender = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Others",
    label: "Others",
  },
];

const AddPatient = ({ state, handleChange, onFinish, handleChangeGender }) => {
  return (
    <Card className="inner-card">
      <div className="justify-content-center pl-3 ml-3">
        <Form>
          <FormGroup className="form-group ">
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={state.name}
              onChange={(e) => handleChange(e)}
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>Age</Label>
            <Input
              type="number"
              value={state.age}
              onChange={(e) => handleChange(e)}
              name="age"
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>Contact</Label>
            <Input
              type="number"
              value={state.contact}
              onChange={(e) => handleChange(e)}
              name="contact"
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>DOB</Label>
            <Input
              type="date"
              value={state.dob}
              onChange={(e) => handleChange(e)}
              name="dob"
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>Gender</Label>
            <Select
              name="doctor_qualification"
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={Gender}
              onChange={(e) => handleChangeGender(e)}
            />
          </FormGroup>
          <Button
            onClick={onFinish}
            className={`btn btn-multiple-state signup-button-container`}
          >
            <span className="spinner d-block">
              <span className="bounce1" />
              <span className="bounce2" />
              <span className="bounce3" />
            </span>
            <span className="label">Add Patient</span>
          </Button>
        </Form>
      </div>
    </Card>
  );
};
export default AddPatient;
