"use client"
import React, { useState } from 'react'
const STYLE = "border-2 border-black rounded-md px-2 mb-2"


export default function Todo() {
    const [task, setTask] = useState("")
    const [editTask, setEditTask] = useState("")
    const [editId, setEditId] = useState(-1)
    const [tasks, setTasks] = useState<string[]>([
        "Reading",
        "Writing",
        "Coding",
    ])

    function deleteTask(indexTask:number) :void {
        setTasks(tasks.filter((_, index) => index !== indexTask))
    }
    function editTaskFunction (indexTask:number) : void{
        setEditId(indexTask)
        setEditTask(tasks[indexTask])
    }

    function updateTask() : void{
        if(editId === -1){
            return
        }
        const newTasks = [...tasks]
        newTasks[editId] = editTask
        setTasks(newTasks)
        setEditId(-1)
        setEditTask("")
    }

  return (
    <div>
        <div>
            <label htmlFor="task">Task: </label>
            <input className={`${STYLE}`} type="text" name='task' value={task} onChange={e => setTask(e.target.value)} />
        </div>
        <div>
            <button className={`${STYLE}`} onClick={e => setTasks([...tasks, task])}>Add task</button>
        </div>

        <div className='h-[60vh] border-2'>
            Task: {task} <br ></br>
            Tasks: {
                tasks.map( (task, index) => (
                    <div key={index}>
                        <button className={`${STYLE}`} onClick={() => editTaskFunction(+index)}>edit</button><button className={`${STYLE}`} onClick={() => deleteTask(+index)}>delete</button> {index +1}. {task} 
                    </div>
                ) )
            }
        </div>
        Edit Task:
        <input type="text" className={`${STYLE}`} value={editTask} onChange={e => setEditTask(e.target.value)}/>
        <button className={`${STYLE} ml-4`} onClick={updateTask}>Save</button>
        <button className={`${STYLE} ml-4`} onClick={e => setTasks([])}>Clear</button>
    </div>
  )
}
