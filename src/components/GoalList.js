import React from 'react';
import GoalItem from './GoalItem'; //import goal item component to use in the goal list

// GoalList component that will display the list of goals and the different actions that can be performed on each goal
const GoalList = ({ goals, editGoal, deleteGoal, addEntry, editEntry, deleteEntry, setCurrentGoalId }) => {
  
  //how the goal list will be displayed
  return (
    <div className="goal-list-container">
      <h2>Your Goals</h2>
      <div className="goal-list">
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
            editGoal={editGoal}
            deleteGoal={deleteGoal}
            addEntry={addEntry}
            editEntry={editEntry}
            deleteEntry={deleteEntry}
            setCurrentGoalId={setCurrentGoalId}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalList;