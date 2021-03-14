import { ADD_NEW_TASK } from '../common/ActionTypes';

export function addNewTask(payload) {
  return {
    c: console.log(payload),
    type: ADD_NEW_TASK,
    payload,
  };
}
