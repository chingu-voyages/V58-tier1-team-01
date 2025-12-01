import earth from "../assets/images/header-image.png";
import TeamCard from "./TeamCard.jsx";

const Hero = () => {
  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-4 pt-12 flex flex-col lg:flex-row justify-between items-start">
        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-xl pt-8">
          <h1 className="text-5xl md:text-6xl font-medium leading-tight text-brand-dark">
            Discover the <br />
            Chingu World Map
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            See where developers, designers, and learners from the Chingu
            community live.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-brand-dark text-white px-8 py-4 rounded-xl text-lg hover:bg-opacity-90 transition-colors">
              Explore Map
            </button>

            <button className="bg-brand-dark text-white px-8 py-4 rounded-xl text-lg hover:bg-opacity-90 transition-colors">
              Explore members
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <img
              src={earth}
              alt="Chingu Map World Illustration"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      <TeamCard />
    </>
  );
};

export default Hero;
