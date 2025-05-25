import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {label:'about', href:'#about'},
    {label:'projects',href:'#porjects'},
    { label: 'github', href: '#projects' },
    { label: 'linkedin', href: '#contact' },
    
  ];

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
              className="text-gray-300 hover:text-white transition-colors text-base"
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
          <div className="text-gray-300 text-base">bharathvemula118@gmail.com</div>
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
                className="text-gray-300 hover:text-white transition-colors text-lg"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-gray-700">
              <div className="text-gray-300 text-sm">bharathvemula118@gmail.com</div>
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
            <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              Resume
            </button>
            <button className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
