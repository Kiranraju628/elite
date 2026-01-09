import { Wifi, Search, Shield, Coffee, MapPin, Phone, Mail, Star, Bed, Droplets, Zap, Camera, Utensils, Sparkles } from 'lucide-react';

export const content = {
  hero: {
    title: "Team Elite Women’s PG",
    subtitle: "Where Safety Meets Comfort and Empowering Home for Women",
    ctaText: "Book a Visit",
    ctaLink: "#contact",
    imageUrl: "https://images.unsplash.com/photo-1522771753037-6333d79f2203?q=80&w=2072&auto=format&fit=crop"
  },

  about: {
    title: "Welcome to Team Elite Women’s PG",
    description: "Team Elite Women’s PG is a thoughtfully designed paying guest accommodation exclusively for women. We provide a safe, clean, and supportive living environment that helps residents focus on their studies, careers, and personal growth. Our PG is ideal for students and working women who are looking for comfort, security, and a peaceful atmosphere that feels like home.",
    whyChoose: [
      "100% Women-Only Accommodation",
      "Secure & Friendly Environment",
      "Clean, Well-Maintained Rooms",
      "Peaceful Atmosphere for Study & Rest",
      "Supportive Management Team"
    ],

    whoCanStay: [
      "College & University Students",
      "Working Professionals",
      "Interns & Trainees"
    ]
  },

  amenities: {
    title: "Our Facilities",
    items: [
      { id: 1, title: "Fully Furnished Spacious Rooms", description: "Well-designed rooms for your comfort.", icon: Star },
      { id: 2, title: "Comfortable Beds & Storage", description: "Cozy bedding and ample storage space.", icon: Bed },
      { id: 3, title: "Clean Bathrooms", description: "Hygienic washrooms with regular maintenance.", icon: Droplets },
      { id: 4, title: "24/7 Water & Electricity", description: "Uninterrupted supply for your convenience.", icon: Zap },
      { id: 5, title: "High-Speed Wi-Fi", description: "Seamless connectivity for work, study, and leisure.", icon: Wifi },
      { id: 6, title: "CCTV Surveillance", description: "Round-the-clock security monitoring.", icon: Camera },
      { id: 7, title: "Nutritious Food", description: "Healthy home-style meals (if applicable).", icon: Utensils },
      { id: 8, title: "Housekeeping Services", description: "Regular cleaning to ensure a tidy environment.", icon: Sparkles },
      { id: 9, title: "Power Backup", description: "Never worry about power outages.", icon: Zap }
    ]
  },

  rooms: {
    title: "Our Rooms & Special Attractions",
    subtitle: "At Team Elite Women’s PG, we offer a range of thoughtfully designed rooms to suit different preferences and budgets.",
    options: [
      {
        id: 1,
        type: "Luxury Rooms",
        description: "Designed for those who prefer premium living.",
        price: "Contact for Price", // User didn't specify price, putting placeholder
        features: ["Spacious private rooms", "Elegant interiors with modern furnishings", "Enhanced comfort & privacy", "Ideal for professionals and long-term stays"],
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 2,
        type: "Deluxe Rooms",
        description: "A perfect balance of comfort and value.",
        price: "Contact for Price",
        features: ["Well-furnished rooms with ample space", "Comfortable bedding and storage", "Peaceful environment for work and rest", "Great choice for students and working women"],
        image: "https://images.unsplash.com/photo-1555854785-985c9e318f6d?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 3,
        type: "Sharing Rooms",
        description: "Comfortable living at a budget-friendly price.",
        price: "Contact for Price",
        features: ["Clean & well-ventilated shared rooms", "Same safety, hygiene & facilities as all other rooms", "Ideal for Students and Interns", "Affordable & Comfortable compared to other PGs"],
        image: "https://images.unsplash.com/photo-1628173491950-e79e58b14644?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },

  safety: {
    title: "Safety & Security",
    description: "Your safety is our top priority.",
    features: [
      "CCTV cameras in common areas",
      "Secure entry system",
      "Well-lit premises",
      "Strict visitor policies"
    ],
    bottomDescription: "We ensure a stress-free and secure living experience for all our residents."
  },

  whoCanStay: {
    title: "Who Can Stay with Us?",
    features: [
      "College & University Students",
      "Working Professionals",
      "Interns & Trainees"
    ],
    bottomDescription: "Whether you are new to the city or looking for a better place to stay, Team Elite Women’s PG welcomes you."
  },

  details: {
    address: "Nanakramguda, Hyderabad",
    bookingNumber: "+91 7207153217", // WhatsApp Booking Number
    contactNumbers: ["+91 9492039653", "+91 6309770712"], // Display Numbers
    email: "team.elitewpg@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.997528479815!2d78.3914!3d17.4483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzUzLjkiTiA3OMKwMjMnMjkuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin",
    locationAdvantage: [
      "Colleges & Universities",
      "Offices & Business Hubs",
      "Public Transport",
      "Grocery Stores & Essentials"
    ]
  }
};
