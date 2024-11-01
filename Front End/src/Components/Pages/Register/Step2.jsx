import React from "react";

const Step2 = ({ additionalInfo, handleAdditionalChange, handleRegister, availableNiches }) => {
    const getFilteredNiches = (excludeValues) => {
        return availableNiches.filter((niche) => !excludeValues.includes(niche));
    };

    return (
        <form onSubmit={handleRegister} className="space-y-6">
            {/* Cover Letter */}
            <div className="relative">
                <textarea
                    placeholder="Cover Letter"
                    className="peer h-20 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                    name="coverLetter"
                    value={additionalInfo.coverLetter}
                    onChange={handleAdditionalChange}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                    Cover Letter
                </label>
            </div>

            {/* Role */}
            <div className="relative">
                <select
                    name="role"
                    className="h-8 w-full border-b-2 border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                    required
                    value={additionalInfo.role}
                    onChange={handleAdditionalChange}
                >
                    <option value="" disabled>Select Role</option>
                    <option value="jobSeeker" className="text-black">Job Seeker</option>
                    <option value="employer" className="text-black">Employer</option>
                </select>
            </div>

            {/* First Niche */}
            <div className="relative">
                <select
                    name="firstNich"
                    className="h-8 w-full border-b-2 border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                    value={additionalInfo.firstNich}
                    onChange={handleAdditionalChange}
                >
                    <option value="" disabled>Select First Niche</option>
                    {getFilteredNiches([]).map((niche, index) => (
                        <option className="text-black" key={index} value={niche}>{niche}</option>
                    ))}
                </select>
            </div>

            {/* Second Niche */}
            <div className="relative">
                <select
                    name="secondNich"
                    className="h-8 w-full border-b-2 border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                    value={additionalInfo.secondNich}
                    onChange={handleAdditionalChange}
                >
                    <option value="" disabled>Select Second Niche</option>
                    {getFilteredNiches([additionalInfo.firstNich]).map((niche, index) => (
                        <option className="text-black" key={index} value={niche}>{niche}</option>
                    ))}
                </select>
            </div>

            {/* Third Niche */}
            <div className="relative">
                <select
                    name="thirdNich"
                    className="h-8 w-full border-b-2 border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                    value={additionalInfo.thirdNich}
                    onChange={handleAdditionalChange}
                >
                    <option value="" disabled>Select Third Niche</option>
                    {getFilteredNiches([additionalInfo.firstNich, additionalInfo.secondNich]).map((niche, index) => (
                        <option className="text-black" key={index} value={niche}>{niche}</option>
                    ))}
                </select>
            </div>

            {/* Submit button */}
            <button
                className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                type="submit"
            >
                Register
            </button>
        </form>
    );
};

export default Step2;
