import React, { useState } from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import RegistrationType from "./components/stepForm/RegistrationType";
import "./App.css";
import logo from "./logo.svg";

function App() {
	const [registrationType, setregistrationType] = useState();
	return (
		<div className="container">
			<img src={logo} alt="Logo" className="logo" />
			{registrationType ? (
				<MultiStepForm type={registrationType} />
			) : (
				<RegistrationType onClick={setregistrationType} />
			)}
		</div>
	);
}

export default App;
