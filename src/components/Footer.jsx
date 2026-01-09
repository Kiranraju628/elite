import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="container text-center">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block">
                        Team Elite Women's PG
                    </h2>
                </div>
                <p className="text-slate-400 mb-6">Luxury when you want it, comfort when you need it, and affordability you can trust – only at Team Elite Women’s PG</p>
                <div className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Women's PG Hyderabad. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
