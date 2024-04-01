import React from 'react'

function TodoForm({stateTodo, setStateTodo}) {

const TodoSubmitClick = (evt) =>{
    evt.preventDefault()
    let data = {
        id: stateTodo.length ? stateTodo[stateTodo.length - 1].id + 1 : 1,
        value: evt.target.todoName.value
    }
    setStateTodo([...stateTodo, data])
    evt.target.reset()
}
    
  return (
    <>
    <form onSubmit={TodoSubmitClick} className="w-[700px] p-5 bg-teal-500 rounded-lg mx-auto mt-10 flex flex-col justify-center items-center">
        <h1 className="font-bold text-[40px] text-white">ToDo List</h1>
        <div className="flex items-end justify-between w-full">
        <label className="w-full flex flex-col gap-[10px] items-start">
            <span className="font-semibold text-[20px]">Enter your todo</span>
            <input className="w-[90%] p-2 rounded-md" name="todoName" placeholder='Enter your todo' type='text' required autoComplete='off'/>
        </label>
        <button className="p-2 mt-5 rounded-md w-[25%] bg-blue-500 text-white text-center text-[20px]">+Add</button>
        </div>
    </form>
        </>
  )
}

export default TodoForm