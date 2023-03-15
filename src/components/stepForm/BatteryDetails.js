import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

export const BatteryDetails = ({ formData, setForm, navigation }) => {
  const { bbrand, btype, srno, claimType } = formData;
  const [errors, setErrors] = useState({});

  // Define options for Battery Brand and Battery Type
  const brandOptions = [
    "EXIDE",
    "AMARON",
    "POWERZONE",
    "LIVGUARD",
    "LIVFAST",
    "OTHERS",
    "LOCAL",
  ];
  const typeOptions = [
    "2.5LC",
    "TZ4",
    "TZ5",
    "TZ7",
    "TZ9",
    "TX14",
    "5LB",
    "7B",
    "9B",
    "14LA2",
    "300",
    "350",
    "400",
    "38B20",
    "36B20",
    "Type X",
  ];

  const handleValidation = () => {
    let formIsValid = true;
    let errors = {};

    if (!bbrand) {
      formIsValid = false;
      errors["bbrand"] = "Battery brand is required";
    }

    if (!btype) {
      formIsValid = false;
      errors["btype"] = "Battery type is required";
    }

    if (!srno) {
      formIsValid = false;
      errors["srno"] = "Battery Sr.No is required";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleClaimTypeChange = (event) => {
    setForm({ ...formData, claimType: event.target.value });
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      navigation.next();
    }
  };

  return (
    <Container maxWidth="xs">
      <h3>Battery Details</h3>
      <TextField
        label="Battery Brand"
        name="bbrand"
        value={bbrand}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={errors["bbrand"] ? true : false}
        helperText={errors["bbrand"]}
        select // Add select attribute to render as a select input
      >
        {brandOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
      <TextField
        label="Battery Type"
        name="btype"
        value={btype}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={errors["btype"] ? true : false}
        helperText={errors["btype"]}
        select // Add select attribute to render as a select input
      >
        {typeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
      <TextField
        label="Battery Sr.No"
        name="srno"
        value={srno}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        error={errors["srno"] ? true : false}
        helperText={errors["srno"]}
      />
      <RadioGroup
        aria-label="claim-type"
        name="claimType"
        value={claimType}
        onChange={handleClaimTypeChange}
      >
        <FormControlLabel
          value="NewClaim"
          control={<Radio />}
          label="New Claim"
          checked={claimType === "NewClaim"}
        />
        <FormControlLabel
          value="ReplacedBattery"
          control={<Radio />}
          label="Replaced Battery"
          checked={claimType === "ReplacedBattery"}
        />
      </RadioGroup>
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
