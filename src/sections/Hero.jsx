import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import logo from '../assets/team-elite-logo.jpg';

const Hero = () => {
    const { hero } = content;

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={hero.imageUrl}
                    alt="Team Elite Women's PG"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30 sm:bg-white/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>

            <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <img src={logo} alt="Team Elite Logo" className="h-24 md:h-32 mb-8 rounded-xl shadow-lg mix-blend-multiply" />
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
                        Premium Living for Women
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800 leading-tight">
                        {hero.title}
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {hero.subtitle}
                    </p>
                    <div className="flex gap-4">
                        <a href={hero.ctaLink} className="btn-primary text-lg px-8 py-3 rounded-full inline-block">
                            {hero.ctaText}
                        </a>
                        <a href="#rooms" className="px-8 py-3 rounded-full border border-slate-300 font-medium hover:bg-white hover:shadow-md transition-all inline-block glass">
                            View Details
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
