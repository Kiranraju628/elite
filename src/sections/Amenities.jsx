import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Amenities = () => {
    const { amenities } = content;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="amenities" className="section">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-pink-600 font-semibold tracking-wider text-sm uppercase">Why Choose Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-800">{amenities.title}</h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {amenities.items.map((amenity) => (
                        <motion.div
                            key={amenity.id}
                            variants={item}
                            className="glass p-8 rounded-2xl shadow-sm hover:shadow-lg transition-transform border border-white/40 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                                <amenity.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{amenity.title}</h3>
                            <p className="text-slate-500 leading-relaxed">
                                {amenity.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Amenities;
