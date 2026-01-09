import { Mail, Linkedin, Sparkles } from 'lucide-react';
import CEO from '../assets/images/ceo.png';

// Team data
const teamMembers = [
  {
    id: 1,
    name: 'Kunle Peters',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in tech and urban innovation. Passionate about connecting communities through technology.',
    image: CEO,
    email: 'engrkunlea@citiesapp.com',
    linkedin: 'https://www.linkedin.com/in/kunle-adebanjo-mba-303578198/'
  },
  {
    id: 2,
    name: 'Alex Johnson',
    role: 'Chief Technology Officer',
    bio: 'AI and security expert with background at leading tech companies. Built scalable platforms for millions of users.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    email: 'alex@citiesapp.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Head of Product',
    bio: 'Product leader focused on user experience and community building. Former product manager at major social platforms.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    email: 'david@citiesapp.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Head of Community',
    bio: 'Community builder with experience growing online communities to 10M+ members. Expert in local engagement.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    email: 'sarah@citiesapp.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 5,
    name: 'Michael Park',
    role: 'Head of Engineering',
    bio: 'Full-stack engineer with expertise in building scalable, secure platforms. Led engineering teams at startups.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    email: 'michael@citiesapp.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 6,
    name: 'Priya Patel',
    role: 'Head of Design',
    bio: 'Award-winning designer focused on creating intuitive, beautiful interfaces that serve diverse communities.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    email: 'priya@citiesapp.com',
    linkedin: 'https://linkedin.com'
  }
];

function TeamSection() {
  return (
    <section id="team" className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-950">
      {/* Background Effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
      </div> */}

       <div className="absolute inset-0 bg-[url('https://cdn.aib.edu.au/public-website/uploads/p/2019/03/form-submission-7464-teamworkisimportantintheworkplace-desktop-768x432-1606698141-85.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
              Our Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Meet The</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate minds building the future of city economies and connected communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 rounded-2xl overflow-hidden group-hover:border-gray-700 transition-all duration-500 group-hover:scale-[1.02]">
                
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Social links - positioned over image */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-700/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-300 font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">
            Want to join our mission to transform city economies?
          </p>
          <a
            href="mailto:careers@citiesapp.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <Mail className="w-4 h-4" />
            Contact Careers
          </a>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;