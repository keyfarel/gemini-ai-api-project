const express = require('express');
const router = express.Router();
const {
  generateText,
  generateFromImage,
  generateFromDocument,
  generateFromAudio,
} = require('../controllers/geminiController');
const upload = require('../middleware/uploadMiddleware');

router.post('/generate-text', generateText);
router.post('/generate-from-image', upload.single('image'), generateFromImage);
router.post('/generate-from-document', upload.single('document'), generateFromDocument);
router.post('/generate-from-audio', upload.single('audio'), generateFromAudio);

module.exports = router;
