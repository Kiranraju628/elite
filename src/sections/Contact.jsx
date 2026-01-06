import React from 'react';
import { content } from '../data/content';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const { details } = content;

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase">Get in Touch</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-slate-800">Visit Us Today</h2>
                        <p className="text-slate-600 mb-12">
                            Have questions or want to schedule a visit? Reach out to us directly or fill out the form.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg glass shadow-sm flex items-center justify-center text-purple-600 shrink-0">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-1">Our Location</h4>
                                    <p className="text-slate-600">{details.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg glass shadow-sm flex items-center justify-center text-purple-600 shrink-0">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-1">Call Us</h4>
                                    <p className="text-slate-600">{details.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg glass shadow-sm flex items-center justify-center text-purple-600 shrink-0">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-1">Email Us</h4>
                                    <p className="text-slate-600">{details.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl shadow-lg border border-white/50">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all" placeholder="Your Number" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all" placeholder="I am interested in..."></textarea>
                            </div>
                            <button className="btn-primary w-full py-3 rounded-lg shadow-lg">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px]">
                    <iframe
                        src={details.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
