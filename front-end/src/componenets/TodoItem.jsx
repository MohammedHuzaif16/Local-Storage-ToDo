import '../App.css'

export default function ToDoItem({ id,title,completed, taskDelete, toggleTodo }) {
    return (
        <li>
            <label htmlFor="task" className={completed ? 'task-done' : ''}>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}</label>
            <button className='btn-del' onClick={() => taskDelete(id)}>delete</button>
        </li>
    )
}