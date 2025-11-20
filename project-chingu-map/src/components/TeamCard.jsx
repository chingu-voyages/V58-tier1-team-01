import { Linkedin } from "lucide-react";


const teamMembers = [
  {
    id: 1,
    name: "Anas El Assri",
    role: "Frontend Developer",
    imageUrl: "/images/team/anas.jpg",
    linkedin: "https://www.linkedin.com/in/example",
    description:
      "Passionate about building modern, fast, and aesthetic web interfaces using React, Tailwind CSS, and Framer Motion."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Designer",
    imageUrl: "/images/team/sarah.jpg",
    linkedin: "https://www.linkedin.com/in/example2",
    description:
      "Experienced UI/UX designer focused on creating clean, minimalistic digital experiences with strategic thinking."
  },
  {
    id: 3,
    name: "Michael Chan",
    role: "Backend Developer",
    imageUrl: "/images/team/michael.jpg",
    linkedin: "https://www.linkedin.com/in/example3",
    description:
      "Server-side expert specializing in Node.js, scalable APIs, and database optimization for high-performance apps."
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    imageUrl: "/images/team/emily.jpg",
    linkedin: "https://www.linkedin.com/in/example4",
    description:
      "Digital marketing strategist helping brands grow through SEO, content strategy, and performance analytics."
  }
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
        {teamMembers.map(member => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
