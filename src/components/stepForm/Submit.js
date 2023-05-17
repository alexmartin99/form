import React from "react";
import Container from "@material-ui/core/Container";
import "./form.css";

export const Submit = ({ submitted_ticket_no }) => {
	return (
		<Container maxWidth="sm">
			<h3>Thank you for submitting, we will be in touch!</h3>
			<div className="form-wrapper">
				<h3>Contact Number : 9920190568</h3>
				<h3>Ticket Number : {submitted_ticket_no}</h3>
			</div>
		</Container>
	);
};
