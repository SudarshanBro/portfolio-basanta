import { motion } from "framer-motion";
import { Clock, ExternalLink, Award, Briefcase, Users, TrendingUp } from "lucide-react";
import businessImage from "/images/business-presentation.jpg";

const RecentActivity = () => {
  const activities = [
    {
      title: "Research on Current situation of Muslim women in Baglung Municipality",
      description: "Led a team of 4, for stating the troubles, situations and population growth trend of muslim women in Baglung municipality.",
      date: "On Going",
      category: "Research Work",
      icon: Award,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    },
    {
      title: "Project Presentation on Business Information System of Global IME Bank",
      description: "Presented a summary of business information systems, strategies and data analytics of Global IME bank meeting professionals and industry experts.",
      date: "2 month ago",
      category: "Project Work",
      icon: Award,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    
    {
      title: "Financial Analysis Project",
      description: "Completed comprehensive financial analysis of Fortune 500 company, identifying key growth opportunities and risk factors.",
      date: "1 month ago",
      category: "Academic",
      icon: TrendingUp,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    }
  ];

  const upcomingEvents = [
    {
      title: "Summer project Showcase",
      date: "Next Sememster",
      location: "Campus Auditorium"
    },
    {
      title: "10 Day trek to Langtang Region",
      date: "4 weeks",
      location: "Far West Nepal"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
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
            <Clock className="inline-block mr-4 text-accent" size={48} />
            <span className="text-gradient-primary">Recent</span> Activity
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest achievements, projects, and milestones in my academic and professional journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Latest Updates</h3>
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="glass-card-hover p-6 rounded-2xl group cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${activity.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon className={activity.color} size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {activity.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={16} />
                        {activity.date}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        {activity.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {activity.description}
                    </p>
                    
                    <div className="flex items-center text-accent font-medium text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Learn more</span>
                      <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar Content */}
          <div className="space-y-8">
            {/* Featured Image */}
            <motion.div
              className="glass-card-hover p-4 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={businessImage}
                alt="Business presentation"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-lg font-bold text-foreground mb-2">Latest Project Presentation</h4>
              <p className="text-sm text-muted-foreground">
                Strategic analysis and market research presentation delivered to industry professionals.
              </p>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              className="glass-card-hover p-6 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold text-foreground mb-4">Upcoming Events</h4>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-primary/5 rounded-xl">
                    <h5 className="font-semibold text-foreground text-sm mb-1">{event.title}</h5>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{event.date}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="glass-card-hover p-6 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg font-bold text-foreground mb-4">This Month</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="text-accent font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Networking Events</span>
                  <span className="text-accent font-bold">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Certifications</span>
                  <span className="text-accent font-bold">1</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;