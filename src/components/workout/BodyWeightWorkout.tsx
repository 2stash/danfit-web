import React from 'react'

interface WorkoutProps {
    set: Exercise;
}

interface Exercise {
    exercise: string,
    reps: number
}

const Workout: React.FC<WorkoutProps> = ({set})=> {
    return (
        <div>
            <p>{set.exercise}</p>
            <p>{set.reps}</p>
        </div>
    )
}

export default Workout
