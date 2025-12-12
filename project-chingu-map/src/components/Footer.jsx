import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4">
      <div className="bg-brand-dark rounded-t-[40px] rounded-b-[40px] lg:rounded-b-none p-12 text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div className="flex items-center gap-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white fill-current"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
            <span className="text-2xl font-bold">Chingu Map</span>
          </div>

          <nav className="flex flex-wrap gap-6 text-gray-300">
            <Link
              to="/MapPage"
              className="text-lg hover:underline decoration-2 underline-offset-4"
            >
              Map
            </Link>
            <Link
              to="/ListPage"
              className="text-lg hover:underline decoration-2 underline-offset-4"
            >
              List
            </Link>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-block bg-brand-green text-brand-dark px-2 py-1 rounded font-medium self-start">
              Github repo
            </div>
            <div className="space-y-4 text-gray-300 font-light">
              <a
                href="https://github.com/chingu-voyages/v58-tier1-team-01"
                className="hover:text-brand-green"
              >
                Chingu-Voyages | v58-tier1-team-01
              </a>
            </div>

            <div className="inline-block bg-brand-green text-brand-dark px-2 py-1 rounded font-medium self-start">
              Chingu
            </div>
            <div className="space-y-4 text-gray-300 font-light">
              <a
                href="https://www.chingu.io/"
                className="hover:text-brand-green"
              >
                https://www.chingu.io
              </a>
            </div>
          </div>

          <div className="flex bg-[#292A32] rounded-[20px] p-8 flex-col sm:flex-row gap-4 items-center">
            <p className=" text-[20px] text-center text-amber-50 leading-relaxed">
              Get to know the participants in the Chingu program
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row gap-8 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
