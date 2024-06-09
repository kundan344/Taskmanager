import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, []);

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <strong>{task.title}</strong>: {task.description}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

  function deleteTask(id) {
    axios.delete(`/api/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the task!', error);
      });
  }
}

export default TaskList;
``
