import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Star, Code, Palette, Music, Coffee, Github, Linkedin, 
  Mail, Briefcase, Award, Book, ChevronDown, Sparkles,
  Globe, Cpu, Camera, Brush
} from 'lucide-react';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const letterVariants = {
    hidden: { y: 400, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skills = [
    { icon: <Code className="w-6 h-6" />, name: "Full Stack Development", description: "Building scalable web applications" },
    { icon: <Palette className="w-6 h-6" />, name: "UI/UX Design", description: "Creating beautiful user experiences" },
    { icon: <Globe className="w-6 h-6" />, name: "Web3 Development", description: "Building decentralized apps" },
    { icon: <Cpu className="w-6 h-6" />, name: "AI Integration", description: "Implementing machine learning solutions" }
  ];

  const projects = [
    {
      title: "Anime Character Generator",
      description: "AI-powered tool that generates unique anime characters with customizable features",
      tech: ["React", "TensorFlow.js", "Canvas API"],
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Anime Art Gallery",
      description: "Digital gallery showcasing my anime artwork and illustrations",
      tech: ["Next.js", "Three.js", "GSAP"],
      image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Manga Reader App",
      description: "Progressive web app for reading and organizing manga collections",
      tech: ["Vue.js", "GraphQL", "Firebase"],
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Anime Music Player",
      description: "Streaming platform for anime soundtracks and opening themes",
      tech: ["React Native", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1542831371-32f555c86880?auto=format&fit=crop&w=800&h=400"
    }
  ];

  const firstName = "FIRMAN".split("");
  const lastName = "WAHYUDI".split("");

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-bold mb-4 text-yellow-400 flex flex-col gap-8">
              <div className="flex justify-center">
                {firstName.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className="inline-block relative hover:text-yellow-300 transition-colors duration-300"
                    whileHover={{
                      y: -20,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-center">
                {lastName.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + firstName.length}
                    variants={letterVariants}
                    className="inline-block relative hover:text-yellow-300 transition-colors duration-300"
                    whileHover={{
                      y: -20,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </h1>
          </div>
          <motion.p 
            variants={itemVariants}
            className="text-2xl text-gray-300 mb-8"
          >
            Creative Developer & Anime Artist <Sparkles className="inline-block w-6 h-6 text-yellow-400" />
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 flex-wrap gap-4"
          >
            {["Full Stack", "UI/UX", "Anime Art", "AI"].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-2 bg-yellow-400 text-black rounded-full text-lg font-medium shadow-lg"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 w-full text-center"
        >
          <ChevronDown className="w-8 h-8 mx-auto text-yellow-400 scroll-indicator" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        {/* About */}
        <motion.section 
          variants={scrollVariants} 
          className="mb-20"
        >
          <motion.h2 
            variants={scrollVariants}
            className="text-3xl font-bold mb-8 text-yellow-400 flex items-center"
          >
            <Star className="mr-3" /> About Me
          </motion.h2>
          <motion.div 
            variants={scrollVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-xl card-glow"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              Konnichiwa! I'm a passionate developer and anime artist with a unique blend of technical expertise and creative flair.
              My journey in tech has been driven by a desire to create innovative solutions that bridge the gap between technology and anime culture.
              When I'm not crafting code or drawing anime characters, you'll find me exploring the latest in AI technology for digital art creation,
              or contributing to open-source anime-related projects. Let's create something kawaii together! ✨
            </p>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          variants={scrollVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={scrollVariants}
            className="text-3xl font-bold mb-8 text-yellow-400 text-center"
          >
            Technical Arsenal
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={scrollVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gray-900 p-6 rounded-xl shadow-xl card-glow"
              >
                <div className="text-yellow-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          variants={scrollVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={scrollVariants}
            className="text-3xl font-bold mb-8 text-yellow-400 flex items-center"
          >
            <Briefcase className="mr-3" /> Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={scrollVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-xl card-glow transform perspective-1000"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section 
          variants={scrollVariants}
          className="text-center"
        >
          <motion.h2 
            variants={scrollVariants}
            className="text-3xl font-bold mb-8 text-yellow-400"
          >
            Let's Connect!
          </motion.h2>
          <motion.div 
            variants={scrollVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-4 rounded-full text-black hover:bg-yellow-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-4 rounded-full text-black hover:bg-yellow-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:contact@example.com"
              className="bg-yellow-400 p-4 rounded-full text-black hover:bg-yellow-300 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default App;