// a model for our data to ensure every document we have in the database follows the same predictable structure.
const mongoose = require('mongoose')

const Schema = mongoose.Schema


const workoutSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        load: {
            type: Number,
            required: true,
        }
    }, 
    // automatically create a property showing when a document was created and/or updated
    {timestamps: true}
)
// schema define structure of documents in the database

module.exports = mongoose.model('Workout', workoutSchema)
