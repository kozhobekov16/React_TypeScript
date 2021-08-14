import React from 'react'
import { ImToDo } from './interfaces'

type TodoListProps = {
    todos: ImToDo[]
    toggle(id: number): void
    remove: (id: number) => void
}

export const TodoList: React.FunctionComponent<TodoListProps> = (props, {todos}) => {
    return (
        <div>
            <ul>
                {props.todos.map(todo => {
                    const classes = ['todo']
                    if (todo.complated) {
                        classes.push('complated')
                    }
                    return (
                        <li className={classes.join(' ')} key={todo.id}>
                            <label>
                                <input type="checkbox"
                                    checked={todo.complated}
                                    onChange={() => props.toggle(todo.id)}
                                />
                                <span>{todo.title}</span>
                                <i className="material-icons red-text" onClick={() => props.remove(todo.id)}>delete</i>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
