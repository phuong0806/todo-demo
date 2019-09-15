import * as taskAction from '../constants/task';

const initialState = {
  data: [],
}

const task = (state = initialState, { type, payload }) => {
  switch(type) {
    case taskAction.FETCH_TASK: 
      return {
        ...state,
        data: payload.data,
      }
    case taskAction.ADD_TASK: 
      return {
        ...state,
        data: state.data.concat(payload.data)
      }
    case taskAction.DELETE_TASK: 
      return {
        ...state,
        data: state.data.filter(task => task.id !== payload.id)
      }
    case taskAction.UPDATE_TASK: 
      return {
        ...state,
        data: state.data.map(task => {
          if (task.id === payload.data.id) {
            return payload.data
          }
          return task;
        })
      }
    default:
      return state;
  }
}

export default task;