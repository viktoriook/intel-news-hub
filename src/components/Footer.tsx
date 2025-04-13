
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <footer className="bg-market-blue text-white">
      <div className="container mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MarketIntelNews</h3>
            <p className="text-gray-300 mb-4">
              Your trusted source for financial news and market insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-market-light-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-market-light-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-market-light-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-market-light-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Markets', 'Insights', 'Crypto', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-market-light-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Disclaimer', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-market-light-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <SubscribeForm />
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MarketIntelNews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
