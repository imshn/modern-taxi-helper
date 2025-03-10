
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Udaipur",
    description: "The City of Lakes featuring stunning palaces and romantic settings.",
    image: "https://images.unsplash.com/photo-1617516202907-ff75846e6667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    delay: "0"
  },
  {
    id: 2,
    name: "Jaipur",
    description: "The Pink City known for its majestic forts and vibrant culture.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    delay: "100"
  },
  {
    id: 3,
    name: "Jodhpur",
    description: "The Blue City with the impressive Mehrangarh Fort and blue-painted houses.",
    image: "https://images.unsplash.com/photo-1591089101324-2280d9360df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    delay: "200"
  },
  {
    id: 4,
    name: "Pushkar",
    description: "A sacred town with the beautiful Pushkar Lake and the only Brahma Temple.",
    image: "https://images.unsplash.com/photo-1623065691913-e9a650810efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    delay: "300"
  },
  {
    id: 5,
    name: "Mount Abu",
    description: "Rajasthan's only hill station offering cool climate and scenic views.",
    image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    delay: "400"
  },
  {
    id: 6,
    name: "Ranthambore",
    description: "Famous national park known for tiger sightings and ancient ruins.",
    image: "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    delay: "500"
  }
];

const DestinationCard = ({ destination, observerRef }: { destination: typeof destinations[0], observerRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div 
      ref={observerRef}
      className="group relative overflow-hidden rounded-xl opacity-0 translate-y-8 transition-all duration-500"
      style={{ transitionDelay: `${parseInt(destination.delay)}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{destination.name}</h3>
        <p className="text-slate-200 mb-4 text-sm">{destination.description}</p>
        <div className="flex items-center text-terracotta-400 text-sm font-medium group-hover:text-terracotta-300 transition-colors duration-300">
          <span>Explore Destination</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>(Array(destinations.length).fill(null));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="destinations" className="section py-16 md:py-24 bg-sand-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-8" ref={sectionRef}>
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-terracotta-500/10 text-terracotta-500 text-sm font-medium">
            Popular Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Explore Rajasthan's Treasures</h2>
          <p className="text-slate-600 text-lg">
            Discover the enchanting cities and destinations of Rajasthan with our reliable taxi services taking you to these magnificent places.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination}
              observerRef={el => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
