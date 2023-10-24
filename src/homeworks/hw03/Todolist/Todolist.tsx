import React, {useRef, KeyboardEvent} from 'react';
import {FilterValuesType} from "../HW3";
import {useAutoAnimate} from "@formkit/auto-animate/react";

type Task = {
    id: string
    title: string
    isDone: boolean
}

type Props = {
    title: string
    tasks: Task[]
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    children?: React.ReactNode
}

export const Todolist: React.FC<Props> = ({children, ...props}) => {
    const [listRef] = useAutoAnimate<HTMLUListElement>()
    let onChangeRef = useRef<HTMLInputElement>(null)

    const handleAddTask = () => {
        if (onChangeRef.current) {
            props.addTask(onChangeRef.current.value)
            onChangeRef.current.value = ''
        }
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTask()
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                ref={onChangeRef}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={handleAddTask}>+</button>
        </div>
        <ul ref={listRef}>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
        {children}
    </div>
}

