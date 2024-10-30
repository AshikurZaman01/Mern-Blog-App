import Lottie from 'lottie-react';
import animationData from '../../assets/notfound - Animation.json';
import GoBackBtn from '../../Utils/GoBackBtn';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen px-4">
            <Lottie
                animationData={animationData}
                loop={true}
                className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto"
            />
            <div className="mt-4 sm:mt-6">
                <GoBackBtn />
            </div>

        </div>
    );
};

export default NotFound;
