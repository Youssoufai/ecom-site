'use client';

export default function IpadPro() {
    return (
        <section className="bg-[#0d0f10] text-white py-20 px-6 md:px-20">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
                {/* Left - iPad Image with Chip Badge */}
                <div className="relative flex-1">
                    <img
                        src="/images/home-page-cta-ipad.webp" // make sure this image exists in your /public folder
                        alt="iPad Pro"
                        className="w-full max-w-md mx-auto md:mx-0"
                    />
                    <div className="absolute bottom-10 left-10 bg-gradient-to-r from-[#7028e4] to-[#e5b2ca] p-6 rounded-xl shadow-lg w-72">
                        <h4 className="text-lg font-bold text-white mb-2">Super Powerful Chip</h4>
                        <p className="text-sm text-white/80">Pellentesque pulvinar habitant morbi tristique maecenas.</p>
                    </div>
                </div>

                {/* Right - Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-300 text-lg mb-2">From $1099</p>
                    <h2 className="text-5xl font-extrabold mb-4">iPad Pro</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Libero nunc consequat interdum <br />
                        Varius sitamet mattis vulputate <br />
                        Ultricies mieget mauris pharetra
                    </p>
                    <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    );
}
