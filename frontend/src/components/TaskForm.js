import React, { useState } from 'react';
import axios from 'axios';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description };

    try {
      const response = await axios.post('/api/tasks', newTask);
      console.log('Task added:', response.data);
    } catch (error) {
      console.error('There was an error adding the task!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
