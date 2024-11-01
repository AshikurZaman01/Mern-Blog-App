// Register.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Register = () => {

    const nichesArray = [
        "Software Development", "Web Development", "Cybersecurity", "Data Science",
        "Artificial Intelligence", "Cloud Computing", "DevOps", "Mobile App Development",
        "Blockchain", "Database Administration", "Network Administration", "UI/UX Design",
        "Game Development", "IoT (Internet of Things)", "Big Data", "Machine Learning",
        "IT Project Management", "IT Support and Helpdesk", "Systems Administration", "IT Consulting"
    ];

    const [step, setStep] = useState(1);
    const [basicInfo, setBasicInfo] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        resume: null
    });
    const [additionalInfo, setAdditionalInfo] = useState({
        coverLetter: '',
        role: '',
        firstNich: '',
        secondNich: '',
        thirdNich: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [inProp, setInProp] = useState(true);
    const [fileName, setFileName] = useState('');

    const handleBasicChange = (e) => {
        const { name, value } = e.target;
        setBasicInfo((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setBasicInfo((prevData) => ({ ...prevData, resume: file }));
        setFileName(file ? file.name : '');
    };

    const handleAdditionalChange = (e) => {
        const { name, value } = e.target;
        setAdditionalInfo((prevData) => ({ ...prevData, [name]: value }));

        // Update selected niches in additionalInfo state
        if (name === "firstNich" || name === "secondNich" || name === "thirdNich") {
            setAdditionalInfo((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const getAvailableNiches = (excludeValues) => {
        return nichesArray.filter(niche => !excludeValues.includes(niche));
    };

    const handleNext = (e) => {
        e.preventDefault();
        setInProp(false);
        setTimeout(() => {
            setStep(2);
            setInProp(true);
        }, 300);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const formData = new FormData();
        for (const key in basicInfo) formData.append(key, basicInfo[key]);
        for (const key in additionalInfo) formData.append(key, additionalInfo[key]);

        // Log each entry of FormData for debugging
        for (let [key, value] of formData.entries()) {
            if (key === "resume" && value instanceof File) {
                console.log(`${key}: ${value.name}`); // Log the file name for the resume
            } else {
                console.log(`${key}: ${value}`);
            }
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
                <h2 className="text-center text-4xl font-extrabold text-white">
                    {step === 1 ? "Create an Account" : "Additional Information"}
                </h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-500 text-center">{success}</p>}

                <CSSTransition in={inProp} timeout={300} classNames="fade" unmountOnExit>
                    {step === 1 ? (
                        <Step1
                            basicInfo={basicInfo}
                            handleBasicChange={handleBasicChange}
                            handleFileChange={handleFileChange}
                            fileName={fileName}
                            handleNext={handleNext}
                        />
                    ) : (
                        <Step2
                            additionalInfo={additionalInfo}
                            handleAdditionalChange={handleAdditionalChange}
                            handleRegister={handleRegister}
                            availableNiches={getAvailableNiches(Object.values(additionalInfo))}
                        />
                    )}
                </CSSTransition>

                <div className="text-center text-gray-300">
                    Already have an account?{' '}
                    <Link to="/login" className="text-purple-300 hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
