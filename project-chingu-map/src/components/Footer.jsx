import { Linkedin, Facebook, Twitter } from 'lucide-react';

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
            <span className="text-2xl font-bold">Positivus</span>
          </div>

          <nav className="flex flex-wrap gap-6 text-gray-300">
            <a href="#" className="hover:text-brand-green underline decoration-1 underline-offset-4">About us</a>
            <a href="#" className="hover:text-brand-green underline decoration-1 underline-offset-4">Services</a>
            <a href="#" className="hover:text-brand-green underline decoration-1 underline-offset-4">Use Cases</a>
            <a href="#" className="hover:text-brand-green underline decoration-1 underline-offset-4">Pricing</a>
            <a href="#" className="hover:text-brand-green underline decoration-1 underline-offset-4">Blog</a>
          </nav>

          <div className="flex gap-4">
            <div className="bg-white rounded-full p-2 text-brand-dark cursor-pointer hover:bg-brand-green transition-colors">
              <Linkedin size={18} />
            </div>
            <div className="bg-white rounded-full p-2 text-brand-dark cursor-pointer hover:bg-brand-green transition-colors">
              <Facebook size={18} />
            </div>
            <div className="bg-white rounded-full p-2 text-brand-dark cursor-pointer hover:bg-brand-green transition-colors">
              <Twitter size={18} />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-block bg-brand-green text-brand-dark px-2 py-1 rounded font-medium self-start">
              Contact us:
            </div>
            <div className="space-y-4 text-gray-300 font-light">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          <div className="flex-1 bg-[#292A32] rounded-[20px] p-8 flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-500 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-green"
            />
            <button className="w-full sm:w-auto whitespace-nowrap bg-brand-green text-brand-dark px-8 py-4 rounded-xl font-medium hover:bg-opacity-90">
              Subscribe to news
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row gap-8 text-gray-400 text-sm">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline hover:text-brand-green">Privacy Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
