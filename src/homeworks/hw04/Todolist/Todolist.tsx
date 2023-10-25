import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {FilterValuesType} from "../HW4";


type Task = {
    id: string
    title: string
    isDone: boolean
}

type Props = {
    listTitle: string
    tasks: Task[]
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export const Todolist: React.FC<Props> = ({listTitle, tasks,removeTask,changeFilter,addTask}) => {
    let [title, setTitle] = useState("")

    const addTaskHandler = () => {
       addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTaskHandler();
        }
    }

    const onAllClickHandler = () =>changeFilter("all");
    const onActiveClickHandler = () => changeFilter("active");
    const onCompletedClickHandler = () => changeFilter("completed");

    return <div>
        <h3>{listTitle}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {
                tasks.map(t => {

                    const onClickHandler = () =>removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ onAllClickHandler }>All</button>
            <button onClick={ onActiveClickHandler }>Active</button>
            <button onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}

