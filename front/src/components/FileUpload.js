import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <Box
      textAlign="center"
      p={3}
      border="2px dashed #ccc"
      borderRadius={2}
      bgcolor="#f9f9f9"
    >
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload PDF
        </Button>
      </label>
      {fileName && (
        <Typography variant="body2" mt={2}>
          {fileName}
        </Typography>
      )}
    </Box>
  );
};

export default FileUpload;
