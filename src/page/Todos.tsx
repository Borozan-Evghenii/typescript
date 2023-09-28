import {useEffect, useState} from 'react';
import axios from "axios";
import {ITodo} from "../components/globalTypes.ts";
import TodoItem from "../components/TodoItem.tsx";
import UniversalList from "../components/UniversalList.tsx";

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const todoResponse = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(todoResponse.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <br/>
            <hr/>
            <br/>
            <h1>Todos Page</h1>
            <br/>
            <UniversalList
                items={todos}
                renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default Todos;