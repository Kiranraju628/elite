import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { CheckCircle } from 'lucide-react';

const About = () => {
    const { about } = content;

    return (
        <section id="about" className="section relative">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1556912172-45b7abe8d7e1?q=80&w=2070&auto=format&fit=crop"
                            alt="Comfortable living space"
                            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                        />
                        <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl shadow-lg border border-slate-100 hidden md:block">
                            <p className="text-4xl font-bold text-purple-600 mb-1">5+</p>
                            <p className="text-slate-500 text-sm">Years of <br />Excellence</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase">About Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-slate-800">{about.title}</h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        {about.description}
                    </p>

                    <ul className="space-y-4">
                        {about.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                                <CheckCircle className="text-green-500 w-5 h-5" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
