import { useState } from "react";
import "./App.css";
import moon from "./assets/icon-moon.svg";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./Components/TodoItem";
import FilterNav from "./Components/FilterNav";
import Footer from "./Components/Footer";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    const createTodo = {
      id: uuidv4(),
      text: todo,
      status: false,
    };
    setTodoItems([...todoItems, createTodo]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const deleteTodo = (id) => {
    const newTodoItems = todoItems.filter((todoItem) => todoItem.id !== id);
    setTodoItems(newTodoItems);
  };

  const updateStatus = (id, status) => {
    const updatedTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          status: status,
        };
      }
      return todoItem;
    });
    setTodoItems(updatedTodoItems);
  };

  const clearCompleted = () => {
    const updatedTodoItems = todoItems.filter((todoItem) => !todoItem.status);
    setTodoItems(updatedTodoItems);
  };

  return (
    <>
      <main className="">
        <header className="bg-[url('./assets/bg-mobile-light.jpg')] bg-cover bg-no-repeat h-52 relative md:bg-[url('./assets/bg-desktop-light.jpg')]">
          <div className="flex justify-between px-7 py-10 md:px-10 md:py-10 lg:px-64 xl:px-80">
            <h1 className="text-white text-2xl font-bold">TO DO</h1>
            <img src={moon} alt="half-moon" className="object-contain" />
          </div>
          <div className="w-full">
            <div className="md:w-full">
              <form
                onSubmit={handleSubmit}
                className="w-80 mx-auto relative md:w-96 lg:w-2/4 2xl:w-3/5"
              >
                <input
                  value={todo}
                  onChange={handleChange}
                  type="text"
                  placeholder="Create new ToDo item"
                  className="w-80 lg:w-full h-11 rounded-md mt-1 px-5 focus:outline-none md:w-96"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white h-8 w-12 rounded-md absolute right-3 top-2.5 lg:w-16"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10">
            <FilterNav filter={filter} setFilter={setFilter} />
            <div>
              {todoItems
                .filter((item) => {
                  if (filter === "all") return true;
                  if (filter === "active") return !item.status;
                  if (filter === "completed") return item.status;
                  return true;
                })
                .map((todoItem) => (
                  <TodoItem
                    key={todoItem.id}
                    text={todoItem.text}
                    id={todoItem.id}
                    todoItem={todoItem}
                    deleteTodo={() => deleteTodo(todoItem.id)}
                    updateStatus={updateStatus}
                  />
                ))}
            </div>
            <Footer
              clearCompleted={clearCompleted}
              todoItems={todoItems} // Pass todoItems
              filter={filter} // Pass filter
            />
          </div>
        </header>
      </main>
    </>
  );
}

export default App;
