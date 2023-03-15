import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Dropzone from "react-dropzone";

export const Upload = ({ formData, setForm, navigation }) => {
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (files1.length === 0) {
      errors.upload1 = "Please select a file";
    }
    if (files2.length === 0) {
      errors.upload2 = "Please select a file";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleDrop1 = (acceptedFiles) => {
    setFiles1(acceptedFiles);
    setForm({ ...formData, upload1: acceptedFiles });
  };

  const handleDrop2 = (acceptedFiles) => {
    setFiles2(acceptedFiles);
    setForm({ ...formData, upload2: acceptedFiles });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      navigation.next();
    }
  };

  return (
    <Container maxWidth="xs">
      <h3>Upload Documents</h3>

      <Dropzone onDrop={handleDrop1}>
        {({ getRootProps, getInputProps }) => (
          <div style={{ marginTop: "1rem" }}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, 1</p>
            </div>
            {files1.length > 0 && (
              <div>
                <h4>Selected Files:</h4>
                <ul>
                  {files1.map((file) => (
                    <li key={file.name}>
                      {file.name} - {file.size} bytes
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {errors.upload1 && (
              <div style={{ color: "red" }}>{errors.upload1}</div>
            )}
          </div>
        )}
      </Dropzone>

      <Dropzone onDrop={handleDrop2}>
        {({ getRootProps, getInputProps }) => (
          <div style={{ marginTop: "1rem" }}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, 2</p>
            </div>
            {files2.length > 0 && (
              <div>
                <h4>Selected Files:</h4>
                <ul>
                  {files2.map((file) => (
                    <li key={file.name}>
                      {file.name} - {file.size} bytes
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {errors.upload2 && (
              <div style={{ color: "red" }}>{errors.upload2}</div>
            )}
          </div>
        )}
      </Dropzone>

      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
