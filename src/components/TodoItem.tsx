import {FC} from 'react';
import {ITodo} from "../globalTypes/globalTypes.ts";

interface TodoItemProps{
    todo: ITodo
}
const TodoItem:FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <input type={'checkbox'} checked={todo.completed}/>
            <p>{todo.title}</p>
        </div>
    );
};

export default TodoItem;