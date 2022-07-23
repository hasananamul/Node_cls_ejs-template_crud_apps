const expressAsyncHandler = require("express-async-handler");
const studentModel = require("../models/studentModel");

/**
 * @desc Get all students
 * @name GET/Students
 * @access Public
 */
const getAllStudents = expressAsyncHandler(async (req, res) => {
       //Get data from mongoDB
       const data = await studentModel.find();
       res.render("index", {data,title : `<h4 class="card-title">All Students Dashbord </h4>`})
       res.status(200).json(data)
       console.log(data);
   

})

/**
 * @desc creqate students form fields
 * @name GET/Students
 * @access Public
 */
const studentForm = ((req, res) => {
      res.render("studentForm")
})

/**
 * @desc Single students
 * @name GET/Singlestudents
 * @access Public
 */
const singleStudent = async (req, res) => {
      const id = (req.params.id);
      const single_data = await studentModel.findById(id)
      res.render("singleStudent", {single_data})
}

/**
 * @desc creqate new students
 * @name POST/Students
 * @access Public
 */
const addStudent = ((req, res) => {
      const new_data = (req.body);
      studentModel.create({
            ...new_data,
            photo : req.file.filename
      })
      console.log("Data added successfully !");
      res.redirect("/student")
})

/**
 * @desc Delete student
 * @name DELETE/student
 * @access public
 */
const deleteStudent = async (req, res) => {
      const id = req.params.id;
      await studentModel.findByIdAndDelete(id);
      res.redirect("/student")
}

/**
 * @desc Edit student form
 * @name GET/student
 * @access public
 */
const editStudentForm = async (req, res) => {
      const id = (req.params.id);
      const edit_data = await studentModel.findById(id)
      res.render("editStudentForm", {edit_data})
}

/**
 * @desc Edit student 
 * @name PUT/student
 * @access public
 */
const editStudent= async (req, res) => {
      let image = req.body.old_photo;
      if(req.file){
            image = req.file.filename;
      }
      const id = req.params.id;
      const new_body_data = req.body;
      const new_data = await studentModel.findByIdAndUpdate(id, {
            ...new_body_data,
            photo : image
      }, {new : true})
      console.log(new_data);
      res.redirect("/student")
}

module.exports = {
      getAllStudents,
      studentForm,
      singleStudent,
      addStudent,
      deleteStudent,
      editStudentForm,
      editStudent
}