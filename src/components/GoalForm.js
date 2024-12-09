import React, { useState } from 'react';


// GoalForm component
const GoalForm = ({ addGoal }) => {
  const [formState, setFormState] = useState({
    liftType: '',
    targetWeight: '',
    targetReps: '',
    targetSets: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target; //destructure the name and value from the input field 
    setFormState((prevState) => ({ ...prevState, [name]: value })); //update formState 
  }; 

  // function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the default behavior of the form which means the page will not refresh when the form is submitted 

    //mark as submitted
    setIsSubmitted(true);

    const { liftType, targetWeight, targetReps, targetSets } = formState; //destructure the formState object to get the values of the form fields

    //validate entries
    const hasErrors = !liftType.match(/[a-zA-Z]/) || 
                      !targetWeight.match(/[0-9]/) || 
                      !targetReps.match(/[0-9]/) || 
                      !targetSets.match(/[0-9]/);

    if (hasErrors) {
      return; // Stop submission if validation fails
    }

    const newGoal = { //creates a new goal object with id, liftType, targetWeight, targetReps, targetSets, and an empty array of entries that will be added to the goals array
      id: Date.now(), //creates a unique id for the goal using the current date and time
      ...formState,
      entries: []
    };
    addGoal(newGoal); //calls the addGoal function and passes the newGoal object as an argument

    setFormState({
      liftType: '',
      targetWeight: '',
      targetReps: '',
      targetSets: ''
    }); // resets the state of the form fields to empty strings
    setIsSubmitted(false); // reset the isSubmitted state
  };

 
  // form to add a new goal (with the formats of the input fields)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Lift Type:</label>
        <input
          type="text"
          name="liftType"
          value={formState.liftType}
          onChange={handleInputChange}
          required
        />
        {/* Conditional validation message for lift type */}
        {isSubmitted && !formState.liftType && (
          <p className="error">Lift type is required and must contain at least one letter.</p>
        )}
        {isSubmitted && formState.liftType && !formState.liftType.match(/[a-zA-Z]/) && (
          <p className="error">Lift type must contain at least one letter.</p>
        )}
      </div>
      <div>
        <label>Target Weight (lbs):</label>
        <input
          type="text" // Change from number to text to enable regex validation
          name="targetWeight"
          value={formState.targetWeight}
          onChange={handleInputChange}
          required
        />
        {/* Conditional validation message for target weight */}
        {isSubmitted && !formState.targetWeight && (
          <p className="error">Target weight is required and must contain at least one number.</p>
        )}
        {isSubmitted && formState.targetWeight && !formState.targetWeight.match(/[0-9]/) && (
          <p className="error">Target weight must contain at least one number.</p>
        )}
      </div>
      <div>
        <label>Target Reps:</label>
        <input
          type="text" // Change from number to text to enable regex validation
          name="targetReps"
          value={formState.targetReps}
          onChange={handleInputChange}
          required
        />
        {/* Conditional validation message for target reps */}
        {isSubmitted && !formState.targetReps && (
          <p className="error">Target reps are required and must contain at least one number.</p>
        )}
        {isSubmitted && formState.targetReps && !formState.targetReps.match(/[0-9]/) && (
          <p className="error">Target reps must contain at least one number.</p>
        )}
      </div>
      <div>
        <label>Target Sets:</label>
        <input
          type="text" // Change from number to text to enable regex validation
          name="targetSets"
          value={formState.targetSets}
          onChange={handleInputChange}
          required
        />
        {/* Conditional validation message for target sets */}
        {isSubmitted && !formState.targetSets && (
          <p className="error">Target sets are required and must contain at least one number.</p>
        )}
        {isSubmitted && formState.targetSets && !formState.targetSets.match(/[0-9]/) && (
          <p className="error">Target sets must contain at least one number.</p>
        )}
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};



export default GoalForm;