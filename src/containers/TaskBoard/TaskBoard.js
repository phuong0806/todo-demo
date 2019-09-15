import React, { Component } from 'react'
import TaskList from './../../components/TaskList';
import { connect } from 'react-redux';
import { fetchTask } from '../../actions/task';
import { STATUSES } from './../../constants';
import './TaskBoard.scss';

class TaskBoard extends Component {

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const { fetchTask } = this.props;
    const response = await fetch('https://todolist-1be90.firebaseio.com/task.json');
    const data = await response.json() || [];
    const results = Object.keys(data).map((key) => {
      return { "id": key, ...data[key]};
    })

    fetchTask(results);
  }

  renderTaskList = () => {
    const { listTask } = this.props;
    return (
      STATUSES.map(status => {
        let taskFilter = listTask.filter(
          task => task.status === status.value
        ).sort((a, b) => b.type - a.type);

        return (
          <TaskList 
            key={status.value}
            tasks={taskFilter}
            status={status}
          />
        )
      }) 
    );
  }

  render() {
    return (
      <div className="TaskBoard">
        {this.renderTaskList()}
      </div>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  listTask: task.data
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTask: (data) => dispatch(fetchTask(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);