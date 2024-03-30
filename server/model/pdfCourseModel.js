
const mongoose = require("mongoose");

const pdfCourseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Enter Module Name"],
        trim: true,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    lectures: [
        {
            title: {
                type: String,
                required: true,
            },
            pdfUrl: {
                type: String,
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("pdfCourse", pdfCourseSchema);