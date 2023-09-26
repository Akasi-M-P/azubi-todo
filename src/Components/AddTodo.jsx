/* eslint-disable react/prop-types */
import{ useState } from "react";
import { v4 as uuidv4 } from "uuid";

// AddTodo component for adding new todo items
const AddTodo = ({ todoItems, setTodoItems }) => {
  // State for managing the input value
  const [newTodo, setNewTodo] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    const newTodoItem = {
      id: uuidv4(),
      text: newTodo,
    };
    setTodoItems([...todoItems, newTodoItem]);
    setNewTodo("");
  };

  return (
    <div className="md:w-full">
      <form
        className="w-80 mx-auto relative md:w-96 lg:w-2/4 2xl:w-3/5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
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
  );
};

export default AddTodo;
