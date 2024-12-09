import React, { useState } from 'react';

// ProgressForm component displays the form where users can enter progress entries
const ProgressForm = ({ goalId, addEntry, setCurrentGoalId }) => {
  const [formState, setFormState] = useState({
    weight: '',
    reps: '',
    sets: '',
    datetime: new Date().toISOString().slice(0, 10) // sets the default date to today
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //stops page from refreshing when form is submitted
    const newEntry = {
      id: Date.now(), //uses date and time as the id
      ...formState, 
      datetime: new Date(formState.datetime).toLocaleDateString() 
    };
    addEntry(goalId, newEntry); // Call addEntry and pass the goalId and newEntry object as arguments
    setCurrentGoalId(null); // Sets the currentGoalId back to null to stop adding progress
  };

  // Form to add a new entry (with the formats of the input fields)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight (lbs):</label>
        <input
          type="number"
          name="weight"
          value={formState.weight}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Reps:</label>
        <input
          type="number"
          name="reps"
          value={formState.reps}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Sets:</label>
        <input
          type="number"
          name="sets"
          value={formState.sets}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="datetime"
          value={formState.datetime}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default React.memo(ProgressForm);