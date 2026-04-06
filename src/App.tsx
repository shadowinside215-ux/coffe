/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Coffee, 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Globe, 
  Instagram, 
  Facebook, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-coffee-800 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Coffee className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-coffee-900 dark:text-white' : 'text-white'}`}>
            Cappuccino<span className="text-coffee-500">7</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors hover:text-coffee-500 ${isScrolled ? 'text-coffee-700 dark:text-coffee-200' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-coffee-100 text-coffee-800 dark:bg-coffee-800 dark:text-coffee-100' : 'bg-white/10 text-white'}`}
          >
            {isDarkMode ? <Star size={20} fill="currentColor" /> : <Star size={20} />}
          </button>

          <button className="btn-primary py-2 px-6 text-sm">
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-coffee-900' : 'text-white'} />
          ) : (
            <MenuIcon className={isScrolled ? 'text-coffee-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-coffee-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-coffee-800 hover:text-coffee-500"
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-2">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
          alt="Coffee Shop" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
            Cappuccino<span className="text-coffee-400">7</span>
          </h1>
          <p className="text-xl md:text-2xl text-coffee-100 mb-10 font-light max-w-2xl mx-auto">
            Your Daily Coffee Escape. Experience the perfect blend of tradition and modern café culture in the heart of Salé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="btn-primary flex items-center justify-center gap-2">
              View Menu <ChevronRight size={18} />
            </a>
            <button className="btn-secondary bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              Order Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const features = [
    { icon: <Utensils className="text-coffee-600 dark:text-coffee-400" />, title: 'Dine-in', desc: 'Relax in our cozy atmosphere' },
    { icon: <ShoppingBag className="text-coffee-600 dark:text-coffee-400" />, title: 'Takeaway', desc: 'Perfect for your busy mornings' },
    { icon: <ArrowRight className="text-coffee-600 dark:text-coffee-400" />, title: 'Delivery', desc: 'Fresh coffee at your doorstep' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-coffee-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" 
                alt="Our Cafe" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-coffee-100 dark:bg-coffee-900 rounded-3xl -z-10 transition-colors duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-coffee-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 dark:text-white mb-6">
              A Cozy Retreat in Salé
            </h2>
            <p className="text-lg text-coffee-700 dark:text-coffee-200 mb-8 leading-relaxed">
              Cappuccino7 is a cozy coffee shop located in Salé, offering high-quality coffee, desserts, and a relaxing atmosphere. We believe that every cup tells a story, and we're here to make yours special.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="bg-coffee-50 dark:bg-coffee-900 w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-colors duration-300">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-coffee-900 dark:text-white">{f.title}</h4>
                  <p className="text-sm text-coffee-600 dark:text-coffee-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const menuData = {
    Coffee: [
      { name: 'Cappuccino', price: '25 MAD', desc: 'Rich espresso with steamed milk foam' },
      { name: 'Espresso', price: '15 MAD', desc: 'Pure and intense coffee shot' },
      { name: 'Latte', price: '28 MAD', desc: 'Smooth espresso with plenty of steamed milk' },
      { name: 'Mocha', price: '32 MAD', desc: 'Espresso with chocolate and steamed milk' },
    ],
    Drinks: [
      { name: 'Fresh Orange Juice', price: '20 MAD', desc: '100% natural squeezed oranges' },
      { name: 'Green Smoothie', price: '35 MAD', desc: 'Spinach, apple, and ginger blend' },
      { name: 'Berry Blast', price: '38 MAD', desc: 'Mixed berries with yogurt' },
      { name: 'Iced Tea', price: '22 MAD', desc: 'Homemade peach or lemon iced tea' },
    ],
    Desserts: [
      { name: 'Butter Croissant', price: '12 MAD', desc: 'Flaky and buttery French pastry' },
      { name: 'Chocolate Cake', price: '45 MAD', desc: 'Rich dark chocolate layer cake' },
      { name: 'Oatmeal Cookies', price: '10 MAD', desc: 'Healthy and chewy with raisins' },
      { name: 'Cheesecake', price: '48 MAD', desc: 'Classic New York style with berry topping' },
    ]
  };

  return (
    <section id="menu" className="py-24 bg-coffee-50 dark:bg-coffee-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-500 font-bold tracking-widest uppercase text-sm mb-4 block">Explore</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 dark:text-white">Our Signature Menu</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-coffee-800 text-white shadow-lg' 
                  : 'bg-white dark:bg-coffee-800 text-coffee-600 dark:text-coffee-200 hover:bg-coffee-100 dark:hover:bg-coffee-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
              <motion.div
                key={`${activeCategory}-${item.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1 }}
                className="menu-card flex justify-between items-start group dark:bg-coffee-800 dark:border-coffee-700"
              >
                <div>
                  <h4 className="text-xl font-bold text-coffee-900 dark:text-white mb-1 group-hover:text-coffee-600 dark:group-hover:text-coffee-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-coffee-600 dark:text-coffee-300 text-sm">{item.desc}</p>
                </div>
                <span className="text-lg font-bold text-coffee-800 dark:text-coffee-100 bg-coffee-50 dark:bg-coffee-900 px-3 py-1 rounded-lg transition-colors duration-300">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-coffee-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-500 font-bold tracking-widest uppercase text-sm mb-4 block">Visuals</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 dark:text-white">Captured Moments</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`rounded-2xl overflow-hidden shadow-lg ${i % 3 === 1 ? 'md:translate-y-8' : ''}`}
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Sarah J.", text: "The best cappuccino in Salé! The atmosphere is so relaxing, perfect for working or meeting friends.", rating: 5 },
    { name: "Ahmed K.", text: "Amazing desserts and very friendly staff. The chocolate cake is a must-try!", rating: 5 },
    { name: "Lina M.", text: "I love the modern vibe here. Great coffee and fast delivery service too.", rating: 4 },
  ];

  return (
    <section className="py-24 bg-coffee-900 dark:bg-black text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-coffee-400 font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">What Our Guests Say</h2>
          </div>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-coffee-400">4.7</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < 4 ? "#bb9d8f" : "none"} className="text-coffee-400" />
                ))}
              </div>
              <p className="text-sm text-coffee-200">Based on 500+ reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#bb9d8f" className="text-coffee-400" />
                ))}
              </div>
              <p className="text-lg italic mb-6 text-coffee-100">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-coffee-700 rounded-full flex items-center justify-center font-bold">
                  {r.name[0]}
                </div>
                <span className="font-bold">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-coffee-50 dark:bg-coffee-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-coffee-500 font-bold tracking-widest uppercase text-sm mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 dark:text-white mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-white dark:bg-coffee-800 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-coffee-100 dark:border-coffee-700 flex-shrink-0 transition-colors duration-300">
                  <MapPin className="text-coffee-600 dark:text-coffee-400" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900 dark:text-white text-lg mb-1">Our Location</h4>
                  <p className="text-coffee-600 dark:text-coffee-300">Av. Moulay Rachid, Salé (Taha Palace)</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white dark:bg-coffee-800 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-coffee-100 dark:border-coffee-700 flex-shrink-0 transition-colors duration-300">
                  <Phone className="text-coffee-600 dark:text-coffee-400" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900 dark:text-white text-lg mb-1">Phone Number</h4>
                  <p className="text-coffee-600 dark:text-coffee-300">07 77 30 51 55</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white dark:bg-coffee-800 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-coffee-100 dark:border-coffee-700 flex-shrink-0 transition-colors duration-300">
                  <Globe className="text-coffee-600 dark:text-coffee-400" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900 dark:text-white text-lg mb-1">Website</h4>
                  <p className="text-coffee-600 dark:text-coffee-300">cappuccino7.ma</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white dark:bg-coffee-800 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-coffee-100 dark:border-coffee-700 flex-shrink-0 transition-colors duration-300">
                  <Clock className="text-coffee-600 dark:text-coffee-400" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900 dark:text-white text-lg mb-1">Opening Hours</h4>
                  <p className="text-coffee-600 dark:text-coffee-300">Open daily until 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-coffee-800 h-[500px] transition-colors duration-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.467389284241!2d-6.8123456!3d34.0345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAyJzA0LjQiTiA2wrA0OCczNC40Ilc!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Cappuccino7 Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-coffee-950 pt-24 pb-12 border-t border-coffee-100 dark:border-coffee-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-coffee-800 p-2 rounded-lg">
                <Coffee className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-coffee-900 dark:text-white">
                Cappuccino<span className="text-coffee-500">7</span>
              </span>
            </a>
            <p className="text-coffee-600 dark:text-coffee-300 max-w-sm mb-8">
              Experience the finest coffee and desserts in Salé. Our passion for quality and community makes us your perfect daily escape.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-coffee-50 dark:bg-coffee-900 rounded-full flex items-center justify-center text-coffee-600 dark:text-coffee-300 hover:bg-coffee-800 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-coffee-50 dark:bg-coffee-900 rounded-full flex items-center justify-center text-coffee-600 dark:text-coffee-300 hover:bg-coffee-800 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-coffee-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-coffee-900 dark:text-white mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#contact" className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-coffee-600 dark:text-coffee-300 hover:text-coffee-800 dark:hover:text-white transition-colors">Delivery Info</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-coffee-100 dark:border-coffee-900 text-center">
          <p className="text-coffee-500 text-sm">
            &copy; {new Date().getFullYear()} Cappuccino7. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
