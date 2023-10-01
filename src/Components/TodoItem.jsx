/* eslint-disable react/prop-types */
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";

const TodoItem = ({ id, text, todoItem, deleteTodo, updateStatus }) => {
  const [complete, setComplete] = useState(todoItem.status);

  const handleDelete = () => {
    deleteTodo(id);
  };

  const toggleCompleted = () => {
    setComplete(!complete);
    updateStatus(id, !complete);
  };

  return (
    <div className="bg-white w-80 md:w-96 lg:w-2/4 2xl:w-3/5 2xl:px-12 px-4 h-14 mx-auto border-b border-gray-300 pb-4 py-4 flex justify-between">
      <div
        className={`flex gap-4 2xl:gap-8 2xl:text-lg justify-center items-center${
          complete ? " line-through text-gray-500" : ""
        }`}
      >
        {complete ? (
          <BsCheckLg
            className="text-green-600 cursor-pointer"
            onClick={toggleCompleted}
          />
        ) : (
          <TiDelete
            className="text-blue-600 cursor-pointer"
            onClick={toggleCompleted}
          />
        )}
        {text}
      </div>
      <div>
        <RiDeleteBin2Fill
          className="text-red-500 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default TodoItem;
