import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Names = ({ formData, setForm, navigation }) => {
  const [errors, setErrors] = useState({}); // state to hold validation errors

  const { firstName, lastName, contact } = formData;

  const validateForm = () => {
    let errors = {};

    // check if all fields are filled
    if (!firstName) {
      errors.firstName = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!contact) {
      errors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = "Invalid contact number";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // return true if no errors
  };

  const handleNext = () => {
    if (validateForm()) {
      navigation.next();
    }
  };

  return (
    <Container maxWidth="xs">
      <h3>Customer Details</h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <TextField
        label="Contact No"
        name="contact"
        value={contact}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={!!errors.contact}
        helperText={errors.contact}
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handleNext}
      >
        Next
      </Button>
    </Container>
  );
};
