// Footer component for displaying item count and clear completed button
const Footer = () => {
  

  return (
    <div className="bg-white w-80 md:w-96 lg:w-2/4 2xl:w-3/5 2xl:px-14 2xl:text-lg px-4 h-14 mx-auto rounded-bl-md rounded-br-md border-b pb-4 flex justify-between items-center gap-5 py-4">
      <div> item(s)</div>
      <div>
        <button type="button">Clear Completed</button>
      </div>
    </div>
  );
};

export default Footer;
