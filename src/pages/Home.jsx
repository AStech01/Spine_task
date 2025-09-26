import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { loadTasks, saveTasks } from "../utils/localStorage";

export default function Home() {
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false, important: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const markImportant = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, important: !t.important } : t)));
  };

  const editTaskHandler = (task) => {
    const newTitle = prompt("Edit Task:", task.title);
    if (newTitle) {
      setTasks(tasks.map((t) => (t.id === task.id ? { ...t, title: newTitle } : t)));
    }
  };

  const filteredTasks = tasks.filter((t) =>
    filter === "completed" ? t.completed : filter === "pending" ? !t.completed : true
  );

  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
       
        <h2 className="text-2xl font-semibold text-center mb-6">My Task Manager</h2>

     
        <TaskForm onAdd={addTask} />

    
        <div className="flex justify-center gap-3 my-4">
          {["all", "completed", "pending"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-md ${
                filter === f ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

     
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onImportant={markImportant}
          onEdit={editTaskHandler}
        />
      </div>
    </div>
  );
}
