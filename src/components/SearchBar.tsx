import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

//-----------search bar----------
interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    onClearSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
                                                 value,
                                                 onChange,
                                                 handleSearch,
                                                 onClearSearch,
                                             }) => {
    return (
        <div className="relative w-full sm:w-96">
            <input
                type="text"
                placeholder="Search Recipes"
                className="w-full px-10 pr-20 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={value}
                onChange={onChange}
            />
            {/* Search icon */}
            <FaMagnifyingGlass
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 cursor-pointer"
                onClick={handleSearch}
            />
            {/* Clear icon (only visible if there's text) */}
            {value && (
                <IoMdClose
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={onClearSearch}
                />
            )}
        </div>
    );
};

export default SearchBar;
