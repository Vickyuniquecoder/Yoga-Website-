import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import SEO from '../components/SEO';

const SERVICES = [
  {
    id: "home-yoga",
    title: "Home Yoga Classes",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "Experience the tranquility of yoga without leaving your house. We bring professional instruction to your living room.",
    benefits: ["Saves commute time", "Comfortable environment", "Family can join"],
    whoItsFor: "Busy professionals, homemakers, and those preferring privacy."
  },
  {
    id: "personal-training",
    title: "Personal Yoga Training",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "1-on-1 private sessions highly customized to address your specific goals, injuries, or athletic ambitions.",
    benefits: ["Customized routines", "Rapid progress", "Correction of form"],
    whoItsFor: "Individuals with specific health goals, beginners needing direct guidance, or advanced yogis."
  },
  {
    id: "online-sessions",
    title: "Online Yoga Sessions",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "Stay consistent with your practice anywhere in the world through interactive live video sessions.",
    benefits: ["Location independence", "Interactive feedback", "Flexible recording access"],
    whoItsFor: "Frequent travelers and remote workers."
  },
  {
    id: "weight-loss",
    title: "Weight Loss Yoga Programs",
    image: "https://images.unsplash.com/photo-1608096299210-db7e38487075?q=80&w=2069&auto=format&fit=crop",
    shortDesc: "Dynamic and intense yoga sequences specifically designed to burn calories, boost metabolism, and tone muscles.",
    benefits: ["Increased metabolism", "Core strengthening", "Sustainable weight management"],
    whoItsFor: "Anyone looking to shed healthy weight while improving overall fitness."
  },
  {
    id: "meditation",
    title: "Meditation & Stress Relief",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2699&auto=format&fit=crop",
    shortDesc: "Guided mindfulness practices and breathing techniques (Pranayama) to calm the nervous system.",
    benefits: ["Reduced anxiety", "Better sleep quality", "Improved focus"],
    whoItsFor: "Individuals dealing with high stress, corporate workers, and students."
  }
];

export default function Services() {
  return (
    <div className="bg-primary min-h-screen pb-24">
      <SEO 
        title="Our Services"
        description="Explore our range of yoga services including home yoga classes, personal training, online sessions, and weight loss programs in Ahmedabad."
        url="/services"
      />
      {/* Page Header */}
      <section className="bg-ink text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Comprehensive wellness solutions designed for your mind, body, and lifestyle.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center space-x-2 text-accent mb-4">
                  <Sparkles size={20} />
                  <span className="font-sans uppercase tracking-widest text-xs font-semibold">Premium Wellness</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.shortDesc}
                </p>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                  <h4 className="font-serif text-lg mb-4 text-ink">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-gray-600">
                        <Check strokeWidth={3} className="text-accent shrink-0 mt-0.5" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <span className="text-sm font-semibold text-ink uppercase tracking-wider">Perfect For: </span>
                  <span className="text-sm text-gray-600 italic">{service.whoItsFor}</span>
                </div>
                
                <div>
                  <Link 
                    to={`/contact?service=${service.id}`} 
                    className="inline-flex items-center justify-center space-x-2 bg-ink text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors w-full sm:w-auto"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
