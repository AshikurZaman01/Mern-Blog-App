import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
    return (
        <section className="howItWorks py-12 flex flex-col items-center gap-12 bg-yellow-300">
            <h3 className="text-2xl font-semibold text-gray-900 uppercase">How does it work?</h3>
            <div className="container flex flex-col gap-8">
                <div className="card bg-white p-8 flex flex-col gap-4 rounded-md transition-transform transform hover:translate-y-[-0.625rem] hover:bg-gray-900 hover:text-white">
                    <div className="icon w-fit flex bg-gray-900 p-2 rounded-full justify-center items-center transition-colors">
                        <LuUserPlus className="text-4xl text-white hover:text-gray-900" />
                    </div>
                    <h4 className="text-xl font-medium">Create an Account</h4>
                    <p className="text-gray-600">
                        Sign up for a free account as a job seeker or employer. Set up your
                        profile in minutes to start posting jobs or applying for jobs.
                        Customize your profile to highlight your skills or requirements.
                    </p>
                </div>
                <div className="card bg-white p-8 flex flex-col gap-4 rounded-md transition-transform transform hover:translate-y-[-0.625rem] hover:bg-gray-900 hover:text-white">
                    <div className="icon w-fit flex bg-gray-900 p-2 rounded-full justify-center items-center transition-colors">
                        <VscTasklist className="text-4xl text-white hover:text-gray-900" />
                    </div>
                    <h4 className="text-xl font-medium">Post or Browse Jobs</h4>
                    <p className="text-gray-600">
                        Employers can post detailed job descriptions, and job seekers can
                        browse a comprehensive list of available positions. Utilize filters
                        to find jobs that match your skills and preferences.
                    </p>
                </div>
                <div className="card bg-white p-8 flex flex-col gap-4 rounded-md transition-transform transform hover:translate-y-[-0.625rem] hover:bg-gray-900 hover:text-white">
                    <div className="icon w-fit flex bg-gray-900 p-2 rounded-full justify-center items-center transition-colors">
                        <BiSolidLike className="text-4xl text-white hover:text-gray-900" />
                    </div>
                    <h4 className="text-xl font-medium">Hire or Get Hired</h4>
                    <p className="text-gray-600">
                        Employers can shortlist candidates and extend job offers. Job
                        seekers can review job offers and accept positions that align with
                        their career goals.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default HowItWorks