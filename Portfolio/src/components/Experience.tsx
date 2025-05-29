const Experience = () => {
  return (
    <section id='about' className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-12 md:mb-16 text-white">About me</h2>
        
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16">
          {/* Description */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
              I bring ideas to life through thoughtful design and precise execution -- Crafting clean and impactful solutions
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                I translate complex ideas into intuitive and effective experiences. My passion lies in creating work that is both functional and aesthetically pleasing, ensuring every detail serves a purpose. I thrive on bringing innovative concepts to life, always with an eye for user-centric design and scalable development. Let's build something remarkable together.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                Engineering elegance through thoughtful design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
