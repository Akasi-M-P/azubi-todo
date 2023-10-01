/* eslint-disable react/prop-types */

const FilterNav = ({ filter, setFilter }) => {
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-white w-80 md:w-96 lg:w-2/4 lg:gap-14 2xl:w-3/5 2xl:gap-16 2xl:text-lg 2xl:text-gray-500 h-14 mx-auto rounded-tl-md rounded-tr-md border-b border-gray-300 pb-4 flex justify-center items-center gap-5 py-4">
      <button
        type="button"
        onClick={() => handleFilterChange("all")}
        className={filter === "all" ? "text-blue-500 font-bold" : ""}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => handleFilterChange("active")}
        className={filter === "active" ? "text-blue-500 font-bold" : ""}
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => handleFilterChange("completed")}
        className={filter === "completed" ? "text-blue-500 font-bold" : ""}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterNav;
