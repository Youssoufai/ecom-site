'use client'

import Image from 'next/image'
import { PlayCircle, Truck, RotateCcw, Clock3, CreditCard } from 'lucide-react'

export default function HeroSection() {
    return (
        <div className="bg-[#0d1117] text-white min-h-screen flex flex-col justify-between">
            {/* Hero content */}
            <div className="grid md:grid-cols-2 gap-10 items-center px-8 py-16 max-w-7xl mx-auto">
                {/* Text section */}
                <div>
                    <p className="text-lg text-gray-300 mb-2">From $999</p>
                    <h1 className="text-5xl font-bold mb-6">iPhone 12 Pro</h1>
                    <div className="flex items-center gap-4">
                        <button className="bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition">
                            Buy Now
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-gray-200 transition">
                            <PlayCircle className="w-6 h-6 mr-2" />
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Image section */}
                <div className="flex justify-center">
                    <Image
                        src="/images/home-hero-image.jpg" // Make sure to place this image in /public folder
                        alt="iPhone 12 Pro"
                        width={600}
                        height={600}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Feature bar */}
            <div className="bg-[#161b22] py-6 px-8 flex flex-wrap justify-around items-center gap-6 text-center">
                <Feature icon={<Truck className="w-6 h-6 mb-2" />} label="Free Shipping" />
                <Feature icon={<RotateCcw className="w-6 h-6 mb-2" />} label="100% Money Back" />
                <Feature icon={<Clock3 className="w-6 h-6 mb-2" />} label="Support 24/7" />
                <Feature icon={<CreditCard className="w-6 h-6 mb-2" />} label="100% Payment" />
            </div>
        </div>
    )
}

function Feature({ icon, label }) {
    return (
        <div className="flex flex-col items-center text-gray-200">
            {icon}
            <p className="text-sm font-medium">{label}</p>
        </div>
    )
}
