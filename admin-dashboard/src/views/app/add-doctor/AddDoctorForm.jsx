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

const Qualification = [
  {
    value: "MBBS",
    label: "MBBS",
  },
  {
    value: "BDS",
    label: "BDS",
  },
  {
    value: "MD",
    label: "MD",
  },
];
const speciality = [
  {
    value: "General practitioner",
    label: "General practitioner",
  },
  {
    value: "Obstetrician and gynaecologist",
    label: "Obstetrician and gynaecologist",
  },
  {
    value: "Psychiatrist",
    label: "Psychiatrist",
  },
  {
    value: "Dentist",
    label: "Dentist",
  },
  {
    value: "Dermatologist",
    label: "Dermatologist",
  },
];
const AddDoctorForm = ({
  state,
  handleChange,
  onFinish,
  handleChangeSpeciality,
  handleChangeQualification,
}) => {
  return (
    <Card className="inner-card">
      <div className="justify-content-center pl-3 ml-3">
        <Form>
          <FormGroup className="form-group ">
            <Label>Name</Label>
            <Input
              type="text"
              name="doctor_name"
              value={state.doctor_name}
              onChange={(e) => handleChange(e)}
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>Age</Label>
            <Input
              type="number"
              value={state.doctor_age}
              onChange={(e) => handleChange(e)}
              name="doctor_age"
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>No of Experience</Label>
            <Input
              type="number"
              value={state.years_of_experience}
              onChange={(e) => handleChange(e)}
              name="years_of_experience"
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>Qualification</Label>
            <Select
              name="doctor_qualification"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={Qualification}
              onChange={(e) => handleChangeQualification(e)}
            />
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>Qualification</Label>
            <Select
              name="doctor_speciality"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={speciality}
              onChange={(e) => handleChangeSpeciality(e)}
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
            <span className="label">Add Doctor</span>
          </Button>
        </Form>
      </div>
    </Card>
  );
};
export default AddDoctorForm;
