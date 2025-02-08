export const generateQuestions = (text) => {
  if (!text) return [];

  const sentences = text.match(/[^.!?]+[.!?]/g) || [];
  const questions = sentences
    .slice(0, 5) // Limit to first 5 sentences
    .map((sentence) => `What is the main idea of: "${sentence.trim()}"?`);

  return questions;
};
