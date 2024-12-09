import React, { useState } from 'react';

const ProgressForm = ({ goalId, addEntry, stopLoggingProgress }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      weight,
      reps,
      sets,
      datetime: new Date(datetime).toLocaleString()
    };
    addEntry(goalId, newEntry);
    stopLoggingProgress();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight (lbs):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Sets:</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date and Time:</label>
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default ProgressForm;