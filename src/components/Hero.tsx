import { motion } from "framer-motion";
import profilePhoto from "/images/profile-photo.jpg.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-glow/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient-primary">Basanta</span>
              <br />
              <span className="text-foreground">Acharya</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Passionate BBA student with a focus on strategic management and innovation. 
            Combining academic excellence with practical business insights to drive meaningful change.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="glass-card-hover px-8 py-4 rounded-2xl gradient-primary text-primary-foreground font-semibold glow-primary">
              View My Work
            </button>
            <button className="glass-card-hover px-8 py-4 rounded-2xl border border-glass-border text-foreground font-semibold">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 scale-110"></div>
            
            {/* Glass frame */}
            <div className="relative glass-card p-2 rounded-3xl">
              <img 
                src={profilePhoto}
                alt="Professional headshot"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl animate-float">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;