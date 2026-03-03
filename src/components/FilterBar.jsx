function FilterBar({ filter, onChange, counts }) {
  const filters = [
    { key: 'all', label: `All (${counts.total})` },
    { key: 'active', label: `Active (${counts.active})` },
    { key: 'completed', label: `Completed (${counts.completed})` },
  ]

  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          className={`filter-btn ${filter === f.key ? 'active' : ''}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
