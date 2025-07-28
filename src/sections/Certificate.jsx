import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar } from "lucide-react";

// Floating animation
const floatingAnimation = {
  y: [10, -10],
  transition: {
    duration: 3,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
};

// Certifications data
const certifications = [
  {
    title: "GOOGLE ADVANCED DATA ANALYST",
    issuer: "Google (via Coursera)",
    date: "April 2025",
    description:
      "Demonstrated advanced data analysis skills using Python, SQL, and data visualization tools, with a focus on real-world problem solving and business insights.",
    link: "https://www.coursera.org/account/accomplishments/specialization/IJK1I2ZM3LCF",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (via Coursera)",
    date: "April 2025",
    description:
      "Gained hands-on experience in Python programming for data science and AI, including Pandas, NumPy, and Jupyter Notebooks.",
    link: "https://www.coursera.org/account/accomplishments/verify/FGS0361WDGIF",
  },
];

// Certification Card Component
const CertificationCard = ({ title, issuer, date, description, link, image }) => (
  <div className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-800/10 to-purple-600/5 p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/70 hover:shadow-purple-500/30">
    <div className="flex items-start gap-6">
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-300/10 border-2 border-purple-400 group-hover:border-purple-500 flex items-center justify-center">
          <Award className="w-10 h-10 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-full bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-purple-200 text-sm">{issuer}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-purple-200">
          <Calendar className="w-4 h-4 text-purple-300" />
          <span>{date}</span>
        </div>

        {description && (
          <p className="text-sm text-purple-100 leading-relaxed">{description}</p>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 border border-purple-400/30 hover:border-purple-400 px-3 py-2 rounded-lg hover:bg-purple-400/10 transition-all duration-300"
        >
          View Certification
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
        </a>
      </div>
    </div>

    {/* Verified Badge */}
    <div className="absolute top-4 right-4">
      <div className="flex items-center gap-1 bg-green-400/10 border border-green-400/30 text-green-300 px-3 py-1.5 rounded-full text-xs font-medium">
        <Award className="w-3 h-3" />
        Verified
      </div>
    </div>
  </div>
);

// Main Section
const Certifications = () => {
  return (
    <div className="w-full py-12 px-4 backdrop-blur-sm">
      <div id="certificate" className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Technologies & Certifications
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-lg text-purple-200 max-w-2xl mx-auto"
          >
            Showcasing my expertise through industry-recognized certifications
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              animate={floatingAnimation}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
