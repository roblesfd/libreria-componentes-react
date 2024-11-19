import { useState } from "react";

const Drawer = ({icon, drawerContent}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <button
        className="fixed bottom-8 right-8 bg-accent2 cursor-pointer text-white p-3 rounded-full shadow-md z-10 text-2xl"
        onClick={handleToggleDrawer}
      >
        {icon}
      </button>
      {isOpen &&
        <div className={`fixed top-0 ${isOpen ? 'right-0' : 'right-full'} w-60 h-full bg-gray-200 p-8 shadow-md transition-all transform duration-300 z-2`}>
          {drawerContent}
        </div>
      }

    </>
  );
};

export default Drawer;
