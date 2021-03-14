import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
  // const { tasks } = props
  return (
    <div>
      {tasks.map((item) => (
        <Task key={item.id} task={item} />
      ))}
    </div>
  );
}

export default TaskList;
