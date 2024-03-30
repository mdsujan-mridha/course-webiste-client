const express = require('express');

const {
    createPdfCourse
} = require("../controller/pdfCourseController");

const router = express.Router();

// create pdf course 
router.route("/admin/pdfCourse/new").post(createPdfCourse);



module.exports = router;