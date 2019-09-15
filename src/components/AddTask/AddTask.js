import React from 'react'
import './AddTask.scss';

const AddTask = ({onClickAddTask}) => {
  return (
    <div className="TaskList__add">
      <button onClick={onClickAddTask}>+ Thêm task mới</button>
    </div>
  )
}

export default AddTask;
