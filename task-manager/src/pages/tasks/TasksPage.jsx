import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../../actions/actions';
import TaskList from './components/TaskList';

// const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);

    this.state = {
      title: '',
      description: '',
      showForm: false,
    };
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value,
    });
  }

  newTask() {
    const { showForm } = this.state;
    this.setState({
      showForm: !showForm,
    });
  }

  handleClick() {
    const { taskList, addNewTask } = this.props;
    const { title, description } = this.state;
    const newTask = { title, description };
    console.log(newTask);
    addNewTask(newTask);

    console.log(taskList);
  }

  renderInput() {
    const { title, description } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => this.handleChange(e.target)}
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => this.handleChange(e.target)}
          />
        </label>
        <button type="button" onClick={() => this.handleClick()}>
          Add
        </button>
      </form>
    );
  }

  render() {
    const { taskList } = this.props;
    // console.log(tasks);
    const { title, description, showForm } = this.state;
    console.log(title, description);
    return (
      <div>
        {showForm ? this.renderInput() : ''}
        <button type="button" onClick={() => this.newTask()}>
          NewTask
        </button>
        <TaskList tasks={taskList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList: state.taskList,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (param) => dispatch(addNewTask(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
