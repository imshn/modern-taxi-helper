
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Show loading state
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="section py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-8" ref={sectionRef}>
          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-terracotta-500/10 text-terracotta-500 text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <p className="text-slate-600 text-lg">
            Have questions or ready to book your journey? Reach out to us, and we'll respond promptly to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-terracotta-500/10 mr-4">
                  <Phone className="h-6 w-6 text-terracotta-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Call Us</h3>
                  <p className="text-slate-600">We're available 24/7 to assist you</p>
                  <a href="tel:+919876543210" className="text-lg font-medium text-terracotta-500 mt-2 block hover:text-terracotta-600 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-terracotta-500/10 mr-4">
                  <Mail className="h-6 w-6 text-terracotta-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Email Us</h3>
                  <p className="text-slate-600">Send us an email anytime</p>
                  <a href="mailto:info@atozudaipur.com" className="text-lg font-medium text-terracotta-500 mt-2 block hover:text-terracotta-600 transition-colors">
                    info@atozudaipur.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-terracotta-500/10 mr-4">
                  <MapPin className="h-6 w-6 text-terracotta-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Our Location</h3>
                  <p className="text-slate-600">Visit our office in Udaipur</p>
                  <address className="text-lg font-medium text-terracotta-500 mt-2 block not-italic">
                    123 Lake Palace Road, Udaipur, Rajasthan 313001
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 opacity-0 translate-y-8"
            ref={formRef}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta-500/50 focus:border-terracotta-500 transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta-500/50 focus:border-terracotta-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta-500/50 focus:border-terracotta-500 transition-colors"
                  placeholder="Your contact number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta-500/50 focus:border-terracotta-500 transition-colors resize-none"
                  placeholder="Tell us about your travel needs"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-terracotta-500 hover:bg-terracotta-600 transition-colors duration-300 py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
