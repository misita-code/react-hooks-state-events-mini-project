import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(categories[1]); // default to first category

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: taskText,
      category: taskCategory
    };
    onTaskFormSubmit(newTask);
    setTaskText('');
    setTaskCategory(categories[1]); // reset to default
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Task description"
      />
      <select 
        value={taskCategory} 
        onChange={(e) => setTaskCategory(e.target.value)}>
        {categories.filter(category => category !== 'All').map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
