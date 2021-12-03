import React, {useState, useEffect} from 'react'
import './dashboard.scss'
import {currentWorkoutData} from './currentWorkoutData';
// import {Exercise} from "./interfaces";


interface Exercise {
    name: string;
    sets: number;
    reps: number;
    currentSet: number;

}

const RepBlock: React.FC<{ obj:Exercise}> = (props) => {
    return (
        <div className="repBlock-container">
            <div className="repBlock-container-data">
                <div className="repBlock-name">{props.obj.name}</div>
                <div className="repBlock-reps">{props.obj.reps}</div>
                {/* <div className="repBlock-sets">{props.obj.currentSet} / {props.obj.sets}</div> */}
                {/* <div className="repBlock-set">set</div> */}
            </div>

            <button className="repBlock-complete-button">COMPLETE SET</button>
        </div>
    )
}


interface CurrentWorkout{
    exercises: Array<Exercise>;
    date: Date;

}


const Home = () => {

    const [data, setData] = useState<CurrentWorkout | null>(null)
    const [exercise, setExercise] = useState<Array<Exercise> | []>([])
    
    useEffect(() => {
        setData(currentWorkoutData)
        setExercise(currentWorkoutData.exercises)
    },[])

    

    return (
        <div >
            <div className="current-workouts-container">
            {exercise.length && exercise.map(stuff => <RepBlock obj={stuff}/>)}
            </div>
        </div>
    )
}

export default Home
