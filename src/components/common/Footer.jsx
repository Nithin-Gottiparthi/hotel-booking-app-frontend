import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block hover:opacity-90">
              <Logo variant="white" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the best stays across India. From cozy farmhouses to luxury resorts, we curate moments that matter.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">𝕏</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">📸</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">💼</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Discover</h4>
            <ul className="space-y-3">
              <li><Link to="/explore" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">All Properties</Link></li>
              <li><Link to="/events" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Event Venues</Link></li>
              <li><Link to="/explore?type=Resort" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Luxury Resorts</Link></li>
              <li><Link to="/explore?type=Farmhouse" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Weekend Farmhouses</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Careers</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Travel Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Vibestey Hospitality Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

