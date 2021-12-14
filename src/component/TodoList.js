import React , {useState} from "react";
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList(){
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
      const newTodos = [todo, ...todos];

      setTodos(newTodos);
  }

  const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id);

      setTodos(removeArr);
  }
  const updateTodo = (todoId, newValue) => {

    if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return; 
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
}
  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if(todo.id === id){
              todo.isComplete = !todo.isComplete
          }
          return todos;
      })
      setTodos(updatedTodos)
  }
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
