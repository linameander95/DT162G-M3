const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.post('/', async (req, res) => {
// console.log(req.body);
     const course = new Course({
         "coursename": req.body.coursename,
         "coursecode": req.body.coursecode,
         "courseplan": req.body.courseplan,
         "courseprogression": req.body.courseprogression,
         "courseterm": req.body.courseterm,
     });
    try {
        const savedCourse = await course.save();
        res.json(savedCourse);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;