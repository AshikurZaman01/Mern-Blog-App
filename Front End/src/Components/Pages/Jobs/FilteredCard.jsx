import { useState, useCallback } from "react";

const FilteredCard = ({ setCityData, setNicheData }) => {
    const [city, setCity] = useState("");
    const [niche, setNiche] = useState("");

    const cities = [
        "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal",
        "Narayanganj", "Gazipur", "Mymensingh", "Bogra", "Jessore"
    ];

    const nichesArray = [
        "Software Development", "Web Development", "Cybersecurity", "Data Science",
        "Artificial Intelligence", "Cloud Computing", "DevOps", "Mobile App Development",
        "Blockchain", "Database Administration", "Network Administration", "UI/UX Design",
        "Game Development", "IoT (Internet of Things)", "Big Data", "Machine Learning",
        "IT Project Management", "IT Support and Helpdesk", "Systems Administration", "IT Consulting"
    ];

    const handleCityChange = useCallback((e) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);
        setCityData(selectedCity);
    }, [setCityData]);

    const handleNicheChange = useCallback((e) => {
        const selectedNiche = e.target.value;
        setNiche(selectedNiche);
        setNicheData(selectedNiche);
    }, [setNicheData]);

    const handleReset = () => {
        setCity("");
        setNiche("");
        setCityData("");
        setNicheData("");
    };

    return (
        <div className="w-full sm:w-1/4 flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-medium border-b border-gray-300 pb-3 sm:pb-5">Filter Job By City</h2>
                <select
                    value={city}
                    onChange={handleCityChange}
                    className="border border-gray-300 rounded-md py-2 px-3"
                >
                    <option value="">Select a city</option>
                    {cities.map((cityName, index) => (
                        <option key={index} value={cityName}>
                            {cityName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-medium border-b border-gray-300 pb-3 sm:pb-5">Filter Job By Niche</h2>
                <select
                    value={niche}
                    onChange={handleNicheChange}
                    className="border border-gray-300 rounded-md py-2 px-3"
                >
                    <option value="" className="rounded-full">Select a niche</option>
                    {nichesArray.map((nicheName, index) => (
                        <option key={index} value={nicheName}>
                            {nicheName}
                        </option>
                    ))}
                </select>
            </div>
            <button
                onClick={handleReset}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200 hover:bg-red-600"
            >
                Reset Filters
            </button>
        </div>
    );
};

export default FilteredCard;
