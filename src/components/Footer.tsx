import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <Link to="/" className="flex flex-col items-start mb-6">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Lotus Yoga
            </span>
            <span className="text-[10px] tracking-widest uppercase text-accent-light font-medium">
              & Wellness
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Transform your body and mind with professional yoga training. 
            Experience wellness, mindfulness, and a healthy lifestyle.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-accent-light transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent-light transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent-light transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-accent-light transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-accent-light transition-colors">Home Yoga Classes</Link></li>
            <li><Link to="/services" className="hover:text-accent-light transition-colors">Personal Training</Link></li>
            <li><Link to="/services" className="hover:text-accent-light transition-colors">Online Sessions</Link></li>
            <li><Link to="/services" className="hover:text-accent-light transition-colors">Weight Loss Yoga</Link></li>
            <li><Link to="/services" className="hover:text-accent-light transition-colors">Meditation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent-light shrink-0 mt-0.5" />
              <span>Bodakdev, Ahmedabad<br/>Gujarat, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-accent-light shrink-0" />
              <a href="tel:+919368640175" className="hover:text-white transition-colors">+91 9368640175</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-accent-light shrink-0" />
              <a href="mailto:manishasharma2195@gmail.com" className="hover:text-white transition-colors">manishasharma2195@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center text-xs text-white/50 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Lotus Yoga & Wellness. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with mindfulness.</p>
      </div>
    </footer>
  );
}
