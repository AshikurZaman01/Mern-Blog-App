import { useState } from "react";
import FilteredCard from "./FilteredCard";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";

const Jobs = () => {

    const [cityData, setCityData] = useState('')
    const [nicheData, setNicheData] = useState('')
    const [searchData, setSearchData] = useState('')
console.log(cityData, nicheData, searchData)

    return (
        <section className="p-10 min-h-[800px]">
            <div className="flex gap-12">

                <FilteredCard setCityData={setCityData} setNicheData={setNicheData}></FilteredCard>

                <div className="w-3/4">
                    <SearchBar setSearchData={setSearchData} ></SearchBar>
                    <JobCard></JobCard>
                </div>
            </div>
        </section>
    );
};

export default Jobs;
