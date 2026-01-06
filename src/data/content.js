import { Wifi, Search, Shield, Coffee, MapPin, Phone, Mail, Star } from 'lucide-react';

export const content = {
  activeWorkspaceString: "Women's PG Hyderabad", // Just a helper string
  
  hero: {
    title: "Experience Comfort & Safety Like Never Before",
    subtitle: "Premium Women's PG in the heart of Hyderabad. A home away from home with top-notch amenities.",
    ctaText: "Book a Visit",
    ctaLink: "#contact",
    // Placeholder image
    imageUrl: "https://images.unsplash.com/photo-1522771753037-6333d79f2203?q=80&w=2072&auto=format&fit=crop" 
  },
  
  about: {
    title: "Who We Are",
    description: "Located in a prime area of Hyderabad, we offer a safe, secure, and luxurious living environment exclusively for women. Whether you are a student or a working professional, our PG is designed to provide you with the utmost comfort and peace of mind.",
    features: [
      "24/7 Security & CCTV",
      "Delicious Home-style Food",
      "Daily Housekeeping",
      "High-speed WiFi"
    ]
  },

  amenities: {
    title: "Premium Amenities",
    items: [
      { id: 1, title: "High-Speed WiFi", description: "Seamless connectivity for work and entertainment.", icon: Wifi },
      { id: 2, title: "24/7 Security", description: "Biometric access and round-the-clock CCTV surveillance.", icon: Shield },
      { id: 3, title: "Delicious Food", description: "Nutritious and tasty breakfast, lunch, and dinner.", icon: Coffee },
      { id: 4, title: "Daily Housekeeping", description: "Clean and hygienic rooms maintained daily.", icon: Star },
    ]
  },

  rooms: {
    title: "Our Rooms",
    subtitle: "Choose the perfect space for you",
    options: [
      {
        id: 1,
        type: "Single Occupancy",
        price: "₹18,000 / month",
        features: ["Private Room", "Attached Washroom", "AC", "Study Table"],
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 2,
        type: "Double Sharing",
        price: "₹12,000 / month",
        features: ["Spacious Room", "Attached Washroom", "AC", "Individual Wardrobes"],
        image: "https://images.unsplash.com/photo-1555854785-985c9e318f6d?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 3,
        type: "Triple Sharing",
        price: "₹9,000 / month",
        features: ["Budget Friendly", "Attached Washroom", "AC", "Ventilated"],
        image: "https://images.unsplash.com/photo-1628173491950-e79e58b14644?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },

  details: {
      address: "Plot No. 123, Jubilee Hills, Hyderabad, Telangana, 500033",
      phone: "+91 98765 43210",
      email: "hello@womenspg.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.997528479815!2d78.3914!3d17.4483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzUzLjkiTiA3OMKwMjMnMjkuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
  }
};
