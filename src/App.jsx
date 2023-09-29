import { useState } from "react";
import "./App.css";
import moon from "./assets/icon-moon.svg";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import FilterNav from "./Components/FilterNav";
import Footer from "./Components/Footer";

function App() {
  // State for managing todo items
  const [todoItems, setTodoItems] = useState([]);

  const [complete, setComplete] = useState(false);

  // Function to delete a todo item by ID
  const deleteTodo = (id) => {
    const newTodoItems = todoItems.filter((todoItem) => todoItem.id !== id);
    setTodoItems(newTodoItems);
  };

  const handleCompleted = () => {
    setComplete(!complete);
  };

  // Function to delete Completed Items
  const deleteCompletedItems = () => {
    console.log(todoItems);
    const unCompletedItems = todoItems.filter((todoItem) => !todoItem.complete);

    setTodoItems(unCompletedItems);
    console.log(todoItems);
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
            <AddTodo
              todoItems={todoItems}
              setTodoItems={setTodoItems}
              handleCompleted={handleCompleted}
            />
          </div>
          <div className="mt-10">
            <FilterNav />
            <div>
              {todoItems.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  deleteTodo={() => deleteTodo(todo.id)}
                />
              ))}
            </div>
            <Footer
              todoItems={todoItems}
              deleteCompletedItems={deleteCompletedItems}
            />
          </div>
        </header>
      </main>
    </>
  );
}

export default App;
