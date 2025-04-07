import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    onClearSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, handleSearch, onClearSearch }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-2 items-center">
            <input
                type="text"
                placeholder="Search Recipes"
                className="w-full sm:w-auto flex-grow px-4 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={value}
                onChange={onChange}
            />
            {value && (
                <IoMdClose
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                    onClick={onClearSearch}
                />
            )}
            <FaMagnifyingGlass
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                onClick={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
