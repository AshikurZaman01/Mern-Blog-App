import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setSearchData }) => {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearch = () => {
        setSearchData(searchKeyword);
    };

    return (
        <div className="flex justify-center mb-8 relative w-full max-w-xl mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-xl" />
            <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search for jobs..."
                className="w-full text-lg border border-gray-300 rounded-md py-3 pl-12 pr-28"
            />
            <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-md"
            >
                Find Job
            </button>
        </div>
    );
};

export default SearchBar;
