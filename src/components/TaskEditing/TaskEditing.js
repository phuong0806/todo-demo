import React, { Component } from 'react'
import { updateTask, deleteTask } from '../../actions/task';
import { connect } from 'react-redux';
import { noId } from '../../services/utils';

class TaskEditing extends Component {

  state = {
    ...this.props.task
  }

  handleChangeState = state => event => {
    let value = event.target.value;
    if (state === 'status' || state === 'type') {
      value = +value;
    }
    this.setState({
      [state]: value
    })
  }

  handleDeleteTask = (task) => {
    const url = `https://todolist-1be90.firebaseio.com/task/${task.id}.json`;
    fetch(url, {
      method: 'DELETE',
    }).then(result => {
      if (result.status === 200) {
        this.props.deleteTask(task.id);
        this.props.toggleEditingTask();
      }
    });
  }

  handleUpdateTask = (task) => {
    const url = `https://todolist-1be90.firebaseio.com/task/${task.id}.json`;

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(noId(task))
    }).then(result => {
      if (result.status === 200) {
        this.props.updateTask(task);
        this.props.toggleEditingTask();
      }
    });
  }

  render() {
    const { toggleEditingTask } = this.props;
    const { type, date, title, status } = this.state;
    return (
      <div className="Task Task__editing">
        <div className="Task__top">
          <select
            value={status}
            onChange={this.handleChangeState('status')}
          >
            <option value={0}>Todo</option>
            <option value={1}>In process</option>
            <option value={2}>Done</option>
          </select>
          <select
            value={type}
            onChange={this.handleChangeState('type')}
          >
            <option value={0}>low</option>
            <option value={1}>medium</option>
            <option value={2}>high</option>
          </select>
          <input
            type="datetime-local"
            value={date}
            onChange={this.handleChangeState('date')}
          />
        </div>
        <textarea
          rows="3"
          value={title}
          onChange={this.handleChangeState('title')}
        />
        <div className="Task__buttons">
          <button onClick={() => this.handleUpdateTask(this.state)}>Lưu</button>
          <button onClick={() => this.handleDeleteTask(this.state)}>Xóa</button>
          <button onClick={toggleEditingTask}>Hủy</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task)),
    deleteTask: task => dispatch(deleteTask(task))
  }
}

export default connect(null, mapDispatchToProps)(TaskEditing);