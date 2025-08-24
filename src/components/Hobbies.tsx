import { motion } from "framer-motion";
import { Camera, Book, Headphones, Coffee, Globe, Gamepad2 } from "lucide-react";
import hobbiesImage from "/images/hobbies-collage.jpg";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and stories through the lens, specializing in urban landscapes and portraits.",
      color: "text-blue-400"
    },
    {
      icon: Book,
      title: "Reading",
      description: "Passionate about business biographies, contemporary fiction, and personal development books.",
      color: "text-green-400"
    },
    {
      icon: Headphones,
      title: "Music Production",
      description: "Creating electronic music and experimenting with sound design in my home studio.",
      color: "text-purple-400"
    },
    {
      icon: Coffee,
      title: "Coffee Culture",
      description: "Exploring different brewing methods and coffee origins. Certified barista and latte art enthusiast.",
      color: "text-amber-400"
    },
    {
      icon: Globe,
      title: "Travel & Culture",
      description: "Exploring new cultures, learning languages, and documenting travel experiences through blogging.",
      color: "text-cyan-400"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategy games and esports enthusiast. Part-time streamer and game analysis content creator.",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-accent">Hobbies</span> & 
            <span className="text-gradient-primary"> Interests</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond academics, I'm passionate about creativity, culture, and continuous learning
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-30 scale-105"></div>
            <div className="relative glass-card p-2 rounded-3xl">
              <img 
                src={hobbiesImage}
                alt="Hobbies and interests collection"
                className="w-full max-w-2xl h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="glass-card-hover p-6 rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <hobby.icon className={`${hobby.color} group-hover:scale-110 transition-transform duration-300`} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {hobby.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {hobby.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-4 h-1 bg-gradient-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          className="mt-16 glass-card-hover p-8 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Fun Facts & Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient-primary">50+</div>
              <p className="text-muted-foreground">Photos Published</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient-accent">25</div>
              <p className="text-muted-foreground">Books Read This Year</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient-primary">12</div>
              <p className="text-muted-foreground">Countries Visited</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gradient-accent">5+</div>
              <p className="text-muted-foreground">Music Tracks Produced</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;