
const express = require('express');
const router = express.Router();
console.log("note.route.js loaded");

const {
  createNote,
  multipleNotes,
  getAllNotes,
  getNotesById,
  UpdateById,
  UpdateFieldId
} = require('../controllers/note.controller.js');

router.post('/', createNote);
router.post('/multiple', multipleNotes);
router.get('/', getAllNotes);
router.get('/:id', getNotesById);
router.put('/:id', UpdateById);
router.patch('/:id', UpdateFieldId);

module.exports = router;