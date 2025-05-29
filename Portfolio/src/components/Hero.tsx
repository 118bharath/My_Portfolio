import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResumeClick=()=>{
    window.open('/Vemula_Sai_Bharath_Resume.pdf','_blank');
  }

  const handleContactClick=()=>{
    const contactSection =document.getElementById('contact');
    if (contactSection){
      contactSection.scrollIntoView({
        behavior:'smooth',
        block:'start'
      });
    }
  };

  const navItems = [
    {label:'about', href:'#about'},
    {label:'projects',href:'#projects'},
    { label: 'github', href: '#projects' },
    { label: 'linkedin', href: '#contact' },
    
  ];

  const handleScroll = (e: any, targetId: string) => {
    // Check if the link is an internal scroll link (starts with '#')
    if (targetId.startsWith('#')) {
      e.preventDefault(); // Prevent the default instant jump
      const section = document.getElementById(targetId.substring(1)); // Get the section element by its ID
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth', // Smooth scroll animation
          block: 'start',     // Align the top of the section with the top of the viewport
        });
      }
      // If mobile menu is open and it's an internal scroll, close it
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
    // For external links, let the default behavior happen (e.g., open in new tab)
  };

  const emailAddress='bharathvemula118@gmail.com';

  return (
    <section className="min-h-screen bg-black text-white flex flex-col relative">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 md:p-8 relative z-50">
        <div className="text-xl sm:text-2xl font-light">Portfolio.</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 ml-[118px]">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              onClick={(e) => handleScroll(e, item.href)}
              className="text-gray-300 hover:text-white transition-colors text-base"
              target={item.href.startsWith('#') ? '_self' : '_blank'} 
              rel={item.href.startsWith('#') ? '' : 'noopener noreferrer'}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden z-50 relative"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
        
        <div className="hidden md:block text-right">
          <a href={`mailto:${emailAddress}`}
          className="text-gray-300 text-base hover:text-white transition-colors"
          >
            {emailAddress}
          </a>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMobileMenu}
      />
      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)} 
                className="text-gray-300 hover:text-white transition-colors text-lg"
                // onClick={toggleMobileMenu}
                target={item.href.startsWith('#') ? '_self' : '_blank'} // Open external links in new tab
                rel={item.href.startsWith('#') ? '' : 'noopener noreferrer'} // Security for external links
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-gray-700">
              <a 
                href={`mailto:${emailAddress}`}
                className="text-gray-300 text-sm
                onClick={toggleMobileMenu}"
              >
                {emailAddress}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl w-full mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light leading-tight mb-6 sm:mb-8">
            I'm Sai Bharath Vemula,<br />
            <span className="block">a Software Engineer crafting</span>
            <span className="block">Digital Experiences.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12  justify-center">
            <button
            onClick={handleResumeClick}
             className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              Resume
            </button>
            <button
            onClick={handleContactClick}
             className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
