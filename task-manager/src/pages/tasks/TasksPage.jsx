import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from './components/TaskList';

// const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  render() {
    const { tasks } = this.props;
    console.log(tasks);
    return (
      <div>
        <TaskList tasks={tasks} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TasksPage);
