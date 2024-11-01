import React from 'react';

const TaskList = ({ task, toggleComplete, toggleImportant, deleteTask, isDeadlineApproaching }) => {
  return (
    
    <tr className={`pl-2 pl-8text-left ${isDeadlineApproaching ? 'bg-red-200' : ''}`}>
      <td className={`p-3 pl-8 ${task.isCompleted ? 'line-through' : ''}`}>
        {task.text}
      </td>
      <td className="p-5,pl-8" >
        {task.deadline ? task.deadline : "No deadline" } {/* Display deadline here */}
      </td>
      <td className="p-2,ml-8 pl-8">
        <button onClick={() => toggleComplete(task.id)} className="text-blue-500 hover:underline mr+10 ">
          {task.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => toggleImportant(task.id)} className="text-yellow-500  hover:underline ml-8">
          {task.isImportant ? 'Unmark Important' : 'Mark Important'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:underline  ml-8">
          Delete
        </button>
      </td>
    </tr>
    
  );
};

export default TaskList;
  
