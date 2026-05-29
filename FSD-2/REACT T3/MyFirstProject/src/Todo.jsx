import {useState} from 'react'

export default function Todo() {
    const [task,setTask] = useState('')
    const [todo,setTodo] = useState([])
    const addTask = ()=>{
        setTodo([...todo,{id:Date.now(),name:task}])
        setTask('')
    }
    const deleteTask = (id)=>{
        setTodo(todo.filter((t)=>t.id !== id))
    }
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todo.map((t) => (
          <li key={t.id}>
            {t.name}
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
