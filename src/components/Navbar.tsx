import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

const handleNavigation = (item: any) => {
  setIsMenuOpen(false); // ✅ Close menu on click

  // Check if path contains a hash (like /#contact)
  const hasHash = item.path.includes('#');
  
  if (hasHash) {
    const [basePath, sectionId] = item.path.split('#');
    
    if (location.pathname !== basePath && basePath !== '') {
      // Navigate to base path first (like '/')
      navigate(basePath);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // Already on the page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  } else if (item.path === '/') {
    // Handle home page with section IDs
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(item.id), 300);
    } else {
      scrollToSection(item.id);
    }
  } else {
    navigate(item.path); // ✅ Works for normal routes like /construpedia
  }
};

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
      { id: 'explor', label: 'Explore', path: '/explor' },

 
    { id: 'construpedia', label: 'Construpedia', path: '/construpedia' },
         {id: 'aboutus', label: 'About Us', path: '/aboutus' },
     { id: 'contact', label: 'Contact Us', path: '/#contact' }, 

  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black/10 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-black">
              Buniyaadec
            </div>
            <div className="border-l-2 border-blue-600 pl-4">
              <span className="text-sm font-bold text-gray-900 tracking-tight">
                We Make Strong Foundations...
              </span>
            </div>
          </div>

          {/* Menu Button */}
          <div className="relative">
            <button className="text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-12 right-0 bg-white border border-black/10 rounded-lg shadow-lg z-50 min-w-48">
                <div className="px-4 py-3 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                        activeSection === item.id
                          ? 'text-black bg-black/10'
                          : 'text-black/60 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
