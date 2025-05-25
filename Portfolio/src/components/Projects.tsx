
const Projects = () => {
  const projects = [
    {
      title: "DASH",
      subtitle: "Desktop App",
      description: "DASH - Distributed Adaptive Serverless Hosting offers a peer to peer, cost-effective, and efficient alternative for hosting serverless functions. It delivers a streamlined solution, designed with developers in mind providing simplicity and effectiveness without compromising performance.",
      event: "College Project",
      year: "2024",
      image: "/lovable-uploads/f0be4cec-fd10-4961-8d67-d4c6da935ff8.png"
    },
    {
      title: "Flash Drive Gaming Platform",
      subtitle: "Side Project",
      description: "A Next.js web platform featuring an AI image generator with custom-trained Stable Diffusion model and a few other arcade games. Built with Firebase and EpicRealism image model, it's just a DBMS course project that evolved into a playground for implementing advanced web technologies.",
      event: "Side Project",
      year: "2023",
      image: "/lovable-uploads/68d6b649-fa2f-4344-a86e-45696e78bf2c.png"
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
                <div className="relative overflow-hidden bg-gray-900 rounded-lg aspect-video order-2 lg:order-1">
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