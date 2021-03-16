import { ADD_NEW_TASK, SAVE_USER_DATA } from '../common/ActionTypes';

export function addNewTask(payload) {
  return {
    type: ADD_NEW_TASK,
    payload,
  };
}

export function saveUserData(payload) {
  return {
    type: SAVE_USER_DATA,
    payload,
  };
}
