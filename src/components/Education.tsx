import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import educationBg from "/images/education-bg.jpg";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Business Administration",
      institution: "Tribhuvan University, Nepal",
      period: "2023 - 2027",
      gpa: "Persueing",
      specialization: "Strategic Management & Innovation",
      highlights: [
        "Dean's List for 6 consecutive semesters",
        "Member of BBA Quality Circle [BQC]",
        "Outstanding Academic Achievements"
      ]
    },
    {
      degree: "High School / +2",
      institution: "Beni Community Secondary School",
      period: "2018 - 2022",
      gpa: "4.0/4.0",
      specialization: "Computer Science and Aplications",
      highlights: [
        "Consistent academic excellence with higher grades",
        "Particiation on community health awareness programs",
        "Summer Camp Volunteer organized by Duke University, USA"
      ]
    }
  ];

  const certifications = [
    "Google Analytics Certified",
    "Microsoft Excel Expert",
    "Project Management Fundamentals",
    "Digital Marketing Certification"
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Image with Glass Overlay */}
      <div className="absolute inset-0">
        <img 
          src={educationBg}
          alt="Education background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/90"></div>
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
            <GraduationCap className="inline-block mr-4 text-accent" size={48} />
            <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in business principles and leadership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-card-hover p-8 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-lg text-accent font-semibold">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={16} />
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Specialization</h4>
                <p className="text-muted-foreground">{edu.specialization}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="glass-card-hover p-8 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Award className="text-accent" size={28} />
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-sm font-medium text-foreground">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;