import React, { useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import "./form.css";

export const Review = ({
	formData,
	navigation,
	uploadBack,
	uploadFront,
	setsubmitted_ticket_no,
}) => {
	const [isLoading, setisLoading] = useState(false);
	const { go } = navigation;
	const {
		firstName,
		lastName,
		contact,
		bbrand,
		btype,
		srno,
		vbrand,
		vtype,
		vno,
	} = formData;

	const handleSubmit = () => {
		console.log(uploadBack);
		console.log(uploadFront);

		const data = {
			Name: firstName,
			middle_name: lastName,
			last_name: lastName,
			contact,
			battery_brand: bbrand,
			battery_type: btype,
			battery_serialNumber: srno,
		};

		const fd = new FormData();
		Object.keys(data).forEach((key) => fd.append(key, data[key]));

		fd.append("front", uploadFront);
		fd.append("back", uploadBack);

		setisLoading(true);
		axios
			.post("http://localhost:8000/getWarrentyClaims/save", fd, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((data) => {
				setsubmitted_ticket_no(data.data.ticket_no);
				setisLoading(false);
				go("submit");
			})
			.catch(() => {
				setisLoading(false);
				alert("Something went wrong!");
			});
	};

	return (
		<Container maxWidth="sm">
			<h3>Review</h3>
			<div className="form-wrapper">
				<RenderAccordion
					summary="Names"
					go={go}
					details={[
						{ "First Name": firstName },
						{ "Last Name": lastName },
						{ "Contact No": contact },
					]}
				/>
				<RenderAccordion
					summary="Battery Details"
					go={go}
					details={[
						{ "Battery Brand": bbrand },
						{ "Battery Type": btype },
						{ "Serial No": srno },
					]}
				/>
				<RenderAccordion
					summary="Vehicle Details"
					go={go}
					details={[
						{ "Vehicle Brand": vbrand },
						{ "Vehicle Model": vtype },
						{ "Vehicle Reg-No": vno },
					]}
				/>
				<RenderAccordion
					summary="Upload"
					go={go}
					details={[
						{ "Warranty Card Front": uploadFront },
						{ "Warranty Card Back": uploadBack },
					]}
				/>
				<Button
					color="primary"
					variant="contained"
					style={{
						marginTop: "1.5rem",
						color: "white",
						backgroundColor: "#ff3131",
					}}
					disabled={isLoading}
					onClick={handleSubmit}>
					{isLoading ? "Loading.." : "Submit"}
				</Button>
			</div>
		</Container>
	);
};

export const RenderAccordion = ({ summary, details, go }) => {
	const isUpload = summary.startsWith("Upload");

	let previewBack;
	let previewFront;

	if (isUpload) {
		const imageFrontFile = Object.values(details[0]);
		previewFront = URL.createObjectURL(imageFrontFile[0]);

		const imageBackFile = Object.values(details[1]);
		previewBack = URL.createObjectURL(imageBackFile[0]);
	}

	return (
		<Accordion style={{ backgroundColor: "#f0f0f0", width: "100%" }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				{summary}
			</AccordionSummary>
			<AccordionDetail>
				<div>
					{isUpload ? (
						<>
							<img src={previewFront} width={200} alt="Front" />
							<img
								src={previewBack}
								width={200}
								alt="back"
								style={{ marginLeft: "10px" }}
							/>
						</>
					) : (
						details.map((data, index) => {
							const objKey = Object.keys(data)[0];
							const objValue = data[Object.keys(data)[0]];

							return (
								<ListItemText
									key={index}>{`${objKey}: ${objValue}`}</ListItemText>
							);
						})
					)}

					<IconButton
						color="primary"
						component="span"
						onClick={() => go(`${summary.toLowerCase()}`)}
						style={{ color: "#ff3131" }}>
						<EditIcon />
					</IconButton>
				</div>
			</AccordionDetail>
		</Accordion>
	);
};
