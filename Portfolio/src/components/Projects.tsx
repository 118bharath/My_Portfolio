const Projects = () => {
  const projects = [
    {
      title: "EmergencyAI",
      subtitle: "AI-Integrated Ambulance System",
      description: "This initiative focuses on upgrading emergency medical services (EMS) by adding Artificial Intelligence (AI) and smart human interaction tools directly into ambulances. The main goal is to improve how quickly and accurately medical teams can make decisions, especially in critical situations. By providing real-time data and better communication with hospitals, these intelligent ambulances aim to significantly improve patient outcomes during emergencies.",
      event: "College Project",
      year: "2024",
      image: "/EmergencyAI.png"
    },
    {
      title: "BlockChain Validator",
      subtitle: "Digital Certificates Validation",
      description: "This project tackles the widespread issue of certificate forgery by proposing an innovative solution using blockchain technology. Traditionally, verifying certificates was slow, manual, and prone to fraud. This new system creates a robust and tamper-resistant platform where every certificate issuance is recorded securely with a timestamp. Thanks to blockchain's decentralized and immutable nature, certificates can be verified efficiently and transparently without relying on a single authority, significantly enhancing trust and reliability.",
      event: "College Project",
      year: "2023",
      image: "/Blockchain.png"
    },
    {
      title: "BlogSphere",
      subtitle: "Full-stack Blog Publishing Platform",
      description: "This project tackles the widespread issue of certificate forgery by proposing an innovative solution using blockchain technology. Traditionally, verifying certificates was slow, manual, and prone to fraud. This new system creates a robust and tamper-resistant platform where every certificate issuance is recorded securely with a timestamp. Thanks to blockchain's decentralized and immutable nature, certificates can be verified efficiently and transparently without relying on a single authority, significantly enhancing trust and reliability.",
      event: "Personal Project",
      year: "2025",
      image: "/BlogSphere.png"
    },
    {
      title: "Travel-Buddy",
      subtitle: "Side Project",
      description: "This project, Travel Buddy, is a comprehensive travel planning and social platform that significantly enhanced my full-stack development skills. I built it with a React/Redux frontend and a Node.js/Express backend, incorporating RESTful APIs from Google Maps and OpenWeatherAPI. The application features location-based recommendations using MongoDB with geo-spatial indexing, secure OAuth 2.0 authentication, responsive design with Material-UI, and real-time functionalities powered by Socket.io. This experience solidified my understanding of modern web architecture and API integration.",
      event: "Personal Project",
      year: "2025",
      image: "/travel-Buddy.png"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-12 md:mb-16 text-white">My Projects</h2>
        
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-base sm:text-lg">{project.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
                <div className="relative overflow-hidden bg-gray-900 rounded-lg aspect-video h-full w-full min-h-[220px] order-2 lg:order-1">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <div className="text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">EVENT</div>
                      <div className="text-white">{project.event}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">YEAR</div>
                      <div className="text-white">{project.year}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-500 uppercase tracking-wider mb-1 sm:mb-2 text-xs sm:text-sm">DESCRIPTION</div>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.description}</p>
                  </div>
                  
                  <button className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    <span>View Project</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;