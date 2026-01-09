import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    const { details } = content;
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp Logic
        const phoneNumber = details.bookingNumber.replace(/\D/g, ''); // Remove non-digits
        // If phone number is placeholder or empty, alert user (or default to a generic one if provided)
        if (phoneNumber.length < 10) {
            alert("Please update the phone number in content.js to a valid number.");
            return;
        }

        const text = `Hello *Team Elite Women's PG*,%0A%0AI am interested in booking/enquiry.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column: Contact Info & Location Advantage */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-pink-600 font-semibold tracking-wider text-sm uppercase">Get in Touch</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-slate-800">Visit Us Today</h2>
                            <p className="text-slate-600 mb-12">
                                Have questions or want to schedule a visit? Reach out to us directly or fill out the form.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-lg glass shadow-sm flex items-center justify-center text-pink-600 shrink-0">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-1">Our Location</h4>
                                    <p className="text-slate-600">{details.address}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-lg glass shadow-sm flex items-center justify-center text-pink-600 shrink-0">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-1">Call Us</h4>
                                    <div className="flex flex-col gap-1">
                                        {details.contactNumbers.map((num, idx) => (
                                            <p key={idx} className="text-slate-600 font-medium">{num}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-lg glass shadow-sm flex items-center justify-center text-pink-600 shrink-0">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-1">Email Us</h4>
                                    <p className="text-slate-600">{details.email}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Location Advantage */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-12"
                        >
                            <h4 className="text-lg font-bold text-slate-800 mb-4">Location Advantage</h4>
                            <p className="text-slate-600 mb-4">Our PG is located in a convenient and well-connected area, close to:</p>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {details.locationAdvantage.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass p-8 rounded-2xl shadow-lg border border-white/50 h-fit"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                        placeholder="Your Number"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                    placeholder="I am interested in..."
                                ></textarea>
                            </div>
                            <button className="btn-primary w-full py-3 rounded-lg shadow-lg flex items-center justify-center gap-2">
                                <Send className="w-5 h-5" />
                                Send Message via WhatsApp
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px]"
                >
                    <iframe
                        src={details.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
