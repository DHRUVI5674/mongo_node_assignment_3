const mongoose = require('mongoose');
const Note = require('../models/note.model.js');

// Helper
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);


//// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null
      });
    }

    const newNote = await Note.create({ title, content, category, isPinned });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: newNote
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      data: null
    });
  }
};




module.exports = {
  createNote,
 
};