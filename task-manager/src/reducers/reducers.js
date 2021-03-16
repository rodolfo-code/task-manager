import { ADD_NEW_TASK, SAVE_USER_DATA } from '../common/ActionTypes';

// const mockTasks = [
//   {
//     id: 1,
//     title: 'Learn Redux',
//     description: 'The store, actions, and reducers, oh my!',
//     status: 'In Progress',
//   },
//   {
//     id: 2,
//     title: 'Peace on Earth',
//     description: 'No big deal.',
//     status: 'Completed',
//   },
//   {
//     id: 3,
//     title: 'Star Wars',
//     description: 'Fiction',
//     status: 'Completed',
//   },
// ];

const initialState = {
  taskList: [],
  userEmail: '',
};

function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        userEmail: action.payload,
      };

    default:
      return state;
  }
}

export default tasks;
