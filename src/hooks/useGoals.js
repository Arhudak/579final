import { useState, useEffect } from 'react';

const useGoals = () => {
  const myStoredGoals = () => {
    const storedGoals = localStorage.getItem('goals');
    return storedGoals ? JSON.parse(storedGoals) : [];
  };

  const storingMyGoals = (goals) => {
    localStorage.setItem('goals', JSON.stringify(goals));
  };

  const [goals, setGoals] = useState(myStoredGoals());

  useEffect(() => {
    storingMyGoals(goals);
  }, [goals]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const editGoal = (updatedGoal) => {
    setGoals(goals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const addEntry = (goalId, entry) => {
    setGoals(goals.map(goal => goal.id === goalId ? {
      ...goal,
      entries: [...goal.entries, entry]
    } : goal));
  };

  const editEntry = (goalId, updatedEntry) => {
    setGoals(goals.map(goal => goal.id === goalId ? {
      ...goal,
      entries: goal.entries.map(entry => entry.id === updatedEntry.id ? updatedEntry : entry)
    } : goal));
  };

  const deleteEntry = (goalId, entryId) => {
    setGoals(goals.map(goal => goal.id === goalId ? {
      ...goal,
      entries: goal.entries.filter(entry => entry.id !== entryId)
    } : goal));
  };

  return {
    goals,
    addGoal,
    editGoal,
    deleteGoal,
    addEntry,
    editEntry,
    deleteEntry
  };
};

export default useGoals;