import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
