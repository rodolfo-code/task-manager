import React from 'react';
import Task from './Task';

const TaskList = props => {
  const { status, tasks, onStatusChange } = props;
  return (
    <div>
      <div>
        <strong>{ status }</strong>
      </div>
      { tasks.map(task =>(
        <Task 
          key={ task.id } 
          task={ task }
          onStatusChange={ onStatusChange } 
        />
      ))}
    </div>
  )
}

export default TaskList;
