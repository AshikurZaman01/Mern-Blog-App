import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    return (
        <div className="flex justify-center mb-8 relative w-full max-w-xl mx-auto">
            <input
                type="text"
                className="w-full text-lg border border-gray-300 rounded-md py-3 pl-4 pr-12"
            />
            <button
                className="absolute  right-0 top-0 mt-2 mr-2 bg-yellow-400 text-gray-800 font-semibold py-1 px-4 rounded-md"
            >
                Find Job
            </button>
            <FaSearch className="absolute mx-4 left-0 text-yellow-400 text-2xl  top-1/2 -translate-y-1/2  " />
        </div>

    )
}

export default SearchBar