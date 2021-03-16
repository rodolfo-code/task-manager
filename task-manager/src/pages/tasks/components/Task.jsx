import React from 'react';

const TASK_STATUSES = [
  'Unstarted',
  'In progress',
  'Completed'
]

const Task = props => {
  const { task } = props;
  return (
    <div> 
      <select value={ task.status } onChange={ onStatusChange }>
        { TASK_STATUSES.map(status => (
          <option key={ status } value={ status }>{ status }</option>
        ))}
      </select>
      <div>{ task.title }</div>
      <div>{ task.description }</div>
      <hr />
    </div>
  );

  function onStatusChange(event) {
    props.onStatusChange(task.id, event.target.value)
  }
}

export default Task;