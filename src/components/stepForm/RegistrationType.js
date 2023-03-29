import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const RegistrationType = ({ onClick }) => {
	const handleClick = (id, e) => {
		onClick(id);
	};
	return (
		<Container maxWidth="sm" className="container">
			<Box className="form-wrapper">
				<Box
					onClick={handleClick.bind(this, "old")}
					style={{ padding: "10px", border: "1px solid red", margin: "5px" }}>
					Already Registerd
				</Box>
				<Box
					onClick={handleClick.bind(this, "new")}
					style={{ padding: "10px", border: "1px solid red", margin: "5px" }}>
					New
				</Box>
			</Box>
		</Container>
	);
};

export default RegistrationType;
