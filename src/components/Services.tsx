
import React, { useRef, useEffect } from 'react';
import { CarTaxiFront, Users, Building, MapPin, Heart, Clock } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Airport Transfers",
    description: "Seamless pickup and drop-off services to and from airports across Rajasthan with professional drivers.",
    icon: <CarTaxiFront className="h-10 w-10 text-terracotta-500" />,
    delay: "0"
  },
  {
    id: 2,
    title: "City Tours",
    description: "Expertly guided tours through Udaipur, Jaipur, and other beautiful cities of Rajasthan.",
    icon: <Building className="h-10 w-10 text-terracotta-500" />,
    delay: "100"
  },
  {
    id: 3,
    title: "Outstation Trips",
    description: "Comfortable and reliable travel for your long-distance journeys between different cities.",
    icon: <MapPin className="h-10 w-10 text-terracotta-500" />,
    delay: "200"
  },
  {
    id: 4,
    title: "Group Tours",
    description: "Spacious vehicles for group travel, perfect for families, friends, and corporate outings.",
    icon: <Users className="h-10 w-10 text-terracotta-500" />,
    delay: "300"
  },
  {
    id: 5,
    title: "Wedding Transport",
    description: "Elegant transportation solutions for weddings and special events with decorated vehicles.",
    icon: <Heart className="h-10 w-10 text-terracotta-500" />,
    delay: "400"
  },
  {
    id: 6,
    title: "24/7 Availability",
    description: "Round-the-clock service ensuring you can travel whenever needed with just a call.",
    icon: <Clock className="h-10 w-10 text-terracotta-500" />,
    delay: "500"
  }
];

const ServiceCard = ({ service, observerRef }: { service: typeof services[0], observerRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div
      ref={observerRef}
      className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 card-hover transition-all duration-300 opacity-0 translate-y-8"
      style={{ transitionDelay: `${parseInt(service.delay)}ms` }}
    >
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
      <p className="text-slate-600">{service.description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>(Array(services.length).fill(null));

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

    // Observe section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each card
    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" className="section bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-8" ref={el => (sectionRef.current = el)}>
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-terracotta-500/10 text-terracotta-500 text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Premium Transportation Services in Rajasthan</h2>
          <p className="text-slate-600 text-lg">
            Discover our wide range of professional taxi and cab services designed to make your journey through Rajasthan comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              observerRef={el => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
