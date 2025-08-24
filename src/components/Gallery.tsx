import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Camera, X, Filter, Award, Users, Briefcase, GraduationCap } from "lucide-react";

// Import gallery images
import graduationCeremony from "/images/gallery/graduation-ceremony.jpg";
import networkingEvent from "/images/gallery/networking-event.jpg";
import caseCompetition from "/images/gallery/case-competition.jpg";
import teamBuilding from "/images/gallery/team-building.jpg";
import businessConference from "/images/gallery/business-conference.jpg";
import leadershipMeeting from "/images/gallery/leadership-meeting.jpg";
import awardCeremony from "/images/gallery/award-ceremony.jpg";
import internshipOffice from "/images/gallery/internship-office.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const galleryImages = [
    {
      id: 1,
      src: graduationCeremony,
      title: "Graduation Ceremony",
      description: "Celebrating academic achievements with fellow graduates at the university commencement ceremony.",
      category: "Academic",
      size: "large"
    },
    {
      id: 2,
      src: networkingEvent,
      title: "Professional Networking Event",
      description: "Building connections with industry professionals and fellow students at the annual business networking summit.",
      category: "Professional",
      size: "tall"
    },
    {
      id: 3,
      src: caseCompetition,
      title: "Business Case Competition",
      description: "Presenting innovative solutions during the regional business strategy competition.",
      category: "Academic",
      size: "wide"
    },
    {
      id: 4,
      src: teamBuilding,
      title: "Team Building Workshop",
      description: "Participating in leadership development activities with student organization members.",
      category: "Leadership",
      size: "tall"
    },
    {
      id: 5,
      src: businessConference,
      title: "International Business Conference",
      description: "Attending keynote sessions and panel discussions on global business trends.",
      category: "Professional",
      size: "wide"
    },
    {
      id: 6,
      src: leadershipMeeting,
      title: "Student Leadership Meeting",
      description: "Strategic planning session as President of the Business Students Association.",
      category: "Leadership",
      size: "small"
    },
    {
      id: 7,
      src: awardCeremony,
      title: "Academic Excellence Award",
      description: "Receiving recognition for outstanding academic performance and leadership contributions.",
      category: "Academic",
      size: "large"
    },
    {
      id: 8,
      src: internshipOffice,
      title: "Marketing Internship",
      description: "Working on digital marketing campaigns during my summer internship at TechCorp.",
      category: "Professional",
      size: "small"
    }
  ];

  const categories = [
    { name: "All", icon: Camera, color: "text-accent" },
    { name: "Academic", icon: GraduationCap, color: "text-blue-400" },
    { name: "Professional", icon: Briefcase, color: "text-green-400" },
    { name: "Leadership", icon: Users, color: "text-purple-400" }
  ];

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const getImageClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "wide":
        return "md:col-span-2";
      case "tall":
        return "md:row-span-2";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <Camera className="inline-block mr-4 text-accent" size={48} />
            <span className="text-gradient-primary">Photo</span> Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments from my academic journey, professional experiences, and leadership activities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`glass-card-hover px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category.name 
                  ? 'gradient-primary text-primary-foreground glow-primary' 
                  : 'text-foreground'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className={category.color} size={20} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`glass-card-hover rounded-2xl overflow-hidden cursor-pointer group ${getImageClasses(image.size)}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                layout
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                      
                      {/* Category Badge */}
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/90 text-accent-foreground rounded-full">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>
            
            {/* Modal Content */}
            <motion.div
              className="relative max-w-4xl max-h-[90vh] glass-card rounded-3xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 glass-card-hover p-2 rounded-xl text-white hover:text-accent transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Image */}
              <img 
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/20 text-accent rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;