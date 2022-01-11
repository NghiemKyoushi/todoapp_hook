import React , {useEffect, useState} from "react";
import Todo from './Todo';
import TodoForm from './TodoForm';
import axios from 'axios';
export default function TodoList(){
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
      const newTodo = todo;
      const addAPI = await axios.post("http://localhost:3030/todo/addTodo", newTodo)
      setTodos(addAPI.data);
  }

  const removeTodo = async (_id) => {
      const removeArr = await axios.post("http://localhost:3030/todo/delete", _id);

      setTodos(removeArr.data);
  }
  const updateTodo = async (todo) => {
      console.log("update", todo);
      const updateTodo = await axios.put("http://localhost:3030/todo/updateTodo", todo);

    setTodos(updateTodo.data);
}
  const completeTodo = async (todo) => {
    console.log("update", todo);
    const updateTodo = await axios.put("http://localhost:3030/todo/checkComplete", todo);
    setTodos(updateTodo.data);
  }

  useEffect( () => {
      async function fetchData(){
          console.log("fetch data")
        const res = await axios.get("http://localhost:3030/todo/findAll");
        console.log("res", res.data);
        setTodos(res.data);
      }
      fetchData();
  }, [])

  return (
    <div>
        <h1>List Todo</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
        todos={todos} 
        updateTodo={updateTodo}
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        />
    </div>
)
}
