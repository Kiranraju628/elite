import React from 'react';
import { content } from '../data/content';
import { Check } from 'lucide-react';

const Rooms = () => {
    const { rooms } = content;

    return (
        <section id="rooms" className="section">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase">Pricing & Plans</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-800">{rooms.title}</h2>
                    <p className="text-slate-500 mt-4">{rooms.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {rooms.options.map((room) => (
                        <div key={room.id} className="glass border border-white/40 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.type}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{room.type}</h3>
                                <p className="text-3xl font-bold text-purple-600 mb-6">{room.price}</p>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {room.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className="w-full py-3 rounded-lg border-2 border-purple-600 text-purple-600 font-semibold text-center hover:bg-purple-600 hover:text-white transition-colors">
                                    Enquire Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
