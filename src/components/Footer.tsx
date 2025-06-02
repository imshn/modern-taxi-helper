
import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              <span className="text-terracotta-500">A to Z</span> Udaipur
            </h3>
            <p className="text-slate-300 mb-6">
              Your trusted travel companion for exploring the royal state of Rajasthan with comfort, safety, and style.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-terracotta-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-terracotta-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-terracotta-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Services</a>
              </li>
              <li>
                <a href="#destinations" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Destinations</a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Airport Transfers</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">City Tours</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Outstation Trips</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Group Tours</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-terracotta-400 transition-colors duration-200">Wedding Transport</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-terracotta-500 mr-3 mt-0.5" />
                <span className="text-slate-300">+91 9602283839</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-terracotta-500 mr-3 mt-0.5" />
                <span className="text-slate-300">rafikudr@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-terracotta-500 mr-3 mt-0.5" />
                <span className="text-slate-300">Gandhi nagar, A block, university road, Udaipur, Rajasthan 313001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 w-full my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AtoZ Udaipur. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center">
            Designed with <Heart className="h-4 w-4 mx-1 text-terracotta-500" /> for the best travel experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
