import React, {useState} from 'react';
import {FilterValuesType} from "../HW2";


type Task = {
    id: number
    title: string
    isDone: boolean
}

type Props = {
    title: string
    tasks: Task[]
    removeTask: (taskId: number) => void
    deleteAllTasks: () => void
}

export const Todolist: React.FC<Props> = ({title, tasks, deleteAllTasks, removeTask}) => {
    const [filter, setFilter] = useState<FilterValuesType>("all")

    let tasksForTodolist = tasks

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone)}

    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone)}

    if (filter === "three") {
        tasksForTodolist = tasks.filter(t => t.id<4)}


    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)}

    return <div>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                       removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={deleteAllTasks}>Delete all tasks</button>
        </div>
        <div><button onClick={() => {changeFilter("all")}}>All</button>
            <button onClick={() => {changeFilter("active")}}>Active</button>
            <button onClick={() => {changeFilter("completed")}}>Completed</button>
            <button onClick={() => {changeFilter("three")}}>first three task</button>
        </div>
    </div>
}

