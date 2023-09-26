import { useState, useEffect } from 'react'
import './App.css'
import Form from './componenets/Form'
import ToDoList from './componenets/TodoList'

function App() {
  const [tasks, setTasks] = useState(()=>JSON.parse(localStorage.getItem('tasks')) || [])
  
  const onAdd = (title) => {
    setTasks((prevTasks) => {return [...prevTasks,
    { id: crypto.randomUUID(), title:title, completed: false }]})
  }

  const toggleTodo = (id, completed) => {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, completed }
        }
        return task
      })
    })
  }

  const taskDelete = (id) => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== id)
    })
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  console.log(tasks)

  return (
    <div className="container">
      <div id='todo'>
        <Form onSubmit={onAdd} />
        <h1 className="header">To Do Tasks</h1>
        <ToDoList tasks={tasks} toggleTodo={toggleTodo}
          taskDelete={taskDelete}
        />
      </div>
    </div>
  )
}

export default App
