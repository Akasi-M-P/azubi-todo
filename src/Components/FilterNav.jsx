

// FilterNav component for filtering todo items
const FilterNav = () => {
  return (
    <div className="bg-white w-80 md:w-96 lg:w-2/4 lg:gap-14 2xl:w-3/5 2xl:gap-16 2xl:text-lg 2xl:text-gray-500 h-14 mx-auto rounded-tl-md rounded-tr-md border-b border-gray-300 pb-4 flex justify-center items-center gap-5 py-4">
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Completed</button>
    </div>
  );
};

export default FilterNav;
