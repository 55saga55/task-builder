import React from "react";
import TaskIndi from "./TaskIndi";

const Task = ({ task,onDelete,onToggle }) => {
  return (
    <>
      {task.map((x, index) => {
        return <TaskIndi task={x} key={index} onDelete={onDelete} onToggle={onToggle} />;
      })}
    </>
  );
};

export default Task;
