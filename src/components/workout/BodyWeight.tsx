import React from 'react'
import Workout from './BodyWeightWorkout'

const DailyWorkout = () => {

    const workouts = [{'exercise':'pushups', 'reps':100}, {'exercise':'situps', 'reps':100}, {'exercise':'squats', 'reps':100}, {'exercise':'burpees', 'reps':100}]
    return (
        <div>
            {workouts.map(workout => (
                <Workout set={workout} />
            ))}
        </div>
    )
}


export default DailyWorkout
