import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Hobbies from "../components/Hobbies";
import RecentActivity from "../components/RecentActivity";
import Gallery from "../components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-gradient-primary"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Education', 'Hobbies', 'Gallery', 'Activity', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <section id="about">
          <Hero />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="hobbies">
          <Hobbies />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="activity">
          <RecentActivity />
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="glass-card border-t border-glass-border py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gradient-primary mb-2">Let's Connect</h3>
            <p className="text-muted-foreground">
              Ready to collaborate on exciting business ventures and innovative projects
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['LinkedIn', 'Email', 'GitHub', 'Instagram'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="glass-card-hover px-6 py-3 rounded-xl text-foreground font-medium"
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {social}
              </motion.a>
            ))}
          </motion.div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 Business Student Portfolio. Crafted with passion and innovation.
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
