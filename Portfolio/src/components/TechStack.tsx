const TechStack = () => {
  const technologies = [
    { name: "C", category: "language" },
    { name: "Python", category: "language" },
    { name: "Javascript", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "React.js", category: "framework" },
    { name: "Next.js", category: "framework" },
    { name: "Node.js", category: "Runtime Environment" },
    { name: "Express.js", category: "framework" },  
    { name: "DBMS", category: "Database" },
    { name: "SQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "styling" },
    { name: "Bootstrap", category: "Styling" },
    { name: "AWS", category: "cloud" },
    { name: "Microsoft Azure", category: "cloud" },
    { name: "Git", category: "Git" },
    { name: "Github", category: "Git" },
    
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
