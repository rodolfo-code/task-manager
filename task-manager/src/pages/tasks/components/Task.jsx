import React from 'react';

function Task(props) {
  const { title, description } = props.task;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Task;
