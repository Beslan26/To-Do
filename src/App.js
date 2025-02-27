import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTaskCompletion(task.id)} 
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

