import React from 'react';
import {Data} from "../HW1";

type Props = {
    data: Data
}

export const Tasks: React.FC<Props> = ({data}) => {
    return (
        <div>
            <h4>{data.title}</h4>
            <div>
                <ul>
                    {data.tasks.map((task) => {
                        return <li key={task.taskId}>
                            <input type={"checkbox"} checked={task.isDone}/>
                            <span> {task.title} </span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

