import React, { Component } from "react";
import DropzoneComponent from "react-dropzone-component";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  ModalFooter,
} from "reactstrap";
var ReactDOMServer = require("react-dom/server");

var dropzoneComponentConfig = {
  postUrl: "https://localhost:300/dummy-api",
  iconFiletypes: [".pdf"],
  showFiletypeIcon: true,
};
var eventHandlers = () => ({
  // console.log("LINE 27 FILE UPLOAD", config);
});
var dropzoneConfig = {
  thumbnailHeight: 160,
  maxFilesize: 500,
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="dz-preview dz-file-preview mb-3">
      <div className="d-flex flex-row ">
        <div className="p-0 w-30 position-relative">
          <div className="dz-error-mark">
            <span>
              <i />{" "}
            </span>
          </div>
          <div className="dz-success-mark">
            <span>
              <i />
            </span>
          </div>
          <div className="preview-container">
            {/*  eslint-disable-next-line jsx-a11y/alt-text */}
            <img data-dz-thumbnail className="img-thumbnail border-0" />
            <i className="simple-icon-doc preview-icon" />
          </div>
        </div>
        <div className="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative">
          <div>
            {" "}
            <span data-dz-name />{" "}
          </div>
          <div className="text-primary text-extra-small" data-dz-size />
          <div className="dz-progress">
            <span className="dz-upload" data-dz-uploadprogress />
          </div>
          <div className="dz-error-message">
            <span data-dz-errormessage />
          </div>
        </div>
      </div>
      <a href="#/" className="remove" data-dz-remove>
        {" "}
        <i className="glyph-icon simple-icon-trash" />{" "}
      </a>
    </div>
  ),
  headers: { "My-Awesome-Header": "header value" },
};
const UploadMedical = ({ isOpen, showModal }) => {
  return (
    <Modal isOpen={isOpen} toggle={() => showModal()}>
      <ModalHeader toggle={() => showModal()}>Upload!</ModalHeader>
      <ModalBody>
        <DropzoneComponent
          config={dropzoneComponentConfig}
          eventHandlers={eventHandlers}
          djsConfig={dropzoneConfig}
        />
      </ModalBody>
    </Modal>
  );
};
export default UploadMedical;
