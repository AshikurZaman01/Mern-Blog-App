import Button from "../../Utils/Button/Button";

const Hero = () => {
  const handleBtn = () => {
    console.log("Button Clicked");
  };

  return (
    <section className="min-h-[800px] flex flex-col justify-center items-center mx-auto gap-8 max-w-[1700px] px-4 py-16 bg-gradient-to-br from-gray-800 via-purple-900 to-blue-800 text-white shadow-xl relative overflow-hidden rounded-md">

      <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-center tracking-wide leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-slate-500 to-blue-400">
        Find Your Dream Job Today
      </h1>

      <h4 className="text-lg md:text-2xl font-medium text-gray-200 text-center">
        Connecting Talent with Opportunities Across the Nation for Every Skill Level
      </h4>

      <div className="max-w-3xl text-center bg-gradient-to-br from-gray-800 via-purple-800 to-blue-900 text-gray-100 p-8 md:p-12 rounded-2xl font-medium transition duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:bg-opacity-80 shadow-lg shadow-purple-600/20 relative z-10 overflow-hidden">
        <p className="mb-4 relative z-20">
          Explore a vast array of job listings in diverse industries. Whether you're a seasoned professional or just starting out, find the perfect role to advance your career.
        </p>

        <div className="flex justify-center items-center gap-4 relative z-20">
          <Button onClick={handleBtn} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/3 -mb-2 bg-gradient-to-t from-blue-800 via-transparent to-transparent blur-sm z-0"></div>
    </section>
  );
};

export default Hero;
