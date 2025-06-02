import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Deema Habboub",
    location: "Jordan",
    text: "I am very fortunate to have met Rafiq in Udaipur. I came for a wedding and needed help navigating around the city. He was a super great guide around the city and always made himself available to answer and pick me up. He also helped me pick up my Lehenga rental when I wasn’t able to leave the wedding events, and took me around to run errands. He also spoke Arabic and was very considerate. Best of all he didn’t try to push me to stores I didn’t want to go to, which is very common with the drivers here. Thank you so much!",
    avatar: "D",
    rating: 5
  },
  {
    id: 2,
    name: "Priyank Gupta",
    location: "London, UK",
    text: "19 Oct 2024- Best rental car in udaipur. We booked for nathdwara and ekling temple, also he covered places on the way. Very patient and informative driver. We really enjoyed. Rajik ji drived us full day trip he is really good, no rash driving, no cheating. Thanks for taking us and we had great experience on family vacation.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Karan Jain",
    location: "Mumbai, India",
    text: "Mr. Rafiq is very reliable and responsive. He drove us around Udaipur for sightseeing as well as dropped us to the airport. The car is clean and spacious. Would highly recommend his services for moving around Udaipur.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Vibhav mittal",
    location: "Sydney, Australia",
    text: "Close your eyes and choose this agent to travel across udaipur and near by places.They take minimal charges compare to other vendors. Additionally they give enough time for you to enjoy the travel and Hassel free.",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "ANKUR GARODIA",
    location: "Ahmedabad, India",
    text: "It was a nice and comfortable experience with Mr. Rafique on our journey to mount abu. His cordial and friendly behaviour was impressive.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="mb-6 text-black">
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
    <section id="testimonials" className="section py-12 md:py-16">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 translate-y-8" ref={sectionRef}>
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-black/10 text-black text-sm font-medium">
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
                    index === currentIndex ? "bg-black" : "bg-slate-300"
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
                      index === currentIndex ? "bg-black" : "bg-slate-300"
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
