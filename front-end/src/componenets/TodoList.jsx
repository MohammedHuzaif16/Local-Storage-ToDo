import ToDoItem from "./TodoItem"

export default function ToDoList({ tasks, toggleTodo, taskDelete }) {

    return (
        <ul className="list">
            {tasks.length === 0 && "Nothing to Display"}
            {tasks.map(task => {
                return (
                    <ToDoItem key={task.id} {...task} toggleTodo={toggleTodo}
                        taskDelete={taskDelete} />
                )
            })
            }
        </ul>
    )
}