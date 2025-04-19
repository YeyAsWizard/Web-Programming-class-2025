"use client";

import React, { useState } from 'react';
const STYLE = "border-2 border-black rounded-md px-2 mb-2";
const ANIMATION = "animate-[slideIn_0.3s_ease-out] transition-opacity duration-300"

interface TaskType {
  id: number;
  name: string;
  time: number;
  isDone?: boolean;
}

export default function Todo_HW() {
  const [formTask, setFormTask] = useState<TaskType>({ id: -1, name: 'Task', time: 0 });
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, name: "Reading a book", time: 100, isDone: true },
    { id: 2, name: "Writing a program", time: 30, isDone: false },
    { id: 3, name: "Sleeping", time: 120, isDone: false },
  ]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormTask({ ...formTask, [name]: value });
  }

  function addTask() {
    const newTask = { ...formTask, id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1 };
    setTasks([...tasks, newTask]);
    setFormTask({ id: -1, name: 'Task', time: 0 });
  }

  function deleteTask(id: number) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  }

  function editTask(id: number) {
    const index = tasks.findIndex((task) => task.id === id);
    setFormTask(tasks[index]);
  }

  function updateTask() {
    const newTasks = tasks.map((task) => (formTask.id === task.id ? formTask : task));
    setTasks(newTasks);
    setFormTask({ id: -1, name: 'Task', time: 0 });
  }

  function toggleTaskDone(id: number) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
  }

  return (
    <div className="ml-5">
      <h2 className="text-xl font-bold mt-5">{formTask.id === -1 ? "Add Task" : "Edit Task"}</h2>
      <div className={`${formTask.id === -1 ? "bg-blue-100" : "bg-yellow-100"} mt-2 border-2 border-black rounded-xl p-5 w-fit`}>
        <div>
          <label htmlFor="name">Name: </label><br />
          <input type="text" name="name" value={formTask.name} className={`${STYLE}`} onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="time">Time: </label><br />
          <input type="number" name="time" value={formTask.time} className={`${STYLE}`} onChange={handleInput} />
        </div>
        <div>
          <button className={`${STYLE} mt-5 bg-blue-500 text-white hover:bg-blue-200 hover:text-black`} onClick={formTask.id === -1 ? addTask : updateTask}>
            {formTask.id === -1 ? "Add" : "Edit"}
          </button>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-5">List:</h2>
      <ul className={`${STYLE} p-2`}>
        {tasks.map((task, index) => (
          <li key={index} className={`${ANIMATION} w-[100%]`}>
            <input type="checkbox" checked={task.isDone} onChange={() => toggleTaskDone(task.id)} className="mr-2" />
            {task.id}. {task.name}: {task.time} 
            <button className={`${STYLE} m-2 bg-red-800 text-white rounded-2xl hover:bg-red-200 hover:text-black`} onClick={() => deleteTask(task.id)}>delete</button>
            <button className={`${STYLE} m-2 bg-yellow-700 text-white rounded-2xl hover:bg-yellow-200 hover:text-black`} onClick={() => editTask(task.id)}>edit</button>
            {task.isDone? <span className='text-green-600'>Done!</span> : <span></span>}
          </li>
        ))}
      </ul>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(-20px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes fadeout{
            opacity: 1;
          }to {
            opacity: 0;
          }
        `}
      </style>
    </div>
  );
}
