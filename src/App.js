import { useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";
import "./App.css";
import { Context } from "./context";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    let arr = [...todos, { text: inputValue, complete: false }];
    if (inputValue) {
      // modify todos
      setTodos(arr);

      // clear input
      setInputValue("");

      // save in local storage
      updateLocalTodos(arr);
    }
  };

  useEffect(() => {
    // getting values of localStorage
    let localTodos = JSON.parse(localStorage.getItem("todos"));

    // check for emptyness of localStorage
    localTodos && setTodos(localTodos);
  }, []);

  const updateLocalTodos = (arr) => {
    localStorage.setItem("todos", JSON.stringify(arr));
  };

  const completeTodo = (id) => {
    let arr = [...todos];
    arr[id].complete = !arr[id].complete;
    setTodos(arr);
    updateLocalTodos(arr);
  };

  const deleteTodo = (id) => {
    let arr = [...todos];
    arr.splice(id, 1);
    setTodos(arr);
    updateLocalTodos(arr);
  };

  return (
    <Context.Provider value={{ deleteTodo, completeTodo }}>
      <div className="container">
      <h1 className="h1">What's the Plan for Today?</h1>

        <div className="mainBlock">
        <div>
          <input
              className="textIn"
              placeholder="type something ..."
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button onClick={createTodo}>Add</button>
        </div>
          
        </div>
        {todos &&
          todos.map((el, id) => {
            return (
              <TodoItem
                todo={el}
                id={id}
                key={id}
              />
            );
          })}
      </div>
    </Context.Provider>
  );
}

export default App;
