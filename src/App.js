import './App.css';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiArrowRight } from 'react-icons/fi'; // Import the required icons from react-icons library
import SearchIcon from '@mui/icons-material/ArrowForward';
import { Box,Typography, IconButton, useTheme,TextField } from "@mui/material";
import { Card, CardContent, Button } from "@mui/material";

function App() {
  const [toggleState, setToggleState] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [searchText, setSearchText] = useState("");

  const appStyle = {
    background: '#23395d',
    height: '94.5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '40px',
    paddingRight: '10px',
  };

  const titleStyle = {
    fontWeight: 'bold',
    color: 'white',
  };

  const toggleButtonHandler = () => {
    setToggleState(!toggleState);
  };

  const handleImageUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImageFile(file);
    // Perform upload logic here
  };

  const handleGenerateImage = () => {
    // Perform generate image logic here
    // Update generatedImage state with the generated image
    setGeneratedImage(/* Generated Image URL or Data */);
  };

  const uploadStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Align content vertically
    alignItems: 'center', // Align content horizontally
    backgroundColor: 'black',
    color: 'white',
    padding: '15px',
    borderRadius: '15px',
    marginTop: '20px',
    width: '550px', // Adjust the width as per your requirement
    height: '80px', // Adjust the height as per your requirement
  };

  const iconStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const inputStyle = {
    paddingLeft: '170px',
    paddingTop: '20px',
  };

  const inputStyle2 = {
    paddingLeft: '250px',
    paddingTop: '20px',
    backgroundColor: 'black',
    color: 'white',
    width: '200px', // Adjust the width as per your requirement
    marginBottom: '10px',
  };

  // React Dropzone configuration
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: handleImageUpload,
  });

  return (
    <div className="App" style={appStyle}>
      <h1 style={titleStyle}>NileGPT</h1>
      <div className="container">
        {/* TOGGLE */}
        <h1 className={`toggle__text ${toggleState ? 'toggle__text--selected' : ''}`}>
          Generate Image
        </h1>
        <div className="toggle">
          <label className="toggle__base">
            <input
              type="checkbox"
              className="toggle__check"
              checked={toggleState}
              onChange={toggleButtonHandler}
            />
            <div className="toggle__button">
              <div className="toggle__button-1"></div>
              <div className="toggle__button-2">
                <span className="toggle__line"></span>
                <span className="toggle__line"></span>
                <span className="toggle__line"></span>
              </div>
            </div>
            <span className="toggle__on"></span>
            <span className="toggle__off"></span>
          </label>
        </div>
        <h1 className={`toggle__text2 ${!toggleState ? 'toggle__text--selected' : ''}`}>
          Upload Image
        </h1>
      </div>

      {/* Conditional rendering based on toggle state */}
      {toggleState ? (
        <div>
          {/* Upload Image */}
          <div {...getRootProps()} style={uploadStyle}>
            <input {...getInputProps()} />
            <FiUpload style={iconStyle} />
            <p>Drag and drop an image here, or click to select a file</p>
          </div>
          {/* Additional logic and components related to image upload */}
        </div>
      ) : (
        <div>
          {/* Generate Image */}
          <Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{ position: "relative", height: "80%",paddingTop: '20px',width: '100%',paddingRight: '400px' }}
					>
					<TextField
						variant="outlined"
						size="small"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						fullWidth
						sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "40px",
            backgroundColor: 'black', // Set background color to black
            color: 'white', // Set text color to white
						border: "none",
						borderWidth: "0",
						height: "48px",
						py: "8px",
						pr: "48px",
						pl: "16px",
						fontWeight: "bold",
						fontSize: "18px",
						"&:hover, &:focus": {
							backgroundColor: 'black',
							border: "none"
						},
						"& .notchedOutline": {
							borderWidth: "0"
						},
						"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "transparent",
							borderWidth: "0"
						}
						}}
						InputProps={{
						sx: {
							py: "8px",
							border: "none",
							"&:focus": { boxShadow: "none" },
              color: 'white',
						},
						classes: {
							notchedOutline: "notchedOutline"
						},
            placeholder: 'Enter Prompt to Generate Image'
						}}
					/>
					<IconButton
						sx={{
						position: "absolute",
						top: "63%",
						right: "410px",
						transform: "translateY(-50%)",
						"&:hover": { backgroundColor: "transparent" }
						}}
					>
						<SearchIcon sx={{ marginLeft: "20px", fontSize: "26px", color: "#1976d2" }} onClick={handleGenerateImage} />
					</IconButton>
					</Box>
          {/* Additional logic and components related to image generation */}
        </div>
      )}

      {/* Render generated image if available */}
      {generatedImage && <img src={generatedImage} alt="Generated Image" />}
    </div>
  );
}

export default App;
