"use client"

import { ST } from 'next/dist/shared/lib/utils';
import React, { useState } from 'react'
const STYLE = "border-2 border-black rounded-md px-2 mb-2"

type TaskType = {
    id:number;
    name:string;
    time:number;
}

export default function Todo2() {
    const [formTask, setFormTask] = useState<TaskType>({id:-1, name:'Task', time:0})
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, name: "Reading a book", time: 100},
        {id: 2, name: "Writing a program", time: 30},
        {id: 3, name: "Sleeping", time: 120},
    ]);

    
    function handleInput(e:React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setFormTask({...formTask, [name]:value})
        console.log('formTask.name', formTask.name);
    }

    function addTask(){
        // console.log("add")
        // tasks.push({id: 4, name: "Playing game", time: 60})
        // setTasks([...tasks, {id: 4, name: "Playing game", time: 60}])
        // const temp = [...tasks, {id: 4, name: "Playing game", time: 60}]
        // setTasks(temp)
        const newTask = {...formTask, id: (tasks.length) ? tasks[tasks.length-1].id+1 :1};
        setTasks([...tasks, newTask]);
        setFormTask({id:-1, name:'Task', time:0})
    }

    function deleteTask(id:number){
        console.log("ID :" ,id)
        const newTask = tasks.filter( (task) => (task.id !== id))
        setTasks(newTask)
    }

    function editTask(id:number){
        console.log("edit ID :" ,id)
        const index = tasks.findIndex( (task) => (task.id === id))
        console.log("edit task :" ,tasks[index])
        setFormTask(tasks[index])
    }

    function updateTask(){
        const newTasks = tasks.map((task) => 
        ((formTask.id === task.id)?formTask:task))
        setTasks(newTasks)
        setFormTask({id:-1, name:'Task', time:0})

    }
    
  return (
    <div className='ml-5'>
        <h1>Todo2</h1>

        {/* {tasks[0]['id']}: {tasks[0].name}
        <br/><hr/><br/>
        {JSON.stringify(tasks)}
        <br/><hr/><br/>
        <button className={`${STYLE}`} onClick={add}>Click</button> */}
        <h2 className='text-xl font-bold mt-5'>{formTask.id === -1 ? "Add Task":"Edit Task"}</h2>
        <div className={`${formTask.id === -1 ? "bg-blue-100":"bg-yellow-100"} mt-2 border-2 border-black rounded-xl p-5 w-fit`}>
            <div>
                <label htmlFor="name">Name: </label><br/>
                <input type="text" name='name' value={formTask.name} className={`${STYLE}`} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="time">Time: </label><br/>
                <input type="number" name='time' value={formTask.time} className={`${STYLE}`} onChange={handleInput}/>
            </div>
            <div>
                <button className={`${STYLE} mt-5 bg-blue-500 text-white hover:bg-blue-200 hover:text-black`} onClick={formTask.id === -1? addTask:updateTask}>{formTask.id === -1 ? "Add":"Edit"}</button>
            </div>
        </div>
        <h2 className='text-xl font-bold mt-5'>List:</h2>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task.id}. {task.name}: {task.time} 
                    <button className={`${STYLE} m-2 bg-red-800 text-white rounded-2xl hover:bg-red-200 hover:text-black`} onClick={() => deleteTask(task.id)}>delete</button>
                    <button className={`${STYLE} m-2 bg-yellow-700 text-white rounded-2xl hover:bg-yellow-200 hover:text-black`} onClick={() => editTask(task.id)}>edit</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
