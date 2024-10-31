import { useState } from "react";

const FilteredCard = () => {
    const [city, setCity] = useState("");
    const [niche, setNiche] = useState("");

    console.log("city :", city, "niches", niche);

    const cities = [
        "Dhaka",
        "Chittagong",
        "Khulna",
        "Rajshahi",
        "Sylhet",
        "Barisal",
        "Narayanganj",
        "Gazipur",
        "Mymensingh",
        "Bogra",
        "Jessore",
    ];

    const nichesArray = [
        "Software Development",
        "Web Development",
        "Cybersecurity",
        "Data Science",
        "Artificial Intelligence",
        "Cloud Computing",
        "DevOps",
        "Mobile App Development",
        "Blockchain",
        "Database Administration",
        "Network Administration",
        "UI/UX Design",
        "Game Development",
        "IoT (Internet of Things)",
        "Big Data",
        "Machine Learning",
        "IT Project Management",
        "IT Support and Helpdesk",
        "Systems Administration",
        "IT Consulting",
    ];

    return (
        <div className="w-1/4 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium border-b border-gray-300 pb-5">Filter Job By City</h2>
                {cities.map((cityName, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <input
                            type="radio"
                            id={cityName}
                            name="city"
                            value={cityName}
                            checked={city === cityName}
                            onChange={() => setCity(cityName)}
                        />
                        <label htmlFor={cityName}>{cityName}</label>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium border-b border-gray-300 pb-5">Filter Job By Niche</h2>
                {nichesArray.map((nicheName, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <input
                            type="radio"
                            id={nicheName}
                            name="niche"
                            value={nicheName}
                            checked={niche === nicheName}
                            onChange={() => setNiche(nicheName)}
                        />
                        <label htmlFor={nicheName}>{nicheName}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilteredCard;
