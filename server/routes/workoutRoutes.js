const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()     // used to create routes
const { createWorkout, getWorkouts, getWorkout} = require('../controllers/workoutControllers')
// GET all workouts
router.route('/v1/workouts').get((req, res) => {
    res.json('Get All Workouts')
})

// GET single workout
router.route('/v1/workouts/:id').get((req, res) => {
    res.json('Get Single Workout')
})

// POST a new workout
router.route('/v1/workouts').post((req, res) => {

})

// DELETE a workout
router.route('/v1/workouts/:id').delete((req, res) => {
    res.json('Delete Workout')
})
// UPDATE a workout
router.route('/v1/workouts/:id').patch((req, res) => {
    res.json('Update Workout')
})


module.exports = router