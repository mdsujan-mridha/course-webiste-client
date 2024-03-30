
const catchAsyncError = require("../middleware/catchAsyncError");

const pdfCourses = require("../model/pdfCourseModel");

exports.createPdfCourse = catchAsyncError(async (req, res, next) => {
    const pdfCourse = await pdfCourses.create(req.body);
    res.status(200).json({
        success: true,
        pdfCourse,
    });

});


