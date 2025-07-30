// components/Footer.tsx
"use client";
import {
    UserCircle,
    Code2,
    Briefcase,
    Globe
} from 'lucide-react';


export default function Footer() {
    return (
        <footer className="bg-[#111416] text-gray-300 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand & Description */}
                <div>
                    <h2 className="text-white text-2xl font-bold flex items-center gap-2">
                        <span className="bg-white text-black px-2 py-1 rounded-full font-bold">G</span>
                        Gadgets
                    </h2>
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                        Cras gravida bibendum dolor eu varius morbi fermentum velit eget
                        vehicula lorem sodales donec quis volutpat orci.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <a href="#"><UserCircle className="w-5 h-5 bg-white text-black p-1 rounded-full" /></a>
                        <a href="#"><Code2 className="w-5 h-5 bg-white text-black p-1 rounded-full" /></a>
                        <a href="#"><Briefcase className="w-5 h-5 bg-white text-black p-1 rounded-full" /></a>
                        <a href="#"><Globe className="w-5 h-5 bg-white text-black p-1 rounded-full" /></a>
                    </div>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">USEFUL LINKS</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </div>

                {/* Custom Area */}
                <div>
                    <h3 className="text-white font-semibold mb-4">CUSTOM AREA</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Tracking List</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">My Cart</a></li>
                    </ul>
                </div>

                {/* More Information */}
                <div>
                    <h3 className="text-white font-semibold mb-4">MORE INFORMATION</h3>
                    <p className="text-sm text-gray-400 mb-6">
                        Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus
                    </p>
                    {/* Payment Icons Placeholder */}
                    <div className="flex space-x-4 grayscale">
                        <img src="/visa.svg" alt="VISA" className="h-6" />
                        <img src="/amex.svg" alt="AMEX" className="h-6" />
                        <img src="/mastercard.svg" alt="MasterCard" className="h-6" />
                        <img src="/paypal.svg" alt="PayPal" className="h-6" />
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
                Copyright © 2025 - WordPress Theme by CreativeThemes
            </div>
        </footer>
    );
}
