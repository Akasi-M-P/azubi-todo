/* eslint-disable react/prop-types */

import TaskCount from "./TaskCount";

const Footer = ({ clearCompleted, todoItems, filter }) => {
  const handleClearCompleted = () => {
    clearCompleted();
  };

  // Calculate the count of tasks based on the current filter
  const count = todoItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "active") return !item.status;
    if (filter === "completed") return item.status;
    return true;
  }).length;

  return (
    <div className="bg-white w-80 md:w-96 lg:w-2/4 2xl:w-3/5 2xl:px-14 2xl:text-lg px-4 h-14 mx-auto rounded-bl-md rounded-br-md border-b pb-4 flex justify-between items-center gap-5 py-4">
      <div>
        <TaskCount count={count} filter={filter} />{" "}
        {/* Render TaskCount component with count */}
      </div>
      <div>
        <button type="btn" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Footer;
