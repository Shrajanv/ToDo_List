import { useState } from "react";
import React from "react";
import { FiPlus } from "react-icons/fi";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {  
        addTask(text, deadline);
        setText('');
        setDeadline('');
    }
};

    return(
      <div className="relative mb-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        
        <FiPlus className="absolute top-5 left-4 text-gray-500" />
      <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Task Name" 
          className="w-full bg-violet-50 text-black p-2 pl-10 rounded-md placeholder-gray-700 focus:outline-none"
          required 
      />
     <div className="mb-4">
    <label className="block text-white-700 font-medium mb-1" htmlFor="deadline"> 
        Add Deadline
  </label>
    
    <input
        type="date"
        id="deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full bg-violet-50 text-black p-2 rounded-md focus:outline-none"
    />
</div>


      <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
          Add Task
      </button>
 
  </form>
  </div>
  );
}
export default AddTask;