import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md m-2">
      <div
        className="bg-gray-100 p-2 cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`p-2 transition ${isOpen ? "block" : "hidden"}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
