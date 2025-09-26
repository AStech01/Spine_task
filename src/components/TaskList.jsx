import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete, onImportant, onEdit }) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks yet.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onImportant={onImportant}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
