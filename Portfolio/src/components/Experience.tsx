const Experience = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-12 md:mb-16 text-white">About me</h2>
        
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16">
          {/* Description */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
              I turn ideas into performant, scalable web experiences—with an eye for design and a focus on detail
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                With hands-on experience at Equifax, Nissan Digital, and UST Global, I've also built products through hackathons and freelance collaborations.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                Building at the edge of design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
