import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle, 
  Sparkles, 
  Brain, 
  Code, 
  X, 
  Sliders,
  Maximize2,
  Cpu,
  ArrowRight
} from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [denoiseCompareSlider, setDenoiseCompareSlider] = useState(50);

  const categories = ['All', 'AI & ML', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hands-on <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Real-world applications implementing convolutional neural networks, computer vision, and scalable full-stack web architectures.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl group"
            >
              {/* Card Banner */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/15" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md">
                    {project.badge}
                  </span>
                  {project.category === 'AI & ML' ? (
                    <Brain className="w-5 h-5 text-white/90" />
                  ) : (
                    <Code className="w-5 h-5 text-white/90" />
                  )}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:translate-x-0.5 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Architecture Details</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div 
            className="glass-card bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {activeModalProject.badge} • {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Project Description
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Special interactive simulation for CNN Denoising Project */}
              {activeModalProject.id === 'underwater-denoising' && (
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3 border border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" /> CNN Denoising Comparison Simulator
                    </span>
                    <span className="text-slate-400 font-mono">
                      Split: {denoiseCompareSlider}%
                    </span>
                  </div>

                  {/* Simulated Image Comparison Canvas */}
                  <div className="relative h-44 rounded-lg overflow-hidden border border-slate-700 select-none bg-slate-950 flex items-center justify-center">
                    {/* Background Simulated Underwater Scenery */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center transition-all"
                      style={{
                        background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0891b2 100%)',
                        filter: `contrast(${100 + (100 - denoiseCompareSlider) * 0.4}%) brightness(${90 + (100 - denoiseCompareSlider) * 0.2}%)`
                      }}
                    >
                      {/* Corals / Marine silhouette */}
                      <div className="text-center space-y-1">
                        <div className="text-3xl font-black tracking-widest text-cyan-200/90 font-mono">
                          OCEAN-VISION
                        </div>
                        <div className="text-xs text-cyan-100/70">
                          Coral Reef & Subsea Habitat Survey
                        </div>
                      </div>
                    </div>

                    {/* Noisy overlay (simulating raw turbidity / sensor noise) */}
                    <div 
                      className="absolute inset-y-0 left-0 border-r-2 border-amber-400 transition-all pointer-events-none"
                      style={{
                        width: `${denoiseCompareSlider}%`,
                        backgroundColor: 'rgba(15, 23, 42, 0.4)',
                        backdropFilter: 'blur(3px) contrast(80%) sepia(35%)',
                        backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '8px 8px'
                      }}
                    >
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-amber-500/80 text-[10px] font-bold text-slate-950">
                        RAW TURBID NOISE
                      </div>
                    </div>

                    {/* Clear overlay marker */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-500/80 text-[10px] font-bold text-slate-950">
                      CNN RESTORED
                    </div>
                  </div>

                  {/* Slider Control */}
                  <div className="space-y-1">
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      value={denoiseCompareSlider}
                      onChange={(e) => setDenoiseCompareSlider(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Turbid Noisy Image</span>
                      <span>Slide to compare restoration</span>
                      <span>Enhanced Deep CNN</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Full Architecture Highlights */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Architecture & Implementation Details
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Tech Stack Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md shadow-indigo-600/20"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
