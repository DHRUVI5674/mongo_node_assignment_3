const express = require("express");
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes,
  getNotesById,
  UpdateById,
  UpdateFieldId,
  deleteById,
  deleteMulti,
  searchTitle,
  searchContent,
  searchAll,
  filterSort
} = require("../controllers/note.controller");

// POST routes
router.post("/", createNote);
router.post("/bulk", multipleNotes);

// GET search routes (must come before /:id)
router.get("/search", searchTitle);
router.get("/search/content", searchContent);
router.get("/search/all", searchAll);

// GET routes
router.get("/", getAllNotes);
router.get("/:id", getNotesById);

// PUT route
router.put("/:id", UpdateById);

// PATCH route
router.patch("/:id", UpdateFieldId);

// DELETE routes
router.delete("/:id", deleteById);
router.delete("/bulk", deleteMulti);

router.get("/filter-sort", filterSort);

module.exports = router;