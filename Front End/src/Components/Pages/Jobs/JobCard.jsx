import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineFieldTime, AiOutlineDollarCircle } from "react-icons/ai";

const JobCard = ({ job }) => {
    const { title, companyName, hiringMultipleCandidates, jobPosedDate, jobType, location, salary } = job || {};

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">

            <div className="flex justify-between items-center mb-4">
                <p className={`text-xs sm:text-sm rounded-md inline-block px-2 py-1 ${hiringMultipleCandidates === "yes" ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>
                    {hiringMultipleCandidates === "yes" ? 'Hiring Multiple Candidates' : 'Hiring'}
                </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-2 capitalize">{title}</h2>
            <p className="text-sm text-gray-600 capitalize mb-2 ">{companyName}</p>

            <div className="flex items-center text-sm text-gray-600 mb-3 capitalize">
                <MdOutlineLocationOn className="mr-1 text-gray-500" />
                <span>{location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-3 capitalize font-bold">
                <AiOutlineFieldTime className="mr-1 text-gray-500" />
                <span>{jobType}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-3">
                <AiOutlineDollarCircle className="mr-1 text-gray-500" />
                <span className="font-semibold">
                    Salary:
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded ml-1 inline-block">
                        Rs. {salary}
                    </span>
                </span>
            </div>

            <div className="text-xs mt-3">
                <p className="text-blue-600">
                    <span className="font-semibold">Posted on:</span> {jobPosedDate && jobPosedDate.slice(0, 10)}
                </p>
            </div>

            <div className="flex justify-end mt-4">
                <Link
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200 hover:bg-blue-700 transform hover:-translate-y-1"
                    to={`/post/application/${job._id}`}
                >
                    Apply Now
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
