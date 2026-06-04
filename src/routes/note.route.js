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
  filterSort,
  filterPaginate,
} = require("../controllers/note.controller");

router.post("/", createNote);
router.post("/bulk", multipleNotes);


router.get("/search", searchTitle);
router.get("/search/content", searchContent);
router.get("/search/all", searchAll);


router.get("/filter-sort", filterSort);
router.get("/filter-paginate", filterPaginate);


router.get("/", getAllNotes);
router.get("/:id", getNotesById);


router.put("/:id", UpdateById);
router.patch("/:id", UpdateFieldId);


router.delete("/bulk", deleteMulti);
router.delete("/:id", deleteById);

module.exports = router;