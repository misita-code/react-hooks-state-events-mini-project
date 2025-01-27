import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';
import NewTaskForm from './components/NewTaskForm';

const App = () => {
  const initialTasks = [
    { id: 1, text: 'Complete React Project', category: 'Work' },
    { id: 2, text: 'Buy Groceries', category: 'Personal' },
    { id: 3, text: 'Walk the Dog', category: 'Personal' },
  ];

  const categories = ['All', 'Work', 'Personal'];

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle task deletion
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Handle adding a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Filter tasks by selected category
  const handleFilterCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter 
        categories={categories} 
        onCategoryClick={handleFilterCategory} 
        selectedCategory={selectedCategory}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask} />
    </div>
  );
};

export default App;
