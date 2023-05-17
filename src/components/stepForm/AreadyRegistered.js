import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./form.css";
import axios from "axios";

export const AlreadyRegistered = ({ formData, setForm, navigation }) => {
	const [errors, setErrors] = useState({}); // initialize empty errors object
	const { contact, ticketno } = formData;
	const [isloading, setisloading] = useState(false);
	const [ticket_details, setticket_details] = useState([]);

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
			setisloading(true);
			axios
				.get(
					"http://localhost:8000/getWarrentyClaims/tickets?contact=" + contact
				)
				.then((data) => {
					if (!data.data.length) {
						alert("No tickets for this contact!");
						setisloading(false);
						setticket_details([]);
						return;
					}
					setisloading(false);
					setticket_details(data.data);
				})
				.catch(() => {
					setisloading(false);
				});
		}
	};
	return (
		<>
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
						style={{ backgroundColor: "white" }}
						error={!!errors.contact} // check if there is an error for this field
						helperText={errors.contact} // show the error message if there is one
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "space-between",
							gap: 8,
						}}>
						{ticket_details.length ? "Choose your ticket" : ""}
						{ticket_details.map((obj) => (
							<Button
								onClick={() => {
									const dt = {
										firstName: obj.Name,
										lastName: obj.last_name,
										contact: obj.contact,
										bbrand: obj.battery_brand,
										btype: obj.battery_type,
										srno: obj.battery_serialNumber,
										vbrand: "",
										vtype: "",
										vno: "",
										ticketno: obj.ticket_no,
									};

									Object.keys(dt).forEach((k) => {
										setForm({
											target: {
												value: dt[k],
												name: k,
											},
										});
									});

									navigation.next();
								}}
								variant="contained">
								ticket id: #{obj.ticket_no}
							</Button>
						))}
					</div>
					<div style={{ marginTop: "1rem" }}>
						<Button
							color="primary"
							variant="contained"
							onClick={handleNext}
							disabled={isloading}
							style={{ color: "white", backgroundColor: "#ff3131" }}>
							{isloading ? "Loading..." : "Search"}
						</Button>
					</div>
				</div>
			</Container>
		</>
	);
};
