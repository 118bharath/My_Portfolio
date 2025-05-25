const TechStack = () => {
  const technologies = [
    { name: "Next.js", category: "framework" },
    { name: "Angular.js", category: "framework" },
    { name: "React.js", category: "framework" },
    { name: "AI/ML", category: "tech" },
    { name: "Flutter", category: "mobile" },
    { name: "Tailwind CSS", category: "styling" },
    { name: "TypeScript", category: "language" },
    { name: ".NET", category: "backend" },
    { name: "Python", category: "language" },
    { name: "Stable Diffusion", category: "ai" },
    { name: "Blockchain", category: "tech" },
    { name: "Solidity", category: "blockchain" },
    { name: "Tauri", category: "desktop" },
    { name: "Peer to Peer", category: "networking" },
    { name: "Serverless", category: "architecture" },
    { name: "Ipfs", category: "storage" },
    { name: "etherium", category: "blockchain" },
    { name: "C", category: "language" },
    { name: "Java", category: "language" },
    { name: "C#", category: "language" },
    { name: "MongoDB", category: "database" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-12 md:mb-16 text-white text-left">Tech Stacks</h2>
        
        <div className="flex flex-wrap justify-start gap-2 sm:gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-white rounded-full text-xs sm:text-sm hover:bg-gray-700 transition-colors cursor-default"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
