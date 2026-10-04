import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  Brain, 
  Code, 
  Database, 
  Briefcase, 
  MapPin, 
  Calendar,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowUpRight
} from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-indigo-500" />,
      title: "Machine Learning & Vision",
      description: "Developing CNN architectures for image denoising, computer vision preprocessing with OpenCV, and training deep models using TensorFlow/Keras."
    },
    {
      icon: <Code className="w-5 h-5 text-cyan-500" />,
      title: "Full-Stack Development",
      description: "Building responsive, modern user interfaces with React, JavaScript, and Tailwind CSS, backed by robust REST APIs in Node.js and Java Spring Boot."
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      title: "Database Engineering",
      description: "Structuring relational databases with optimized MySQL queries and scalable document storage with MongoDB and MongoDB Atlas."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-amber-500" />,
      title: "Industry Experience",
      description: "Hands-on experience as a Full Stack Development Intern at TechnoHacks Solutions, integrating APIs and crafting high-performance UI components."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic & Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About <span className="gradient-text">M. Dinesh Kumar</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Passionate about merging cutting-edge artificial intelligence with production-ready software engineering.
          </p>
        </div>

        {/* Top Grid: Academic Spotlight & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left: Academic Identity Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  {personalInfo.batch}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                  Degree & Major
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {personalInfo.degree}
                </h3>
              </div>

              <div className="space-y-3 pt-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">{personalInfo.institution}</strong>
                    <br />
                    <span className="text-xs text-slate-500 dark:text-slate-400">Chennai, Tamil Nadu, India</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Batch of 2024 – 2028 (Undergraduate)</span>
                </div>
              </div>
            </div>

            {/* Quick highlight banner */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">2028</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Graduation Year</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono">100%</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Hands-on Focus</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Detailed Summary & Vision */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Professional Summary</span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal pl-4 border-l-4 border-indigo-500 italic">
                "{personalInfo.summary}"
              </blockquote>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                As an AI & ML undergraduate at Easwari Engineering College, I combine solid academic rigor with pragmatic software building. My project portfolio spans computer vision neural networks with OpenCV and TensorFlow, full-stack pet adoption platforms using Node.js and MongoDB, and high-performance Java Spring Boot architectures.
              </p>

              {/* Highlights checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Deep Learning & CNN Architectures",
                  "OpenCV Computer Vision Pipelines",
                  "Modern React & Responsive UI",
                  "Java Spring Boot REST APIs",
                  "Relational & NoSQL Database Design",
                  "Seeking AI/ML Internship Opportunities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Interested in working together or discussing an internship?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                <span>Get in touch directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom: 4 Core Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 hover:border-indigo-400/60 dark:hover:border-indigo-600 transition-all duration-200 hover:-translate-y-1 group border border-slate-200 dark:border-slate-800"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
