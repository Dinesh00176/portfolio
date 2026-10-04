import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Brain, 
  Sparkles, 
  Code2, 
  Layers, 
  ArrowRight, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Copy, 
  Check, 
  GraduationCap,
  Cpu,
  Terminal,
  Play
} from 'lucide-react';

const Hero = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('cnn');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI / ML Internships & Projects</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Brain className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                <span>{personalInfo.title}</span>
              </p>
            </div>

            {/* Academic Credential Pill */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="leading-snug">
                <div className="font-semibold text-slate-900 dark:text-white">
                  {personalInfo.degree}
                </div>
                <div className="text-slate-500 dark:text-slate-400">
                  {personalInfo.institution} • <span className="font-mono text-indigo-600 dark:text-indigo-400 font-medium">{personalInfo.batch}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {personalInfo.summary}
            </p>

            {/* Action Buttons (NO download buttons included) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 hover:text-indigo-600 dark:hover:text-indigo-300 border border-slate-200 dark:border-slate-700/60 transition"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="font-mono">dinesh060708@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-medium text-xs tracking-wider uppercase text-slate-400 dark:text-slate-500">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-slate-200 dark:border-slate-700 transition"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 border border-slate-200 dark:border-slate-700 transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 border border-slate-200 dark:border-slate-700 transition"
                  aria-label="Phone Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Chennai, Tamil Nadu, India
              </span>
            </div>

          </div>

          {/* Right Column: Interactive AI/ML Terminal & Stats Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-20 blur-xl"></div>
              
              {/* Terminal Box */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-300 font-mono text-xs">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-indigo-400" />
                    <span>dinesh@easwari-cse-aiml: ~</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                    Live
                  </div>
                </div>

                {/* Switcher tabs */}
                <div className="flex border-b border-slate-800/80 bg-slate-950/40 text-[11px]">
                  <button
                    onClick={() => setActiveTab('cnn')}
                    className={`flex-1 py-2 px-3 text-center transition ${
                      activeTab === 'cnn'
                        ? 'border-b-2 border-indigo-500 text-indigo-400 bg-indigo-950/20 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    cnn_denoise.py
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`flex-1 py-2 px-3 text-center transition ${
                      activeTab === 'stack'
                        ? 'border-b-2 border-indigo-500 text-indigo-400 bg-indigo-950/20 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    engineer_profile.json
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-5 space-y-3 min-h-[310px]">
                  {activeTab === 'cnn' ? (
                    <div className="space-y-2">
                      <div className="text-slate-500"># Convolutional Denoising Model Pipeline</div>
                      <div>
                        <span className="text-indigo-400">import</span> tensorflow <span className="text-indigo-400">as</span> tf<br />
                        <span className="text-indigo-400">import</span> cv2, numpy <span className="text-indigo-400">as</span> np
                      </div>
                      <div className="pt-1">
                        <span className="text-indigo-400">class</span> <span className="text-cyan-300">UnderwaterDenoiseCNN</span>(tf.keras.Model):<br />
                        &nbsp;&nbsp;<span className="text-indigo-400">def</span> <span className="text-amber-300">__init__</span>(self):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;super().__init__()<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;self.conv1 = Conv2D(64, (3, 3), activation=<span className="text-emerald-300">'relu'</span>)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;self.conv2 = Conv2D(32, (3, 3), activation=<span className="text-emerald-300">'relu'</span>)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;self.recon = Conv2D(3, (3, 3), activation=<span className="text-emerald-300">'sigmoid'</span>)
                      </div>
                      <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800/80 space-y-1">
                        <div className="flex justify-between items-center text-emerald-400">
                          <span>✓ Training Epoch 50/50</span>
                          <span>Loss: 0.0142 | PSNR: 32.8 dB</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-1.5 w-full" />
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Model status: Enhanced contrast + restored turbidity
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div>&#123;</div>
                      <div className="pl-4">
                        <span className="text-indigo-300">"developer"</span>: <span className="text-emerald-300">"M. Dinesh Kumar"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-indigo-300">"education"</span>: <span className="text-emerald-300">"Easwari Engineering College"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-indigo-300">"degree"</span>: <span className="text-cyan-300">"B.E. CSE (AI & ML)"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-indigo-300">"timeline"</span>: <span className="text-amber-300">"2024 - 2028"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-indigo-300">"primary_stack"</span>: [
                        <div className="pl-4 text-emerald-300">
                          "Python", "TensorFlow", "OpenCV",<br />
                          "React", "Node.js", "Java Spring Boot"
                        </div>
                        ],
                      </div>
                      <div className="pl-4">
                        <span className="text-indigo-300">"internship"</span>: <span className="text-emerald-300">"TechnoHacks Solutions"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-indigo-300">"available_for_hire"</span>: <span className="text-cyan-400">true</span>
                      </div>
                      <div>&#125;</div>
                    </div>
                  )}
                </div>

                {/* Terminal Footer Bar */}
                <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span>TensorFlow 2.x • OpenCV 4.x</span>
                  </div>
                  <span className="text-slate-500">React 18 + Tailwind</span>
                </div>

              </div>

              {/* Floating feature badge */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 glass-card p-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-200 dark:border-slate-700/80">
                <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-md">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">AI/ML & Vision</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">CNNs, Denoising & Deep Learning</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
