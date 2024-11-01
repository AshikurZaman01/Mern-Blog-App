// Step1.js
import React from "react";
import { FaCloudUploadAlt } from 'react-icons/fa';

const Step1 = ({ basicInfo, handleBasicChange, handleFileChange, fileName, handleNext }) => {
    return (
        <form onSubmit={handleNext} className="space-y-6">
            {/* Basic Information Fields */}
            <div className="relative">
                <input
                    placeholder="Full Name"
                    className="peer h-8 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                    required
                    name="name"
                    type="text"
                    value={basicInfo.name}
                    onChange={handleBasicChange}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                    Full Name
                </label>
            </div>
            <div className="relative">
                <input
                    placeholder="Email Address"
                    className="peer h-8 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                    required
                    name="email"
                    type="email"
                    value={basicInfo.email}
                    onChange={handleBasicChange}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                    Email Address
                </label>
            </div>
            <div className="relative">
                <input
                    placeholder="Password"
                    className="peer h-8 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                    required
                    name="password"
                    type="password"
                    value={basicInfo.password}
                    onChange={handleBasicChange}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                    Password
                </label>
            </div>
            <div className="relative">
                <input
                    placeholder="Phone Number"
                    className="peer h-8 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                    required
                    name="phone"
                    type="tel"
                    value={basicInfo.phone}
                    onChange={handleBasicChange}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                    Phone Number
                </label>
            </div>
            <div className="relative">
                <input
                    placeholder="Address"
                    className="peer h-8 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                    required
                    name="address"
                    type="text"
                    value={basicInfo.address}
                    onChange={handleBasicChange}
                />
                <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                    Address
                </label>
            </div>
            <div className="relative">
                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center w-full h-12 px-4 text-gray-600 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                    <FaCloudUploadAlt className="text-purple-500 mr-2" />
                    {fileName || 'Upload Resume'}
                </label>
                {fileName && (
                    <span className="absolute left-0 -bottom-6 text-gray-500 text-sm">
                        Selected: {fileName}
                    </span>
                )}
            </div>
            <button
                className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                type="submit"
            >
                Next
            </button>
        </form>
    );
};

export default Step1;
