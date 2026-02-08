export default function Footer() {
  return (
      <footer className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo / About */}
          <div>
            <div className="border border-gray-300 inline-block px-4 py-2 font-bold text-gray-700 text-sm tracking-wide">
              ERASMUS LIFE <br /> HOUSING
            </div>

            <p className="mt-5 text-gray-600 text-sm leading-relaxed">
              Find Your Dream Accommodation
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-5 text-gray-600 text-lg">
              <span className="cursor-pointer hover:text-[#233ea9]">🎵</span>
              <span className="cursor-pointer hover:text-[#233ea9]">📷</span>
              <span className="cursor-pointer hover:text-[#233ea9]">📘</span>
              <span className="cursor-pointer hover:text-[#233ea9]">💼</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-[#233ea9] text-sm mb-4">NAVIGATION</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-[#233ea9] cursor-pointer">About Us</li>
              <li className="hover:text-[#233ea9] cursor-pointer">FAQ</li>
              <li className="hover:text-[#233ea9] cursor-pointer">
                Erasmus Life Lisboa
              </li>
              <li className="hover:text-[#233ea9] cursor-pointer">
                Apply For Internship
              </li>
            </ul>
          </div>

          {/* Tenants */}
          <div>
            <h4 className="font-bold text-[#233ea9] text-sm mb-4">TENANTS</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-[#233ea9] cursor-pointer">Video Chat</li>
              <li className="hover:text-[#233ea9] cursor-pointer">Housing Guide</li>
              <li className="hover:text-[#233ea9] cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-[#233ea9] cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#233ea9] text-sm mb-4">RESOURCES</h4>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>Travessa da Cara, 14, 1200-089 Lisbon - Portugal</li>
              <li>+351 932 483 834</li>
              <li>hello@erasmuslifehousing.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 text-sm">
          © 2026 Hotel Booking App
        </div>
      </footer>
  );
}
