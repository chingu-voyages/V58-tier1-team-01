import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Compass className="w-8 h-8 text-brand-dark rotate-45 fill-brand-dark" />
        <span className="text-2xl font-bold text-brand-dark">Chingu Map</span>
      </div>

      <nav className="flex items-center gap-8">
        <Link
          to="/"
          className="text-lg hover:underline decoration-2 underline-offset-4"
        >
          Home
        </Link>
        <Link
          to="/"
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

      <button className="border border-brand-dark px-6 py-3 rounded-xl text-brand-dark font-medium hover:bg-brand-dark hover:text-white transition-colors">
        13 october 2025
      </button>
    </header>
  );
};

export default Header;
