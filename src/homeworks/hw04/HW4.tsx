import React, {useState} from 'react'
import {v1} from "uuid";
import {Todolist} from "./Todolist/Todolist";

// Hi guys!
//1.Let`s wrap up our bunch  of filters in a function.
//How can we do this? We can wrap all our goodies into a new function:
//     const filteredTasks=()=>{
//          let tasksForTodolist = tasks;
//
//          if (filter === "active") {
//          return   tasksForTodolist = tasks.filter(t => !t.isDone);
//          }
//          if (filter === "completed") {
//            return  tasksForTodolist = tasks.filter(t => t.isDone);
//          }
//          return tasksForTodolist
//     }

//2.Let`s replace our if`s with  switch.


export type FilterValuesType = "all" | "active" | "completed"

export const HW4 = () => {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id)
        setTasks(filteredTasks)
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false}
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>("all")

    const filteredTasks = () => {
        let tasksForTodolist = tasks

        switch (filter) {
            case "active": {
                return tasksForTodolist = tasks.filter(t => !t.isDone)
            }
            case "completed": {
                return tasksForTodolist = tasks.filter(t => t.isDone)
            }
            default:
                return tasksForTodolist
        }


    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return (
        <div className="App">
            <Todolist listTitle="What to learn"
                      tasks={filteredTasks()}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    )
}


