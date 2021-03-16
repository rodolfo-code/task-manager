import { ADD_NEW_TASK, SAVE_USER_DATA, EDIT_TASK } from '../common/ActionTypes';

const initialState = {
  taskList: [],
  userEmail: '',
};

function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        taskList: state.taskList.concat(action.payload),
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        userEmail: action.payload,
      };
    case EDIT_TASK: 
      const { payload } = action;
      return {
        taskList: state.taskList.map(task => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        })
      }
    default:
      return state;
  }
}

export default tasks;
