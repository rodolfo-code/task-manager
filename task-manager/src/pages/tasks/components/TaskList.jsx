import React from 'react';
import Task from './Task';

function TaskList(props) {
  // const { tasks } = props
  return (
    <div>
      {props.tasks.map((item) => (
        <Task key={item.id} task={item} />
      ))}
    </div>
  );
}

export default TaskList;
