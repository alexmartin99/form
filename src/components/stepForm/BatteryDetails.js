import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./form.css";

export const BatteryDetails = ({ formData, setForm, navigation }) => {
	const { bbrand, btype, srno } = formData;
	const [errors, setErrors] = useState({});

	// Define options for Battery Brand and Sub-Brand
	const brandOptions = [
		{
			name: "EXIDE",
			btype: ["Exide1", "Exide2", "Exide3"],
		},
		{
			name: "AMARON",
			btype: ["Amron1", "Amron2", "Amron3"],
		},
		{
			name: "POWERZONE",
			btype: ["Powerzone1", "Powerzone2", "Powerzone3"],
		},
	];

	const handleValidation = () => {
		let formIsValid = true;
		let newErrors = {};

		if (!bbrand) {
			formIsValid = false;
			newErrors["bbrand"] = "Battery brand is required";
		}

		if (!btype) {
			formIsValid = false;
			newErrors["btype"] = "Battery Type is required";
		}

		if (!srno) {
			formIsValid = false;
			newErrors["srno"] = "Battery Sr.No is required";
		}

		setErrors(newErrors);
		return formIsValid;
	};

	const handleNext = () => {
		if (handleValidation()) {
			navigation.next();
		}
	};

	return (
		<Container maxWidth="xs">
			<h3>Battery Details</h3>
			<div className="form-wrapper">
				<TextField
					label="Battery Brand"
					name="bbrand"
					value={bbrand}
					onChange={setForm}
					margin="normal"
					variant="outlined"
					autoComplete="off"
					fullWidth
					error={!!errors["brand"]}
					helperText={errors["brand"]}
					select // Add select attribute to render as a select input
				>
					{brandOptions.map((option) => (
						<option key={option.name} value={option.name}>
							{option.name}
						</option>
					))}
				</TextField>

				<TextField
					label="Battery Type"
					name="btype"
					margin="normal"
					variant="outlined"
					autoComplete="off"
					value={btype}
					onChange={setForm}
					fullWidth
					error={!!errors["btype"]}
					helperText={errors["btype"]}></TextField>

				<TextField
					label="srno"
					name="srno"
					margin="normal"
					value={srno}
					onChange={setForm}
					variant="outlined"
					autoComplete="off"
					fullWidth></TextField>
				<div style={{ marginTop: "1rem" }}>
					<Button
						color="neutral"
						variant="contained"
						style={{ marginRight: "1rem" }}
						onClick={() => navigation.previous()}>
						Back
					</Button>
					<Button
						color="primary"
						variant="contained"
						onClick={handleNext}
						style={{ color: "white", backgroundColor: "#ff3131" }}>
						Next
					</Button>
				</div>
			</div>
		</Container>
	);
};
