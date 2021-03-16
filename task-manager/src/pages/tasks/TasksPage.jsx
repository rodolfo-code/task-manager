import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask, editTask } from '../../actions/actions';
import TaskList from './components/TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      showForm: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.newTask = this.newTask.bind(this);
    this.toogleForm = this.toogleForm.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetForm() {
    this.setState({
      showForm: false,
      title: '',
      description: '',
    })
  }

  newTask(e) {
    e.preventDefault();
    const { addNewTask } = this.props
    const { title, description } = this.state;
    addNewTask({ 
      title,
      description,
    });
    this.resetForm();
  }

  onStatusChange = (id, status) => {
    const newState = {
      id,
      status,
    }
    editTask(newState);
    console.log(newState);
  }

  toogleForm = () => {
    const { showForm } = this.state;
    this.setState({
      showForm: !showForm,
    });
  }

  renderTaskList() {
    const { taskList } = this.props;
    return TASK_STATUSES.map(status => {
      const statusTasks = taskList.filter(task => task.status === status);
      return (
        <TaskList 
          key={ status } 
          status={ status } 
          tasks={ statusTasks } 
          onStatusChange={ this.onStatusChange }
        />
      )
    });
  }

  render() {
    const { title, description, showForm } = this.state;
    return (
      <div>
        <button onClick={ this.toogleForm }>+ New task</button>
        { showForm && (
          <form onSubmit={ this.newTask }>
            <input 
              onChange={ this.handleChange }
              name="title"
              value={ title }
              type="text"
              placeholder="title"
            />
            <input 
              onChange={ this.handleChange }
              name="description"
              value={ description }
              type="text"
              placeholder="description"
            />
            <button
              type="submit"
            >
              Save
            </button>
          </form>
        ) }
        <div>
          { this.renderTaskList() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  taskList: state.taskList,
  userEmail: state.userEmail,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (param) => dispatch(addNewTask(param)),
  editTask: (param) => dispatch(editTask(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
