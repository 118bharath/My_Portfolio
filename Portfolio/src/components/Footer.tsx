import { Github, Linkedin, Mail,Twitter } from 'lucide-react';

const Footer = () => {

  const emailAddress='bharathvemula118@gmail.com';

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 gap-4">
          <div className="text-gray-400 text-sm sm:text-base order-3 md:order-1">
            © Sai Bharath Vemula 2025.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 order-1 md:order-2">
            <a 
              href="https://github.com/118bharath" 
              className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Github</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/saibharath03/" 
              className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Linkedin</span>
            </a>
            
            <a 
              href={`mailto:${emailAddress}`}
              className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Email</span>
            </a>
            
            <a 
              href="https://x.com/Falcon_3103" 
              className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>X(Twitter)</span>
            </a>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base order-2 md:order-3"
          >
            <span>Back To Top</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
        
        {/* <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-500 italic text-sm sm:text-base px-4">
            "Like I always say, can't find a door? Make your own." – Edward Elric, Fullmetal Alchemist
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
