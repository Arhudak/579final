import React, { useState, useEffect } from 'react';
import './App.css';
import GoalForm from './components/GoalForm'; //import form where users enter goals
import GoalList from './components/GoalList'; //import list of goals
import ProgressForm from './components/ProgressForm'; //import form where users enter progress/ log entries
import useGoals from './hooks/useGoals'; //import custom hook to manage goals

// App component creates the main layout of the app
function App() {
  const {  //destructure the functions and state variables from the custom hook
    goals,
    addGoal,
    editGoal,
    deleteGoal,
    addEntry,
    editEntry,
    deleteEntry
  } = useGoals();
  
  const [currentGoalId, setCurrentGoalId] = useState(null); //used to keep track of which goal the user is currently adding progress to


  return (
    <div className="App">
      <header className="App-header">
        <h1>Lifting Tracker</h1>
        <GoalForm addGoal={addGoal} />
        <GoalList
          goals={goals}
          editGoal={editGoal}
          deleteGoal={deleteGoal}
          addEntry={addEntry}
          editEntry={editEntry}
          deleteEntry={deleteEntry}
          setCurrentGoalId={setCurrentGoalId}
        />
        {currentGoalId && (
          <ProgressForm
            goalId={currentGoalId}
            addEntry={addEntry}
            setCurrentGoalId={setCurrentGoalId}
          />
        )}
      </header>
    </div>
  );
}

export default App;