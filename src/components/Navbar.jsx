import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import cities_logo from '../assets/images/cities_logo.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const resourcesDropdownRef = useRef(null);
  const resourcesButtonRef = useRef(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at top of page
      if (currentScrollY === 0) {
        setIsAtTop(true);
        setIsNavbarVisible(true);
      } else {
        setIsAtTop(false);
        
        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsNavbarVisible(false);
        } else {
          // Scrolling up
          setIsNavbarVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle outside clicks for resources dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both dropdown and button
      if (
        isResourcesOpen &&
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target) &&
        resourcesButtonRef.current &&
        !resourcesButtonRef.current.contains(event.target)
      ) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isResourcesOpen]);





  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleMobileClickOutside = (event) => {
      const mobileMenu = document.querySelector('.mobile-menu-container');
      const mobileButton = document.querySelector('.mobile-menu-button');
      
      if (
        isMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        mobileButton &&
        !mobileButton.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleMobileClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleMobileClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav 
  className={`fixed top-0 left-0 right-0 z-50 py-2 transition-all duration-300 ${
    isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
  } ${
    isAtTop 
  ? 'bg-transparent'
  : 'bg-blue-900'
  }`}
>
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                 <div className='w-10 h-10 rounded-full overflow-hidden'>
               <img
                      src={cities_logo}
                      alt="Cities Logo"
                      className="w-full h-full object-cover object-center"
                    />
              </div>
                <span className="text-xl font-bold text-white">Cities App</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className={`transition-colors duration-200 line-clamp-1 font-semibold ${
                isAtTop ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'
              }`}>
                ABOUT
              </a>
              <a href="#problems" className={`transition-colors duration-200 line-clamp-1 font-semibold ${
                isAtTop ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'
              }`}>
                THE PROBLEMS
              </a>
              <a href="#opportunity" className={`transition-colors duration-200 line-clamp-1 font-semibold ${
                isAtTop ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'
              }`}>
                THE OPPORTUNITY
              </a>
              <a href="#solutions" className={`transition-colors duration-200 line-clamp-1 font-semibold ${
                isAtTop ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'
              }`}>
                OUR SOLUTIONS
              </a>
              <a href="#team" className={`transition-colors duration-200 line-clamp-1 font-semibold ${
                isAtTop ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'
              }`}>
                TEAM
              </a>
              
              {/* Resources Dropdown */}
              <div className="relative" ref={resourcesDropdownRef}>
                <button
                  ref={resourcesButtonRef}
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className={`transition-colors duration-200 flex items-center space-x-1 font-semibold ${
                    isAtTop ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>MORE</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-blue-900 rounded-lg shadow-xl border border-gray-700 z-50">
                    <div className="py-2">
                      <a 
                        href="#market-size" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        MARKET SIZE
                      </a>
                      <a 
                        href="#model" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        BUSINESS MODEL
                      </a>
                      <a 
                        href="#traction" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        TRACTION
                      </a>
                      <a 
                        href="#landscape" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        COMPETITIVE LANDSCAPE
                      </a>
                      <a 
                        href="#why" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        WHY NOW?
                      </a>
                      <a 
                        href="#financial-projections" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        5-YEAR FINANCIAL PROJECTIONS
                      </a>
                      <a 
                        href="#terms" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        TERMS
                      </a>
                      <a 
                        href="#vision" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        VISION
                      </a>
                      <a 
                        href="#closing" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        CLOSING
                      </a>
                      <a 
                        href="#faq" 
                        onClick={() => setIsResourcesOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
                      >
                        FAQ
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mobile-menu-button">
             <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors ${
                  isAtTop ? 'text-gray-300 hover:text-white' : 'text-white hover:text-white/80'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu-container md:hidden absolute top-full left-0 w-full bg-blue-900 border-b border-gray-700">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              ABOUT
            </a>
            <a 
              href="#problems" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              THE PROBLEMS
            </a>
            <a 
              href="#opportunity" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              THE OPPORTUNITY
            </a>
            <a 
              href="#solutions" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              OUR SOLUTIONS
            </a>
            <a 
              href="#team" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              TEAM
            </a>
            <a 
              href="#market-size" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              MARKET SIZE
            </a>
            <a 
              href="#model" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              BUSINESS MODEL
            </a>
            <a 
              href="#traction" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              TRACTION
            </a>
            <a 
              href="#landscape" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              COMPETITIVE LANDSCAPE
            </a>
            <a 
              href="#why" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              WHY NOW?
            </a>
            <a 
              href="#financial-projections" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              5-YEAR FINANCIAL PROJECTIONS
            </a>
            <a 
              href="#terms" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
             TERMS
            </a>
            <a 
              href="#vision" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
             VISION
            </a>
            <a 
              href="#closing" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
             CLOSING
            </a>
            <a 
              href="#faq"
              onClick={() => setIsMenuOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
             FAQ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;