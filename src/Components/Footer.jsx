/* eslint-disable react/prop-types */
// Footer component for displaying item count and clear completed button
const Footer = ({ todoItems, deleteCompletedItems }) => {
  const itemNumber = todoItems.length;

  const handleComplete = () => {
    deleteCompletedItems();
  };

  return (
    <div className="bg-white w-80 md:w-96 lg:w-2/4 2xl:w-3/5 2xl:px-14 2xl:text-lg px-4 h-14 mx-auto rounded-bl-md rounded-br-md border-b pb-4 flex justify-between items-center gap-5 py-4">
      <div>{itemNumber} item(s)</div>
      <div>
        <button type="button" onClick={handleComplete}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Footer;
