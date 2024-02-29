import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);

    setTodos(newArray);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const clearCompletedTodo = () => {
    const newArray = todos.filter((todo) => todo.completed !== true);

    setTodos(newArray);
  };

  const countTodo = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const [filter, setFilter] = useState("active");

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div
      className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')]
     bg-contain bg-no-repeat transition-all duration-1000
      md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-gray-900 
      dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
      md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
       "
    >
      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filteredTodos()}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />

        <TodoComputed
          clearCompletedTodo={clearCompletedTodo}
          countTodo={countTodo}
        />

        <TodoFilter setFilter={setFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
