import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import FileUpload from "../components/FileUpload";
import QuestionGenerator from "../components/QuestionGenerator";
import LoadingIndicator from "../components/LoadingIndicator";
import { extractTextFromPDF } from "../utils/extractText";
import { generateQuestions } from "../utils/generateQuestions";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = async (file) => {
    setLoading(true);
    try {
      const text = await extractTextFromPDF(file);
      const generatedQuestions = generateQuestions(text);
      setQuestions(generatedQuestions);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
    setLoading(false);
  };

  return (
    <Container
      maxWidth="md"
      sx={{ mt: 5, p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}
    >
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
        PDF Question Generator
      </Typography>
      <FileUpload onFileSelect={handleFileSelect} />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <QuestionGenerator questions={questions} />
      )}
    </Container>
  );
};

export default Home;
