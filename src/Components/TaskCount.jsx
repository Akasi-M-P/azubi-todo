

const TaskCount = ({ count, filter }) => {
  return (
    <div className="text-gray-500">
      {count} {filter === "all" ? "items" : "item(s)"}
    </div>
  );
};

export default TaskCount;
