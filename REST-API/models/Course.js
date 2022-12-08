const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    coursename: {
        type: String,
        required: true
    },
    coursecode: {
        type: String,
        required: true
    },
    courseplan: {
        type: String,
        required: true
    },
    courseprogression: {
        type: String,
        required: true
    },
    courseterm: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Courses', courseSchema);