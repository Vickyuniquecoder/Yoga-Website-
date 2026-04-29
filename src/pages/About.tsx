import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function About() {
  return (
    <div className="bg-primary min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-white py-20 px-6 text-center border-b border-gray-100">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl text-ink mb-6"
        >
          About Us
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-accent mx-auto"
        ></motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-ink">Hello, I'm Manisha Sharma</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Welcome to Lotus Yoga & Wellness. With years of dedicated practice and professional training, I guide individuals toward achieving a balanced, healthy, and mindful lifestyle through the ancient art of Yoga.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Based in Bodakdev, Ahmedabad, I specialize in providing tailored yoga instruction that adapts to your unique physical capabilities and personal wellness goals. Whether you are a beginner looking for basics or an advanced practitioner seeking deeper practices, my approach is centered around your growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  <Target size={24} />
                </div>
                <h3 className="font-serif text-xl mb-2">Our Mission</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To help people achieve a sustainable healthy lifestyle through customized yoga practices, making wellness accessible and practical.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="font-serif text-xl mb-2">Our Vision</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Spreading wellness and mindfulness within the community, fostering a society where physical health and mental peace coexist.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] rounded-t-[100px] rounded-b-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1964&auto=format&fit=crop" 
                alt="Manisha Sharma - Yoga Trainer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 pt-20 pb-8 px-8 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="text-accent-light" size={24} />
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">Certified</span>
                </div>
                <h3 className="font-serif text-2xl">Yoga Professional</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-white py-24 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl mb-4 text-ink">Why Clients Trust Lotus Yoga</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A commitment to your well-being with professionalism and care.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Personalized Attention", desc: "Every body is different. We modify postures to suit your individual needs and prevent injury." },
              { title: "Home Service", desc: "We bring the studio to you. Practice comfortably in your own space without the commute." },
              { title: "Flexible Scheduling", desc: "Morning and evening batches available to accommodate your busy lifestyle seamlessly." },
              { title: "Focus on Results", desc: "Goal-oriented training, whether it's weight loss, flexibility, or stress management." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-primary border border-primary hover:border-accent/30 transition-colors"
              >
                <CheckCircle2 className="text-accent mb-6" size={32} />
                <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
