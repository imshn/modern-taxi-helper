import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center grayscale" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80")',
            height: '120%',
            top: '-10%',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container relative z-10 mt-16 md:mt-0">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-white/20 text-white text-sm font-medium">
            Premium Cab Service in Rajasthan
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Experience Rajasthan in <span className="text-white">Comfort & Style</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Discover the royal heritage of Rajasthan with our premium taxi service. From Udaipur's lakes to Jaipur's palaces, travel with comfort and elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-black transition-colors duration-300 rounded-md px-8 py-6">
              Book a Ride
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent hover:bg-white/10 text-white border-white rounded-md px-8 py-6">
              Our Services
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-3">
            {['Udaipur', 'Jaipur', 'Jodhpur', 'Pushkar'].map((city) => (
              <div key={city} className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
                <MapPin className="h-4 w-4 mr-1 text-white" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L80,224C160,224,320,224,480,213.3C640,203,800,181,960,181.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
