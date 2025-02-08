import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const LoadingIndicator = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
      <CircularProgress color="primary" />
      <Typography mt={2}>Generating questions...</Typography>
    </Box>
  );
};

export default LoadingIndicator;
