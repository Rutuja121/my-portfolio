import React from 'react';
import { Heart, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-slate-600 bg-clip-text text-transparent">
              Marketing Professional
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Digital marketing strategist and aspiring consultant with cross-functional experience across performance media, 
              campaign execution, market intelligence, and global brand activations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rutujaabande/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rutujaabande@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Expertise</h4>
            <div className="space-y-2 text-gray-400">
              <p>Paid Media Campaigns</p>
              <p>Meta & Google Ads</p>
              <p>DV360 Management</p>
              <p>KPI Reporting</p>
              <p>Ad Copywriting</p>
              <p>Social Media Strategy</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="text-blue-700" size={16} /> by Marketing Professional
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;