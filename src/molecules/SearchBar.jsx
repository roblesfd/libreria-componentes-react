import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSearch, suggestions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const newSearchItem = event.target.value;
    setSearchTerm(event.target.value);

    //Mostrar sugerencias cuando el usuario escribe
    if(newSearchItem) {
        setShowSuggestions(true);
    }else{
        setShowSuggestions(false);
    }
  };

  const handleSearch = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  return (
    <div className="relative">
        <div className={`flex justify-between items-center ${showSuggestions ? 'rounded' : 'rounded-full'}  bg-white`}>
            {/* Searchbar */}
            <input
                type="text"
                className="border-0 p-2 bg-transparent self-stretch focus:outline-none"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button
                className="bg-transparent text-slate-700 p-2 text-lg self-stretch"
                onClick={handleSearch}
            >
                <IoIosSearch />
            </button>
        </div>
        {/* Sugerencias de busueda */}
        {showSuggestions && (
            <ul className="absolute left-0 bg-white border rounded w-full">
            {suggestions.map((suggestion, index) => (
                <li
                key={index}
                className="cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => handleSearch(suggestion)}
                >
                {suggestion}
                </li>
            ))}
            </ul>
        )}
    </div>

  );
};

export default SearchBar;
