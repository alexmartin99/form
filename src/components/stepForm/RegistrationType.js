import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./form.css"

const RegistrationType = ({ onClick }) => {
	const handleClick = (id, e) => {
		onClick(id);
	};
	
	return (
		<Container maxWidth="md" className="container" >
			<h3>Warranty Registration </h3>
			<h2 style={{color:"#ff3131",marginBottom:"0px",}}>Register your Batteries</h2>
			<h2 style={{marginTop:"2px"}}>It's Simple, useful and Paperless</h2>
			<Box className="form-wrapper">
			
				<Box
					onClick={handleClick.bind(this, "old")}
					style={{  backgroundColor:"#ff3131", padding: "10px", border: "1px solid red", margin: "5px", borderRadius:"5px",marginBottom:"30px" }}>
					<Typography variant="p" style={{color: 'white'}}>
                       Already Registered
                    </Typography>
				</Box>
				<Box
					onClick={handleClick.bind(this, "new")}
					style={{ backgroundColor:"#ff3131", padding: "10px", border: "1px solid red", margin: "5px", borderRadius:"5px" }}>
					<Typography variant="p" style={{color: 'white'}}>
                       New Claim ...
                    </Typography>
				</Box>
				
				<div style={{display:"flex",justifyContent:"center", marginTop:"50px" }}>
				<div className="pannel">
					<WhatsAppIcon/>
					<h4 style={{marginBottom:"5px"}}>Whatsapp : </h4>
				    <p style={{marginRight:"50px"}}>Message on Whatsapp at</p>
				    <h4 style={{marginTop:"5px"}}>+91 7045902196</h4>
				</div>
				<div className="pannel">
					<LocalPhoneOutlinedIcon/>
					<h4 style={{marginBottom:"5px"}}>Call : </h4>
				    <p style={{marginRight:"50px"}}>Call to Register at</p>
				    <h4 style={{marginTop:"5px"}}> +91 7045902196</h4>
				</div>
				<div className="pannel">
					<MailOutlineIcon/>
					<h4 style={{marginBottom:"5px"}}>E-Mail : </h4>
				    <p>Email us at</p>
				    <h4 style={{marginTop:"5px"}}>starbattery66@gmail.com</h4>
				</div>
				</div>
			</Box>
			
		</Container>
	);
};

export default RegistrationType;
