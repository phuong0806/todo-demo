import * as taskAction from './../constants/task';

export const fetchTask = data => ({
  type: taskAction.FETCH_TASK,
  payload: {
    data,
  }
})

export const addTask = data => ({
  type: taskAction.ADD_TASK,
  payload: {
    data
  }
});

export const updateTask = (data) => ({
  type: taskAction.UPDATE_TASK,
  payload: {
    data,
  }
})

export const deleteTask = id => ({
  type: taskAction.DELETE_TASK,
  payload: {
    id,
  }
})