import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { CheckCircle } from 'lucide-react';

const About = () => {
    const { about, safety, whoCanStay } = content;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // Slower stagger for main sections
        }
    };

    const textStagger = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 } // Stagger for text elements
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="section relative py-12"> {/* Reduced vertical padding further */}
            <div className="container grid lg:grid-cols-2 gap-8 items-center"> {/* Reduced gap */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInRight}
                >
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1556912172-45b7abe8d7e1?q=80&w=2070&auto=format&fit=crop"
                            alt="Comfortable living space"
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                        /> {/* Increased height */}
                        <div className="absolute -bottom-8 -right-8 glass p-8 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-float">
                            <p className="text-5xl font-bold text-purple-600 mb-2">100%</p>
                            <p className="text-slate-500 font-medium">Safe & <br />Secure</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={textStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 font-semibold tracking-wider text-sm uppercase mb-4">
                        Why Choose Team Elite Women’s PG?
                    </motion.span>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-slate-800 leading-tight">
                        {about.title}
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-10 leading-loose">
                        {about.description}
                    </motion.p>

                    <motion.ul
                        className="space-y-6"
                        variants={container}
                    >
                        {about.whyChoose.map((feature, index) => (
                            <motion.li key={index} variants={fadeInUp} className="flex items-start gap-4 text-slate-700 font-medium text-lg">
                                <div className="mt-1 bg-purple-100 p-1 rounded-full text-purple-600">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                {feature}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>

            {/* Additional Info Grid */}
            <div className="container mt-12 grid md:grid-cols-2 gap-8"> {/* Removed items-start for equal height */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    className="glass p-6 rounded-3xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">{safety.title}</h3>
                    <p className="text-slate-600 mb-4 text-base leading-relaxed">{safety.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-4 flex-1">
                        {safety.features.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-200"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-purple-100 pt-3">
                        We ensure a <strong>stress-free and secure living experience</strong> for all our residents.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="glass p-6 rounded-3xl border border-pink-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">{whoCanStay.title}</h3>
                    <ul className="space-y-3 mb-4 flex-1">
                        {whoCanStay.features.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-base text-slate-700 font-medium bg-white/50 p-2 rounded-xl border border-white/60">
                                <CheckCircle className="text-pink-500 w-5 h-5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-pink-100 pt-3">
                        Whether you are new to the city or looking for a better place to stay, <strong>Team Elite Women’s PG welcomes you.</strong>
                    </p>
                </motion.div>
            </div>
        </section >
    );
};

export default About;
