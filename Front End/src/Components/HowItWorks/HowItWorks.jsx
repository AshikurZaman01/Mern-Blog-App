import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
    const steps = [
        {
            icon: <LuUserPlus className="text-4xl text-yellow-400" />,
            title: "Create an Account",
            description: "Sign up as a job seeker or employer, setting up your profile to start..."
        },
        {
            icon: <VscTasklist className="text-4xl text-yellow-400" />,
            title: "Post or Browse Jobs",
            description: "Employers can post jobs and seekers can browse them using filters..."
        },
        {
            icon: <BiSolidLike className="text-4xl text-yellow-400" />,
            title: "Hire or Get Hired",
            description: "Employers shortlist candidates, and seekers can review job offers."
        }
    ];

    return (
        <section className="py-16 flex flex-col items-center gap-12 max-w-screen-2xl mx-auto bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-md shadow-md">
            <h3 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">How does it work?</h3>

            <div className="flex flex-col gap-8 w-full px-4 md:flex-row">
                {steps.map((step, index) => (
                    <div key={index}
                        className="bg-white p-8 rounded-md shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col items-center text-center gap-4 hover:bg-gray-900 hover:text-white"
                    >
                        <div className="icon bg-gray-900 p-4 rounded-full">{step.icon}</div>
                        <h4 className="text-xl font-semibold">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
