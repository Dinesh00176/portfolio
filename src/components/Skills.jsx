import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';
import { 
  Brain, 
  Code2, 
  Database, 
  FileCode, 
  Sparkles, 
  CheckCircle, 
  Cpu, 
  Layers, 
  Terminal,
  Server
} from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...technicalSkills.map(c => c.category)];

  const categoryIcons = {
    'AI & ML': <Brain className="w-5 h-5 text-indigo-500" />,
    'Web Technologies': <Code2 className="w-5 h-5 text-cyan-500" />,
    'Programming Languages': <Terminal className="w-5 h-5 text-violet-500" />,
    'Databases': <Database className="w-5 h-5 text-emerald-500" />
  };

  const filteredCategories = selectedCategory === 'All' 
    ? technicalSkills 
    : technicalSkills.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="gradient-text">Skills & Toolset</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Specialized toolkit spanning artificial intelligence, deep learning models, modern web technologies, and database architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold scale-105'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {cat !== 'All' && categoryIcons[cat]}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/60 dark:border-indigo-800/60">
                      {categoryIcons[group.category]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {group.skills.length} core technologies
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Verified
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Individual Skills List */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200/40 dark:border-indigo-800/40">
                          {skill.level}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 pl-6">
                        {skill.tag}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Tag Strip */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-2">
                {group.skills.map(s => (
                  <span
                    key={s.name}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    #{s.name.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Technical Architecture Matrix Banner */}
        <div className="mt-14 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-500/25">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Full Lifecycle AI & Software Development
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                From data preprocessing, CNN training, and hyperparameter tuning to REST API integration and responsive frontend deployment.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-sm whitespace-nowrap"
            >
              See Skills In Action
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
