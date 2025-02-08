import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const QuestionGenerator = ({ questions }) => {
  return (
    <Box mt={3}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Generated Questions
      </Typography>
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <Card key={index} sx={{ mb: 2, bgcolor: "#e3f2fd" }}>
            <CardContent>
              <Typography variant="body1">
                {index + 1}. {question}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          No questions generated yet.
        </Typography>
      )}
    </Box>
  );
};

export default QuestionGenerator;
