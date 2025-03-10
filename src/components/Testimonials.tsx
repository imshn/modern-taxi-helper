
import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi, India",
    text: "Our trip from Udaipur to Jaipur was flawless! The driver was professional, the car was clean and comfortable, and we felt safe throughout the journey. Highly recommend AtoZ Udaipur for anyone visiting Rajasthan.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "John Peterson",
    location: "London, UK",
    text: "As tourists visiting India for the first time, we were nervous about transportation. AtoZ Udaipur exceeded our expectations with their excellent service. Our driver knew all the best spots and was incredibly helpful.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Rajat Mehta",
    location: "Mumbai, India",
    text: "Used their service for a family trip across Rajasthan. The vehicles were spacious, air-conditioned, and the drivers were courteous. They accommodated all our requests and made our journey memorable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Sarah Williams",
    location: "Sydney, Australia",
    text: "I booked AtoZ Udaipur for a solo trip through Rajasthan. As a woman traveling alone, safety was my priority. They provided exceptional service, and I felt secure throughout my journey. Will definitely use them again!",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Akash Patel",
    location: "Ahmedabad, India",
    text: "Our corporate team used AtoZ Udaipur for an offsite in Rajasthan. Their fleet was impressive, drivers were punctual, and the booking process was seamless. Perfect for business travel needs.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="mb-6 text-terracotta-500">
        <Quote className="h-10 w-10 opacity-20" />
      </div>
      
      <p className="text-slate-700 italic mb-8 flex-grow">{testimonial.text}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
            <p className="text-sm text-slate-500">{testimonial.location}</p>
          </div>
        </div>
        
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index} 
              className={`h-4 w-4 ${
                index < testimonial.rating 
                  ? "text-yellow-400 fill-yellow-400" 
                  : "text-slate-300"
              }`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 3;
  const totalSlides = Math.ceil(testimonials.length / maxVisible);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

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

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  // Calculate visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const start = currentIndex * maxVisible;
    return testimonials.slice(start, start + maxVisible);
  };

  return (
    <section id="testimonials" className="section py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-8" ref={sectionRef}>
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-terracotta-500/10 text-terracotta-500 text-sm font-medium">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 text-lg">
            Hear from our satisfied customers who have experienced our premium taxi services across Rajasthan.
          </p>
        </div>

        <div className="relative">
          {/* Mobile Slider (visible on smaller screens) */}
          <div className="md:hidden relative overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-terracotta-500" : "bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Desktop Grid (visible on medium screens and larger) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Navigation Buttons (visible on medium screens and larger) */}
          {totalSlides > 1 && (
            <div className="hidden md:flex justify-center mt-12 space-x-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-300"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5 text-slate-700" />
              </button>
              <div className="flex items-center space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-terracotta-500" : "bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-300"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5 text-slate-700" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
