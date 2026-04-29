import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I want to book a yoga session.");
    window.open(`https://wa.me/919368640175?text=${message}`, '_blank');
  };

  return (
    <div className="bg-primary min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-white py-20 px-6 text-center border-b border-gray-100">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl text-ink mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-accent mx-auto"
        ></motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl mb-8 text-ink">Get in Touch</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Ready to start your yoga journey? Reach out to us to schedule your first session, ask about our programs, or just say hello. We are here to help you find your path to wellness.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0 border border-gray-100">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">Phone</h4>
                  <a href="tel:+919368640175" className="text-lg text-ink font-medium hover:text-accent transition-colors">+91 9368640175</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0 border border-gray-100">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">Email</h4>
                  <a href="mailto:manishasharma2195@gmail.com" className="text-lg text-ink font-medium hover:text-accent transition-colors">manishasharma2195@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0 border border-gray-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">Location</h4>
                  <p className="text-lg text-ink font-medium">Bodakdev, Ahmedabad</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0 border border-gray-100">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1">Available Timings</h4>
                  <p className="text-lg text-ink font-medium">Morning & Evening Batches</p>
                  <p className="text-sm text-gray-500 mt-1">Flexible slots tailored to your schedule.</p>
                </div>
              </div>
            </div>

            {/* Google Maps (Embed representation) */}
            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-sm border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.792437637841!2d72.50284485551465!3d23.034856003730248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84cb26e2e283%3A0xc3b832bded8922df!2sBodakdev%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714480000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-50"
          >
            <h2 className="font-serif text-3xl mb-2 text-ink">Send a Message</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! This is a demo template."); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-transparent focus:border-accent focus:bg-white focus:ring-0 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-transparent focus:border-accent focus:bg-white focus:ring-0 transition-colors"
                  placeholder="+91 "
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-transparent focus:border-accent focus:bg-white focus:ring-0 transition-colors resize-none"
                  placeholder="I'm interested in..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center space-x-2 bg-ink text-white px-8 py-4 rounded-xl font-medium hover:bg-accent transition-colors"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>

            <div className="mt-8 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm text-gray-500">OR</span>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="mt-8 w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle size={20} />
              <span>Book via WhatsApp</span>
            </button>
          </motion.div>

        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center text-ink">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              { q: "Do I need prior experience to start?", a: "Absolutely not. Our sessions are tailored to your current fitness and flexibility level. Beginners are completely welcome!" },
              { q: "What should I wear for the session?", a: "Wear comfortable, breathable clothing that allows you to move freely. Avoid anything too restrictive." },
              { q: "Do you provide yoga mats?", a: "For personal and home sessions, we recommend having your own mat for hygiene purposes, though we can advise you on what to buy." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h4 className="font-sans font-semibold text-lg text-ink mb-2">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
