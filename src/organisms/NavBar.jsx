import { useState } from 'react';
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavBar = ({title, bgColor, children, searchBar=null}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`bg-${bgColor} p-4`}>
      <div className="container min-w-full flex justify-between items-center">
        {/* Logo o Título */}
        <div className="text-white text-xl font-bold">{title}</div>

        {/* Boton de Menú en dispositivos móviles */}
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="text-white focus:outline-none text-2xl"
          >
            {menuOpen ? (
                <IoMdClose />
            ) : (
                <RiMenu5Fill />
            )}
          </button>
        </div>
        {/* Searchbar si es que hay */}
        {
            searchBar && 
            <div className='hidden md:block'>
                {searchBar}
            </div>
        }
        {/* Menú en dispositivos grandes */}
        <div className="hidden md:flex space-x-4">
            {children}
        </div>
      </div>
      {/* Menú desplegable en dispositivos móviles */}
      {menuOpen && (
        <div className="flex flex-col md:hidden mt-4">
            {children}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
