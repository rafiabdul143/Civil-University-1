import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: 'Welcome to Civil University',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      text: 'Bridging the gap between freshers and market demand',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      text: 'Learn from industry experts',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      text: 'Shape your future in civil engineering',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToExplore = () => {
    const element = document.getElementById('explore');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative h-full flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-5xl  text-white md:text-7xl font-bold text-center max-w-5xl leading-tight animate-fadeIn">
              {slide.text}
            </h1>
          </div>
        </div>
      ))}

      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToExplore}
          className="px-8 py-3 bg-white text-black font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white"
        >
          Explore Now
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
