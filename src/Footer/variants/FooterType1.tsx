'use client';

import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

export const FooterType1 = () => {
  return (
    <footer className="bg-indigo-950 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">About Us</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-300 transition">Who We Are</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Our Timeline</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Our Leadership Team</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Partner With Us</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Careers</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-300 transition">Visit Our Virtual Office</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Test Preparation</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">International Study Guide</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Duolingo English Test</a></li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Study Destinations</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-300 transition">Study in Australia</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Study in USA</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Study in Canada</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Study in UK</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Study in Europe</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Let&apos;s get social</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-300 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-indigo-300 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-indigo-300 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-indigo-300 transition">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Countries List */}
        <div className="border-t border-indigo-900 pt-8 mb-8">
          <div className="flex flex-wrap gap-2 justify-center text-sm text-indigo-300">
            {['Australia', 'Bangladesh', 'India', 'Indonesia', 'Malaysia', 'Nepal', 'Nigeria', 'Philippines', 'Singapore', 'Sri Lanka', 'Thailand', 'Vietnam'].map((country, index) => (
              <React.Fragment key={country}>
                <a href="#" className="hover:text-white transition">{country}</a>
                {index < 11 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-indigo-300">
          <p>Copyright © 2024 aecc. 
            <a href="#" className="hover:text-white transition ml-2">Useful Links</a> | 
            <a href="#" className="hover:text-white transition mx-2">Glossary</a> | 
            <a href="#" className="hover:text-white transition">Terms of Use</a> | 
            <a href="#" className="hover:text-white transition ml-2">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
