
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { MapPin, Star, Users, CarTaxiFront, Building2, Heart, Landmark, CameraIcon, Mountain } from 'lucide-react';

const serviceCategories = [
  {
    title: "Heritage Tours",
    description: "Explore Rajasthan's magnificent palaces, forts, and historical landmarks with our expert guides.",
    icon: <Landmark className="h-8 w-8" />,
    places: ["Udaipur City Palace", "Jaipur's Amber Fort", "Mehrangarh Fort, Jodhpur"]
  },
  {
    title: "Cultural Experiences",
    description: "Immerse yourself in Rajasthan's rich traditions, art, and local lifestyle.",
    icon: <Building2 className="h-8 w-8" />,
    places: ["Pushkar Camel Fair", "Rajasthani Folk Dance", "Local Craft Workshops"]
  },
  {
    title: "Desert Adventures",
    description: "Experience the magic of Thar Desert with our specialized desert safari services.",
    icon: <Mountain className="h-8 w-8" />,
    places: ["Sam Sand Dunes", "Jaisalmer Desert Camp", "Sunset Camel Safari"]
  },
  {
    title: "Photography Tours",
    description: "Capture the vibrant colors and stunning architecture of Rajasthan.",
    icon: <CameraIcon className="h-8 w-8" />,
    places: ["Lake Pichola", "Hawa Mahal", "Rural Villages"]
  },
  {
    title: "Wedding Transport",
    description: "Luxury vehicles for wedding ceremonies and special occasions.",
    icon: <Heart className="h-8 w-8" />,
    places: ["Destination Weddings", "Pre-wedding Shoots", "Wedding Guest Transport"]
  },
  {
    title: "Group Tours",
    description: "Customized tours for families, friends, and corporate groups.",
    icon: <Users className="h-8 w-8" />,
    places: ["Multi-city Tours", "Corporate Retreats", "Family Packages"]
  }
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Discover Rajasthan's rich heritage and culture with our comprehensive tour and transport services
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6 text-black">{category.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-black">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-2">
                  {category.places.map((place, placeIndex) => (
                    <div key={placeIndex} className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{place}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;
