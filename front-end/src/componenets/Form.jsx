import { useState } from "react";

export default function Form({onSubmit}){
    const [newItem,setNewItem]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(newItem==='')return 
        onSubmit(newItem)

        setNewItem('')
      }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="tasks">Enter Task:</label>
        <input type="text" id='tasks'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className='btn-sub' type='submit'>Submit</button>
    </form>
  )
}