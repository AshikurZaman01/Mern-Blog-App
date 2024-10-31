import { useEffect, useState } from "react";
import FilteredCard from "./FilteredCard";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getAllJobs } from "../../../Redux/features/jobSlice/jobSlice";
import { FaSpinner } from "react-icons/fa";

const Jobs = () => {
    const [cityData, setCityData] = useState('');
    const [nicheData, setNicheData] = useState('');
    const [searchData, setSearchData] = useState('');

    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobSlice);

    useEffect(() => {
        dispatch(getAllJobs({ city: cityData.toLowerCase(), niche: nicheData.toLowerCase(), searchKeywords: searchData.toLowerCase() }));
    }, [cityData, nicheData, searchData, dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <FaSpinner className="animate-spin text-5xl text-center mx-auto" />
        </div>
    );

    return (
        <section className="p-5 sm:p-10 min-h-[800px]">
            <div className="flex flex-col sm:flex-row gap-8">
                <FilteredCard setCityData={setCityData} setNicheData={setNicheData} />
                <div className="w-full sm:w-3/4">
                    <SearchBar setSearchData={setSearchData} />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 p-4">
                        {jobs.length ? (
                            jobs.map(job => (
                                <JobCard key={job._id} job={job} />
                            ))
                        ) : (
                            <p>No jobs found.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Jobs;
