import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 p-4">
      <div className="bg-gray-200 rounded-lg p-4 transition-all hover:bg-gray-300">
        <p className="text-xs sm:text-sm text-green-600 bg-green-200 rounded-md inline-block px-2">
          Hiring Multiple Candidates
        </p>
        <p className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
          Job Title
        </p>
        <p className="text-sm sm:text-base text-gray-600">Company Name</p>
        <p className="text-sm sm:text-base text-gray-600">Location</p>
        <p className="text-sm sm:text-base text-gray-600">
          <span className="font-semibold">Salary:</span> Rs. 0
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          <span className="font-semibold">Posted On:</span> N/A
        </p>
        <div className="flex justify-end mt-3">
          <Link
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base hover:bg-blue-600 transition-all"
            to="/post/application/1"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
