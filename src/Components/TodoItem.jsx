/* eslint-disable react/prop-types */

import { TiDelete } from "react-icons/ti";
import { RiDeleteBin2Fill } from "react-icons/ri";


const TodoItem = ({ id, text, deleteTodo }) => {
  // Handle delete button click
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="bg-white w-80 md:w-96 lg:w-2/4 2xl:w-3/5 2xl:px-12 px-4 h-14 mx-auto border-b border-gray-300 pb-4 py-4 flex justify-between">
      <div className="flex gap-4 2xl:gap-8 2xl:text-lg justify-center items-center">
        <TiDelete className=" text-blue-600 cursor-pointer" />
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
