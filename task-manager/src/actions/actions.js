import { ADD_NEW_TASK, SAVE_USER_DATA, EDIT_TASK } from '../common/ActionTypes';

let _id = 1;
export function uniqueId() {
  return _id++;
}

export function addNewTask({ title, description }) {
  return {
    type: ADD_NEW_TASK,
    payload: {
      id: uniqueId(),
      title,
      description,
      status: 'Unstarted',
    },
  };
}

export function saveUserData(payload) {
  return {
    type: SAVE_USER_DATA,
    payload,
  };
}

export function editTask(id, params = {}) {
  return {
    a: console.log(id, params),
    type: EDIT_TASK,
    payload: {
      id,
      params,
    },
  };
}
