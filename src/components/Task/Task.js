import React from 'react';
import './Task.scss';
import TaskEditing from '../TaskEditing';
import { displayFormatDatetime, calculateTime } from '../../services/utils';

class Task extends React.Component {
  state = {
    editing: false,
    dueTime: null,
  }

  componentDidMount() {
    this.setState({
      dueTime: calculateTime(this.props.task.date)
    });
  }

  toggleEditingTask = () => {
    this.setState((state) => ({
      editing: !state.editing
    }))
  }

  renderTask = (task) => {
    setInterval(() => {
      this.setState({
        dueTime: calculateTime(task.date)
      });
    }, 10000);

    return (
      <div className="Task">
        <button className="Task__close" onClick={this.toggleEditingTask}>
          <i className="fa fa-pencil"></i>
        </button>
        <div className={"Task__type type-" + task.type}></div>
        <label className="Task__title">{task.title}</label>
        <div className="Task__time">
          {task.date === '' ? '' : <div><small><i className="fa fa-clock-o"></i>{' '}{displayFormatDatetime(task.date)}</small></div>}
          {this.state.dueTime && <div className={'Task__duetime ' + this.state.dueTime.value}><small>{this.state.dueTime.label}</small></div>}
        </div>
      </div>
    );
  }

  render() {
    const { task } = this.props;
    return (
      <>
        {this.state.editing ?
          <TaskEditing
            task={task}
            toggleEditingTask={this.toggleEditingTask}
          /> : this.renderTask(task)}
      </>
    )
  }
}

export default Task;