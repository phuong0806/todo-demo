import React, { Component } from 'react'
import Task from './../Task';
import './TaskList.scss';
import AddTask from '../AddTask';
import { addTask } from '../../actions/task';
import { connect } from 'react-redux';

class TaskList extends Component {

  onClickAddTask = (status = 0) => {
    const task = {
      title: 'new task',
      status,
      date: '',
      type: 0,
    }
    
    fetch(`https://todolist-1be90.firebaseio.com/task.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    })
    .then(result => result.json())
    .then(object => {
      task.id = object.name;
      this.props.addTask(task);
    });
  }

  render() {
    const { status, tasks, onClickEdit } = this.props;
    return (
      <div className="TaskList">
        <div className="TaskList__info">
          <label className="TaskList__label">{status.label}</label>
          <div className="TaskList__items">
            {
              tasks.map(task => 
                <Task 
                  key={task.id}
                  task={task} 
                  onClickEdit={() => onClickEdit(task)} />
              )
            }
          </div>
        </div>
        <AddTask onClickAddTask={() => this.onClickAddTask(status.value)} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch(addTask(task))
  }
}

export default connect(null, mapDispatchToProps)(TaskList);