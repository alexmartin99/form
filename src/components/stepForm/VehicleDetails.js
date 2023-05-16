import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export const VehicleDetails = ({ formData, setForm, navigation }) => {
  const [errors, setErrors] = useState({}); // initialize empty errors object
  const { vbrand, vtype, vno } = formData;

  const validate = () => {
    let tempErrors = {}; // create a temporary errors object

    // check if the fields are empty and set the corresponding error message
    if (!vbrand) {
      tempErrors.vbrand = "Vehicle brand is required";
    }
    if (!vtype) {
      tempErrors.vtype = "Vehicle model is required";
    }
    if (!vno) {
      tempErrors.vno = "Vehicle registration number is required";
    }

    // set the errors object to the temporary errors object
    setErrors(tempErrors);

    // return true if there are no errors, false otherwise
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      navigation.next();
    }
  };

  return (
    <Container maxWidth="xs">
      <h3>Vehicle Details</h3>
      <div className="form-wrapper">
        <TextField
          label="Vehicle Brand"
          name="vbrand"
          value={vbrand}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          error={!!errors.vbrand} // check if there is an error for this field
          helperText={errors.vbrand} // show the error message if there is one
        />
        <TextField
          label="Vehicle Model"
          name="vtype"
          value={vtype}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          error={!!errors.vtype}
          helperText={errors.vtype}
        />
        <TextField
          label="Vehicle Reg-No"
          name="vno"
          value={vno}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          error={!!errors.vno}
          helperText={errors.vno}
        />
        <div style={{ marginTop: "1rem" }}>
          <Button
            color="neutral"
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={() => navigation.previous()}
          >
            Back
          </Button>
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
