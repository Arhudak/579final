import React, { useState } from 'react';

// EntryList component displays the list of entries for a goal and the different actions that can be performed
const EntryList = ({ goalId, entries, editEntry, deleteEntry }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editWeight, setEditWeight] = useState('');
  const [editReps, setEditReps] = useState('');
  const [editSets, setEditSets] = useState('');
  const [editDatetime, setEditDatetime] = useState('');

  // Function to handle editing an entry
  const handleEditEntry = (entry) => {
    const updatedEntry = {
      ...entry,
      weight: editWeight,
      reps: editReps,
      sets: editSets,
      datetime: new Date(editDatetime).toLocaleDateString()
    };
    editEntry(goalId, updatedEntry); // calls editEntry and passes the goalId and updatedEntry object as arguments
    setIsEditing(null); // sets isEditing back to null to stop editing
  };

  // Sort entries with the most recent first
  const sortedEntries = [...entries].sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

  // Render sorted entry list
  return (
    <div className="entry-list">
      {sortedEntries.map(entry => (
        <div key={entry.id} className="entry-item">
          {isEditing === entry.id ? (
            <div>
              <div>
                <label>Weight (lbs):</label>
                <input
                  type="number"
                  value={editWeight}
                  placeholder="Weight"
                  onChange={(e) => setEditWeight(e.target.value)}
                />
              </div>
              <div>
                <label>Reps:</label>
                <input
                  type="number"
                  value={editReps}
                  placeholder="Reps"
                  onChange={(e) => setEditReps(e.target.value)}
                />
              </div>
              <div>
                <label>Sets:</label>
                <input
                  type="number"
                  value={editSets}
                  placeholder="Sets"
                  onChange={(e) => setEditSets(e.target.value)}
                />
              </div>
              <div>
                <label>Date:</label>
                <input
                  type="date"
                  value={editDatetime}
                  onChange={(e) => setEditDatetime(e.target.value)}
                />
              </div>
              <button onClick={() => handleEditEntry(entry)}>Save</button>
            </div>
          ) : (
            <div>
              <p>{entry.weight} lbs - {entry.reps} reps - {entry.sets} sets - {entry.datetime}</p>
              <div>
                <button onClick={() => {
                  setIsEditing(entry.id);
                  setEditWeight(entry.weight);
                  setEditReps(entry.reps);
                  setEditSets(entry.sets);
                  setEditDatetime(new Date(entry.datetime).toISOString().slice(0, 10));
                }}>Edit</button>
                <button onClick={() => deleteEntry(goalId, entry.id)}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EntryList;