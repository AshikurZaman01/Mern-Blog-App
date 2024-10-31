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

    const handleCityChange = useCallback((selectedCity) => {
        setCity(selectedCity);
        setCityData(selectedCity);
    }, [setCityData]);

    const handleNicheChange = useCallback((selectedNiche) => {
        setNiche(selectedNiche);
        setNicheData(selectedNiche);
    }, [setNicheData]);

    return (
        <div className="w-full sm:w-1/4 flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-medium border-b border-gray-300 pb-3 sm:pb-5">Filter Job By City</h2>
                {cities.map((cityName, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <input
                            type="radio"
                            id={cityName}
                            name="city"
                            value={cityName}
                            checked={city === cityName}
                            onChange={() => handleCityChange(cityName)}
                        />
                        <label htmlFor={cityName}>{cityName}</label>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-medium border-b border-gray-300 pb-3 sm:pb-5">Filter Job By Niche</h2>
                {nichesArray.map((nicheName, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <input
                            type="radio"
                            id={nicheName}
                            name="niche"
                            value={nicheName}
                            checked={niche === nicheName}
                            onChange={() => handleNicheChange(nicheName)}
                        />
                        <label htmlFor={nicheName}>{nicheName}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilteredCard;
