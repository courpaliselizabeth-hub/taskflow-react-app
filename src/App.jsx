import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'
import './App.css'

const INITIAL_TASKS = [
  { id: 1, title: 'Learn React hooks', completed: true, priority: 'high' },
  { id: 2, title: 'Build a sample app', completed: false, priority: 'high' },
  { id: 3, title: 'Style with CSS', completed: false, priority: 'medium' },
]

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [filter, setFilter] = useState('all')

  const addTask = (title, priority) => {
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title, completed: false, priority },
    ])
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    active: tasks.filter(t => !t.completed).length,
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <div className="stats">
          <span>{stats.completed}/{stats.total} done</span>
        </div>
      </header>

      <main className="app-main">
        <TaskForm onAdd={addTask} />
        <FilterBar filter={filter} onChange={setFilter} counts={stats} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
        {filteredTasks.length === 0 && (
          <p className="empty-state">No tasks to show.</p>
        )}
      </main>
    </div>
  )
}

export default App
