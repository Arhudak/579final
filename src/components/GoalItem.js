import React, { useState } from 'react';
import EntryList from './EntryList'; // import entry list component to use in the goal item

// GoalItem component displays the details of a goal and the different actions that can be performed
const GoalItem = ({ goal, editGoal, deleteGoal, addEntry, editEntry, deleteEntry, setCurrentGoalId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [liftType, setLiftType] = useState(goal.liftType);
  const [targetWeight, setTargetWeight] = useState(goal.targetWeight);
  const [targetReps, setTargetReps] = useState(goal.targetReps);
  const [targetSets, setTargetSets] = useState(goal.targetSets);

  // function to edit the goal by updating the goal object with the new values
  const handleEditGoal = () => {
    const updatedGoal = {
      ...goal,
      liftType,
      targetWeight,
      targetReps,
      targetSets
    };
    editGoal(updatedGoal); // call editGoal and passes the updatedGoal object as an argument
    setIsEditing(false);
  };

  // how the goal item will be displayed
  return (
    <div className="goal-item">
      {isEditing ? (
        <div>
          <div>
            <label>Lift Type:</label>
            <input
              type="text"
              value={liftType}
              onChange={(e) => setLiftType(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Target Weight (lbs):</label>
            <input
              type="number"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Target Reps:</label>
            <input
              type="number"
              value={targetReps}
              onChange={(e) => setTargetReps(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Target Sets:</label>
            <input
              type="number"
              value={targetSets}
              onChange={(e) => setTargetSets(e.target.value)}
              required
            />
          </div>
          <button onClick={handleEditGoal}>Save</button>
        </div>
      ) : (
        <div className="goal-content">
          <div className="goal-details">
            <h3>{goal.liftType}</h3>
            <p>Target: {goal.targetWeight} lbs, {goal.targetReps} reps, {goal.targetSets} sets</p>
          </div>
          <div className="goal-buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteGoal(goal.id)}>Delete</button>
          </div>
        </div>
      )}
      <div className="log-progress-center">
        <button className="log-progress" onClick={() => setCurrentGoalId(goal.id)}>Log Progress</button>
      </div>
      <EntryList
        goalId={goal.id}
        entries={goal.entries}
        editEntry={editEntry}
        deleteEntry={deleteEntry}
      />
    </div>
  );
};

export default GoalItem;