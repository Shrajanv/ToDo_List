import React from "react";
import{FiSearch} from "react-icons/fi";  
function SearchBar({onSearch,placeholder}){
    return(
        <div className="relative mb-4">
            <FiSearch className="absolute top-3 left-4 text-gray-500"/>
        <input
        type="text"
        className="w-full bg-violet-50 text-black p-2 pl-10 rounded-md placeholder-gray-700 focus:outline-none"
        placeholder="Search tasks"
        onChange={(e) => onSearch(e.target.value)}
   />
   </div>
    );
}
export default SearchBar;