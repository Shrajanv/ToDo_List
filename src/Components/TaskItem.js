function TaskItem({task,toggleComplete,toggleImportant,deleteTask}){
    return(
        <div
        className={`flex justify-between items-center p-2 rounded-md mb-2
            ${task.isImportant ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}
            ${task.isCompleted ? 'line-through text-gray-500' : ''}`}
        >
            <span className="flex-1">
                {task.text}
            </span>
            <div className="flex space-x-2">
            <button onClick={() => toggleComplete(task.id)} className="text-green-500 hover:text-green-700">
          {task.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => toggleImportant(task.id)} className="text-blue-500 hover:text-blue-700">
          {task.isImportant ? 'Unmark' : 'Highlight'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    </div>
    );

}
export default TaskItem;
