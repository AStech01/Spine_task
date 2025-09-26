import { CheckCircle, Circle, Trash2, Star, Edit } from "lucide-react";

export default function TaskItem({ task, onToggle, onDelete, onImportant, onEdit }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-md shadow-sm px-4 py-2 mb-3">
      <div className="flex items-center gap-3">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? (
            <CheckCircle className="text-green-500" />
          ) : (
            <Circle className="text-gray-400" />
          )}
        </button>
        <span className={`text-sm ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => onEdit(task)}><Edit size={18} className="text-blue-500" /></button>
        <button onClick={() => onImportant(task.id)}><Star size={18} className={task.important ? "text-yellow-400" : "text-gray-400"} /></button>
        <button onClick={() => onDelete(task.id)}><Trash2 size={18} className="text-red-500" /></button>
      </div>
    </div>
  );
}
