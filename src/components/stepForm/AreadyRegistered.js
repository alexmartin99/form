import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './form.css'



export const AlreadyRegistered = ({ formData, setForm, navigation }) => {
  const [errors, setErrors] = useState({}); // initialize empty errors object
  const { contact, ticketno } = formData;

  const validate = () => {
    let errors = {}; // create a temporary errors object

    // check if the fields are empty and set the corresponding error message
     if (!contact) {
      errors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = "Invalid contact number";
    }
    // set the errors object to the temporary errors object
    setErrors(errors);

    // return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      navigation.next();
    }
  };
  return (
    <Container maxWidth="xs">
      <h3>Already Registered</h3>
      <div className="form-wrapper">
        <TextField
          label="Contact No"
          name="contact"
          value={contact}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          style={{backgroundColor:"white",}}
          error={!!errors.contact} // check if there is an error for this field
          helperText={errors.contact} // show the error message if there is one
        />
        <TextField
          label="Ticket No"
          name="ticketno"
          value={ticketno}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          style={{backgroundColor:"white",}}
        />
        <div style={{ marginTop: "1rem" }}>
          <Button color="primary" 
                  variant="contained"
                  onClick={handleNext}
                  style={{color:"white",backgroundColor:"#ff3131"}}
                  >
            Next
          </Button>
        </div>
        </div>
    </Container>
  );
};