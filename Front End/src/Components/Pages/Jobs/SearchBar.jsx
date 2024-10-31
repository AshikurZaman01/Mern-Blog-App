import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setSearchData }) => {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleKeyUp = () => {
        setSearchData(searchKeyword);
    };

    return (
        <div>
            <div className="flex justify-center mb-8 relative w-full max-w-full sm:max-w-xl mx-auto">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg sm:text-xl" />
                <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    onKeyUp={handleKeyUp}
                    placeholder="Search for jobs..."
                    aria-label="Search for jobs"
                    className="w-full text-base sm:text-lg border border-gray-300 rounded-md py-2 sm:py-3 pl-10 sm:pl-12 pr-20 sm:pr-28"
                />
                <button
                    onClick={() => setSearchData(searchKeyword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-gray-800 font-semibold py-1 sm:py-2 px-3 sm:px-4 rounded-md"
                >
                    Find Job
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
