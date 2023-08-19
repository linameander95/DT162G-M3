const express = require('express')
const router = express.Router()
const Course = require('../models/Course')

//Get all
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find()
        res.send(courses)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//get one
router.get('/:id', getCourse, (req, res) => {
    res.json(res.course)
});

//Create one
router.post('/', async (req, res) => {
    const course = new Course ({
        coursename: req.body.coursename,
        coursecode: req.body.coursecode,
        courseplan: req.body.courseplan,
        courseprogression: req.body.courseprogression,
        courseterm: req.body.courseterm
    })
    try {
        const newCourse = await course.save()
        res.status(201).json(newCourse)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

});

//Edit one
router.patch('/:id', getCourse, async (req, res) => {
    if (req.body.name != null) {
        res.course.coursename = req.body.name
    }
    if (req.body.code != null) {
        res.course.coursecode = req.body.code
    }
    if (req.body.plan != null) {
        res.course.courseplan = req.body.plan
    }
    if (req.body.progression != null) {
        res.course.courseprogression = req.body.progression
    }
    if (req.body.term != null) {
        res.course.courseterm = req.body.term
    }
    try {
        const updatedCourse = await res.course.save()
        res.json(updatedCourse)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

//Delete one
router.delete('/:id', getCourse, async (req, res) => {
    try {
        await res.course.deleteOne()
        res.json({message: 'Course removed successfully.'})
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

async function getCourse(req, res, next) {
    try {
        course = await Course.findById(req.params.id)
        if (course == null) {
            return res.status(404).json({message: 'Cannot find course'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.course = course
    next()
}

module.exports = router