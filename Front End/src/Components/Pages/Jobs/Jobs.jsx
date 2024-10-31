import FilteredCard from "./FilteredCard";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";

const Jobs = () => {


    return (
        <section className="p-10 min-h-[800px]">
            <div className="flex gap-12">
                <FilteredCard></FilteredCard>
                <div className="w-3/4">
                    <SearchBar></SearchBar>
                    <JobCard></JobCard>
                </div>
            </div>
        </section>
    );
};

export default Jobs;
