import React, { useState, useCallback, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Dropzone from "react-dropzone";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import "./form.css";

export const Upload = ({
	navigation,
	setuploadBack,
	setuploadFront,
	uploadBack,
	uploadFront,
}) => {
	const [files1, setFiles1] = useState(uploadBack.name ? [uploadBack] : []);
	const [files2, setFiles2] = useState(uploadFront.name ? [uploadFront] : []);
	const [errors, setErrors] = useState({});
	const [previewImageBack, setpreviewImageBack] = useState();
	const [previewImageFront, setpreviewImageFront] = useState();

	const validate = () => {
		let errors = {};
		if (files1.length === 0) {
			errors.upload1 = "Please select a file";
		}
		if (files2.length === 0) {
			errors.upload2 = "Please select a file";
		}
		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleDrop1 = useCallback(
		(acceptedFiles) => {
			setFiles1(acceptedFiles);
			setuploadBack(acceptedFiles[0]);
		},
		[setuploadBack]
	);

	const handleDrop2 = useCallback(
		(acceptedFiles, e) => {
			setFiles2(acceptedFiles);
			setuploadFront(acceptedFiles[0]);
		},
		[setuploadFront]
	);

	const handleNext = (e) => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			navigation.next();
		}
	};

	useEffect(() => {
		if (uploadBack.name) {
			const objectUrl = URL.createObjectURL(uploadBack);
			setpreviewImageBack(objectUrl);
		}

		if (uploadFront.name) {
			const objectUrl = URL.createObjectURL(uploadFront);
			setpreviewImageFront(objectUrl);
		}
	}, [uploadBack, uploadFront]);

	return (
		<Container maxWidth="xs">
			<h3>Upload Documents</h3>
			<div className="form-wrapper">
				<Dropzone onDrop={handleDrop1}>
					{({ getRootProps, getInputProps }) => (
						<div style={{ marginTop: "1rem", backgroundColor:"#f1f1f1", padding:"20px"}}>
							<div {...getRootProps()}>
								<input {...getInputProps()} name="upload1" />
                                   <FileUploadOutlinedIcon/>
								<p>Upload Warranty Card Front</p>
							</div>
							{files1.length > 0 && (
								<div>
									<h4>Selected Files:</h4>
									<ul>
										{files1.map((file) => (
											<li key={file.name}>
												{file.name} - {file.size} bytes
											</li>
										))}
									</ul>
								</div>
							)}
							{previewImageBack && (
								<img src={previewImageBack} width={200} alt="back" />
							)}
							{errors.upload1 && (
								<div style={{ color: "red" }}>{errors.upload1}</div>
							)}
						</div>
					)}
				</Dropzone>

				<Dropzone onDrop={handleDrop2}>
					{({ getRootProps, getInputProps }) => (
						<div style={{ marginTop: "1rem", backgroundColor:"#f1f1f1", padding:"20px" }}>
							<div {...getRootProps()}>
								<input {...getInputProps()} name="upload12" />
								<FileUploadOutlinedIcon/>
								<p>Upload Warranty Card Back</p>
							</div>
							{files2.length > 0 && (
								<div>
									<h4>Selected Files:</h4>
									<ul>
										{files2.map((file) => (
											<li key={file.name}>
												{file.name} - {file.size} bytes
											</li>
										))}
									</ul>
								</div>
							)}
							{previewImageFront && (
								<img src={previewImageFront} width={200} alt="front" />
							)}
							{errors.upload2 && (
								<div style={{ color: "red" }}>{errors.upload2}</div>
							)}
						</div>
					)}
				</Dropzone>

				<div style={{ marginTop: "1rem" }}>
					<Button
						color="neutral"
						variant="contained"
						style={{ marginRight: "1rem" }}
						onClick={() => navigation.previous()}>
						Back
					</Button>
					<Button color="primary" variant="contained" onClick={handleNext}  style={{color:"white",backgroundColor:"#ff3131"}}>
						Next
					</Button>
				</div>
			</div>
		</Container>
	);
};
