import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./stepForm/Names";
import { VehicleDetails } from "./stepForm/VehicleDetails";
import { BatteryDetails } from "./stepForm/BatteryDetails";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";
import { Upload } from "./stepForm/Upload";
import {AlreadyRegistered} from "./stepForm/AreadyRegistered";
import { Review1 } from "./stepForm/Review1";

const defaultData = {
	firstName: "",
	lastName: "",
	contact: "",
	bbrand: "",
	btype: "",
	claimType: "",
	srno: "",
	vbrand: "",
	vtype: "",
	vno: "",
	bsrno: "",
	csrno: "",
};

const newRegistrationSteps = [
	{ id: "names", Comp: Names },
	{ id: "battery details", Comp: BatteryDetails },
	{ id: "vehicle details", Comp: VehicleDetails },
	{ id: "upload", Comp: Upload },
	{ id: "review", Comp: Review },
	{ id: "submit", Comp: Submit },
];

const alreadyRegisteredSteps = [
	{ id: "registered details", Comp: AlreadyRegistered },
	{ id: "battery details", Comp: BatteryDetails },
	{ id: "upload", Comp: Upload },
	{ id: "review", Comp: Review1 },
	{ id: "submit", Comp: Submit },
];

export const MultiStepForm = ({ type }) => {
	const [formData, setForm] = useForm(defaultData);
	const [uploadFront, setuploadFront] = useState({});
	const [uploadBack, setuploadBack] = useState({});

	//based on type render the steps
	const steps = type === "old" ? alreadyRegisteredSteps : newRegistrationSteps;
	const { step, navigation } = useStep({
		steps,
		initialStep: 0,
	});

	const props = {
		formData,
		setForm,
		navigation,
		uploadBack,
		uploadFront,
		setuploadBack,
		setuploadFront,
	};

	//get step details according to id
	const StepDetails = steps.find((v) => v.id === step.id);

	if (!StepDetails) {
		return (
			<div>
				<h1>Error 404</h1>
			</div>
		);
	}

	return <StepDetails.Comp {...props} />;
};
