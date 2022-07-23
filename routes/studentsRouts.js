const express = require("express");
const {getAllStudents, studentForm, singleStudent, addStudent, deleteStudent, editStudentForm, editStudent} = require("../controllers/studentsControllers");
const router = express.Router();
const multer = require("multer");


//Multer storage 
const storage = multer.diskStorage({
      destination : (req, file, cb) => {
            cb(null, "./assets/upload")
      },
      filename : (req, file, cb) => {
            const file_name = Date.now() + file.originalname;
            cb(null, file_name)
      }
})
const multer_upload = multer({storage : storage}).single('photo')

// router.route("/").get(getAllStudents)
router.get("/", getAllStudents)
router.get("/studentForm", studentForm)
router.post("/addStudent",multer_upload, addStudent)
router.get("/editStudentForm/:id", editStudentForm)
router.post("/editStudent/:id",multer_upload, editStudent)
router.get("/delete/:id", deleteStudent)
router.get("/:id", singleStudent)

module.exports = router;