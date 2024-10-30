const TopNiches = () => {
    const services = [
        {
            id: 1,
            service: "Software Development",
            description:
                "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
        },
        {
            id: 2,
            service: "Web Development",
            description:
                "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
        },
        {
            id: 3,
            service: "Data Science",
            description:
                "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
        },
        {
            id: 4,
            service: "Cloud Computing",
            description:
                "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
        },
        {
            id: 5,
            service: "DevOps",
            description:
                "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
        },
        {
            id: 6,
            service: "Mobile App Development",
            description:
                "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
        },
    ];

    return (
        <section className="py-16 flex flex-col items-center gap-12 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded shadow-md">


            <h3 className="text-3xl font-bold text-yellow-400 uppercase tracking-wider">Top Niches</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                    >
                        <h4 className="text-xl font-semibold uppercase tracking-wide mb-2">{service.service}</h4>
                        <p className="text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopNiches;
