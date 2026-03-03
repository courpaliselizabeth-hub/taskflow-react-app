function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      <span className="task-title">{task.title}</span>
      <span className={`priority-badge ${task.priority}`}>{task.priority}</span>
      <button
        onClick={() => onDelete(task.id)}
        className="btn-delete"
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem
