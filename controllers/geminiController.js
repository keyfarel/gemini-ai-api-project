const fs = require('fs');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { fileToGenerativePart } = require('../utils/fileHelper');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });

const generateText = async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const generateFromImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file uploaded.' });
  }

  const filePath = req.file.path;
  try {
    const prompt = req.body.prompt || 'Describe the image';
    const imagePart = fileToGenerativePart(filePath, req.file.mimetype);
    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    fs.unlinkSync(filePath);
  }
};

const generateFromDocument = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No document file uploaded.' });
  }

  const filePath = req.file.path;
  try {
    const prompt = req.body.prompt || 'Analyze this document:';
    const documentPart = fileToGenerativePart(filePath, req.file.mimetype);
    const result = await model.generateContent([prompt, documentPart]);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    fs.unlinkSync(filePath);
  }
};

const generateFromAudio = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No audio file uploaded.' });
  }

  const filePath = req.file.path;
  try {
    const prompt = req.body.prompt || 'Transcribe or analyze the following audio:';
    const audioPart = fileToGenerativePart(filePath, req.file.mimetype);
    const result = await model.generateContent([prompt, audioPart]);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    fs.unlinkSync(filePath);
  }
};

module.exports = {
  generateText,
  generateFromImage,
  generateFromDocument,
  generateFromAudio,
};