import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import SearchBar from "./Components/SearchBar";
import TaskList from "./Components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
            //console.log("Loaded tasks from local storage:", JSON.parse(storedTasks));
        }
    }, []);

  
    useEffect(() => {
        if (tasks.length > 0) {  
            localStorage.setItem('tasks', JSON.stringify(tasks));
            //console.log("Saved tasks to local storage:", tasks);
        }
    }, [tasks]);

    const addTask = (text, deadline) => {
        const newTask = {
            id: Date.now(),
            text,
            deadline,
            isCompleted: false,
            isImportant: false,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const toggleComplete = (id) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const toggleImportant = (id) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === id ? { ...task, isImportant: !task.isImportant } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const clearTasks = () => {
        setTasks([]);
        localStorage.removeItem('tasks'); 
    };

    const currentDate = new Date().toISOString().split("T")[0];
    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-violet-500 min-h-screen p-6 flex justify-center items-center">
        <div className="max-w-3xl w-full p-6 bg-violet-700 text-white rounded-lg shadow-lg">
            <h1 className="text-lg font-bold text-center mb-6">To-Do List</h1>
            
            <SearchBar 
                onSearch={setSearchTerm} 
                placeholder="Search tasks..." 
                className="bg-violet-200 p-2 rounded-md w-full mb-4 text-gray-700 placeholder-gray-500" 
            />

            <AddTask addTask={addTask} />
            <div className="flex justify-center ">
            <table className="w-full mt-4 bg-purple-200 text-gray-800 rounded-md shadow-lg">
                <thead>
                    <tr className="bg-violet-300">
                        <th className="p-3 border-b border-violet-400 ">Task</th>
                        <th className="p-3 border-b border-violet-400">Deadline</th>
                        <th className="p-3 border-b border-violet-400">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map(task => (
                        <TaskList
                            key={task.id}
                            task={task}
                            toggleComplete={toggleComplete}
                            toggleImportant={toggleImportant}
                            deleteTask={deleteTask}
                            isDeadlineApproaching={task.deadline && task.deadline <= currentDate}
                        />
                    ))}
                </tbody>
            </table>
            </div>
            <button 
                onClick={clearTasks} 
                className="bg-violet-500 text-white mt-4 p-2 rounded-md w-full hover:bg-violet-600 transition">
                Clear All
            </button>
        </div>
    </div>
);
}

export default App;
