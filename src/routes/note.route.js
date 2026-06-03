
const express = require('express');
const router = express.Router();
console.log("note.route.js loaded");

const {
  createNote,
  multipleNotes,
  getAllNotes,
  getNotesById
} = require('../controllers/note.controller.js');

router.post('/', createNote);
router.post('/multiple', multipleNotes);
router.get('/', getAllNotes);
router.get('/:id', getNotesById);

module.exports = router;