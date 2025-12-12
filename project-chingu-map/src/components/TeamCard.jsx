import { Linkedin } from "lucide-react";
import Anas from "../assets/images/profile-Image/anas.jpeg";
import Fadumo from "../assets/images/profile-Image/fadumo.jpeg";
import Isreal from "../assets/images/profile-Image/Isreal.jpeg";
import Jugraj from "../assets/images/profile-Image/Jugraj.jpeg";
import Amin from "../assets/images/profile-Image/Amin.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Anas El Assri",
    role: "Frontend Developer",
    imageUrl: Anas,
    linkedin: "https://www.linkedin.com/in/anas-el-assri-852920279",
    description:
      "Passionate about building modern, fast, and aesthetic web interfaces using React, Tailwind CSS, and Framer Motion.",
  },
  {
    id: 2,
    name: "Fadumo Ahmed",
    role: "Frontend Developer",
    imageUrl: Fadumo,
    linkedin: "https://www.linkedin.com/in/fadumo-ahmed-06657715a",
    description:
      "Creative frontend developer skilled in crafting responsive designs and seamless user experiences with HTML, CSS, and JavaScript.",
  },
  {
    id: 3,
    name: "Isreal Oyebamiji",
    role: "AI Product Developer",
    imageUrl: Isreal,
    linkedin: "https://www.linkedin.com/in/israel-oyebamiji-7576a3342",
    description:
      "Innovative AI product developer focused on integrating machine learning solutions into user-centric applications to enhance functionality and user engagement.",
  },
  {
    id: 4,
    name: "Jugraj Singh Bali",
    role: "Full Stack Developer",
    imageUrl: Jugraj,
    linkedin: "https://www.linkedin.com/in/jugraj-singh-bali-117994268/",
    description:
      "Versatile full stack developer with expertise in MERN stack, building robust web applications from frontend to backend.",
  },
  {
    id: 5,
    name: "Amin Khorram",
    role: "AI/ML ENGINEER ",
    imageUrl: Amin,
    linkedin: "https://www.linkedin.com/in/aminkhorram/",
    description:
      "Dedicated AI/ML engineer with a passion for developing intelligent systems and machine learning models to solve complex problems.",
  },
];

const TeamCard = ({ member }) => {
  return (
    <div className="w-full bg-white border border-brand-dark rounded-[40px] p-8 shadow-retro flex flex-col justify-between h-full hover:translate-x-1 hover:-translate-y-1 hover:shadow-none transition-all duration-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 border-b border-brand-dark pb-6 relative">
        <div className="relative w-20 h-20 flex-shrink-0">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover rounded-full scale-75 z-10"
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
          <p className="text-sm text-gray-600 font-medium">{member.role}</p>
        </div>

        <a
          href={member.linkedin || "#"}
          className="absolute top-0 right-0 sm:static bg-brand-dark rounded-full p-2 text-brand-green hover:text-white transition-colors"
        >
          <Linkedin size={20} className="text-brand-green" />
        </a>
      </div>

      <div className="text-brand-dark text-base leading-relaxed">
        {member.description}
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
