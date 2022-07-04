import React from 'react'
import { UseWorkoutsContext } from '../hooks/UseWorkoutsContext'
// date formatter
import fomratDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = UseWorkoutsContext()
    
    const handleDelete = async () => {
        const response = await fetch('http://localhost:4000/api/v1/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{fomratDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
            <span onClick={handleDelete}>delete</span>
        </div>
    ) 
}

export default WorkoutDetails