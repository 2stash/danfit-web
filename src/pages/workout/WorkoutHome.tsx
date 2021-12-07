import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import { currentWorkoutData } from "./currentWorkoutData";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  currentSet: number;
}

const RepBlock: React.FC<{ obj: Exercise; completeSet: Function }> = (
  props
) => {
  return (
    <div className="repBlock-container">
      <div className="repBlock-container-data">
        <div className="repBlock-name">{props.obj.name}</div>
        <div className="repBlock-reps">{props.obj.reps}</div>
      </div>

      <button
        className="repBlock-complete-button"
        onClick={() => props.completeSet(props.obj.name)}
      >
        COMPLETE SET
      </button>
    </div>
  );
};

const TotalsBlock: React.FC<{ obj: Exercise }> = (props) => {
  return (
    <div>
      <p>
        Total {props.obj.name} : {props.obj.reps * props.obj.currentSet}
      </p>
    </div>
  );
};

interface CurrentWorkout {
  exercises: Array<Exercise>;
  date: Date;
}

const WorkoutHome = () => {
  const [data, setData] = useState<CurrentWorkout | null>(null);
  const [exercise, setExercise] = useState<Array<Exercise> | []>([]);

  useEffect(() => {
    setData(currentWorkoutData);
    setExercise(currentWorkoutData.exercises);
  }, []);

  const completeSet = (name) => {
    console.log(name);
    let tempState = [...exercise];
    tempState.map((exer) => {
      if (exer.name === name) {
        return exer.currentSet++;
      }
    });

    setExercise(tempState);
  };

  return (
    <div>
      <div className="total-workouts-container">
        {exercise.length &&
          exercise.map((stuff) => <TotalsBlock obj={stuff} />)}
      </div>

      <div className="current-workouts-container">
        {exercise.length &&
          exercise.map((stuff) => (
            <RepBlock obj={stuff} completeSet={completeSet} />
          ))}
      </div>
    </div>
  );
};

export default WorkoutHome;
