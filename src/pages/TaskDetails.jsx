import { useParams, useNavigate } from "react-router-dom";
import { loadTasks, saveTasks } from "../utils/localStorage";
import { ArrowLeft, Star, CheckCircle, Circle } from "lucide-react";
import { useState, useEffect } from "react";

export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const tasks = loadTasks();
    const foundTask = tasks.find((t) => t.id.toString() === id);
    setTask(foundTask || null);
  }, [id]);

  if (!task) {
    return (
      <div className="text-center text-gray-500 mt-10">
        Task not found.
        <button
          onClick={() => navigate("/")}
          className="block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  const toggleImportant = () => {
    const tasks = loadTasks().map((t) =>
      t.id === task.id ? { ...t, important: !t.important } : t
    );
    saveTasks(tasks);
    setTask({ ...task, important: !task.important });
  };

  const toggleCompleted = () => {
    const tasks = loadTasks().map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    saveTasks(tasks);
    setTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-600 hover:underline mb-4"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <h2 className="text-2xl font-semibold mb-2">{task.title}</h2>
      <p className="text-gray-500 mb-4">Task ID: {task.id}</p>

      <div className="flex gap-4 mb-4">
        <button
          onClick={toggleCompleted}
          className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          {task.completed ? (
            <CheckCircle className="text-green-500" />
          ) : (
            <Circle className="text-gray-400" />
          )}
          {task.completed ? "Completed" : "Mark as Completed"}
        </button>

        <button
          onClick={toggleImportant}
          className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          <Star className={task.important ? "text-yellow-400" : "text-gray-400"} />
          {task.important ? "Important" : "Mark Important"}
        </button>
      </div>
    </div>
  );
}
