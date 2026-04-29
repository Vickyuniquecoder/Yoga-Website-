import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Wind, Brain, CheckCircle2, Star, Phone } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2620&auto=format&fit=crop" 
            alt="Woman practicing yoga outdoors in morning sunlight" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white mt-16">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full border border-white/30 text-xs font-medium tracking-widest uppercase mb-6 inline-block bg-white/10 backdrop-blur-sm"
          >
            Find Your Inner Peace
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-balance mx-auto mb-6 max-w-4xl leading-tight"
          >
            Transform Your Body & Mind with Professional Yoga Training
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience personalized home yoga classes, personal training, and wellness sessions designed for your unique journey.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-colors text-center shadow-lg">
              Book a Free Trial
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-ink font-medium hover:bg-gray-100 transition-colors text-center">
              Start Your Yoga Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl mb-4 text-ink">The Benefits of Yoga</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover how regular practice can transform your physical and mental well-being.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Weight Loss", desc: "Burn calories naturally and maintain a healthy body weight." },
              { icon: Wind, title: "Stress Relief", desc: "Calm your nervous system and find release from daily anxieties." },
              { icon: Leaf, title: "Flexibility", desc: "Improve mobility, posture, and reduce the risk of injuries." },
              { icon: Brain, title: "Mental Peace", desc: "Enhance focus, clarity, and emotional balance through mindfulness." },
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-primary p-8 rounded-3xl text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-accent shadow-sm border border-accent/10">
                  <benefit.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="max-w-xl"
            >
              <h2 className="font-serif text-4xl mb-4 text-ink">Our Core Services</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Tailored wellness programs designed to fit your schedule, lifestyle, and fitness goals.
              </p>
            </motion.div>
            <Link to="/services" className="inline-flex items-center space-x-2 text-accent font-medium hover:text-accent-light transition-colors group">
              <span>View all services</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Home Yoga Classes", 
                image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop",
                desc: "Practice in the comfort of your own home with guided sessions tailored to your space."
              },
              { 
                title: "Personal Yoga Trainer", 
                image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop",
                desc: "One-on-one attention bridging the gap between where you are and your fitness goals."
              },
              { 
                title: "Online Yoga Sessions", 
                image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop",
                desc: "Join live interactive classes from anywhere in the world, maintaining your routine."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-gray-500 mb-6 line-clamp-2">{service.desc}</p>
                  <Link to="/services" className="text-sm uppercase tracking-wider font-semibold text-ink group-hover:text-accent flex items-center gap-2">
                    Learn More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl mb-6 text-ink">Why Choose Lotus Yoga?</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We believe that yoga is not just an exercise, but a way of life. Our approach combines ancient wisdom with modern understanding of the human body.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  "Certified & Experienced Trainer",
                  "Personalized Plans tailored to your body",
                  "Flexible Timings for busy schedules",
                  "Focus on holistic wellness & mindfulness"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 strokeWidth={2} className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/about" className="inline-block border-b-2 border-ink pb-1 font-semibold hover:text-accent hover:border-accent transition-colors">
                Read our story
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-primary">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2699&auto=format&fit=crop" 
                  alt="Yoga meditation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-bold text-ink">500+</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-ink text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center space-x-1 mb-8 text-accent-light">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-snug">
              "The personal training sessions have completely transformed my flexibility and reduced my daily stress. Highly recommended for anyone looking to improve their well-being."
            </h2>
            <p className="font-medium tracking-wide uppercase text-sm">â Priya M. â Ahmedabad</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 150%, white 0%, transparent 50%)' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Ready to start your journey?</h2>
          <p className="text-white/80 mb-10 text-lg">Contact us today to schedule your first session or ask any questions.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+919368640175" className="flex items-center justify-center space-x-3 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-ink font-medium hover:bg-gray-50 transition-colors">
              <Phone size={20} />
              <span>Call +91 9368640175</span>
            </a>
            <a href="https://wa.me/919368640175" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-accent transition-colors">
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
