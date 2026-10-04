import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Sparkles,
  ArrowUpRight,
  Send,
  Calendar,
  GraduationCap
} from 'lucide-react';

const Contact = () => {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Looking for an enthusiastic AI/ML undergraduate for an internship or collaborative project? Connect with Dinesh directly through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                    <Mail className="w-6 h-6" />
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800"
                  >
                    {copiedType === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Email Address
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1 break-all font-mono">
                  {personalInfo.email}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Best for internship proposals, collaboration inquiries, and formal opportunities.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80">
                <a
                  href={`mailto:${personalInfo.email}?subject=AI%2FML%20Internship%20Inquiry%20-%20M.%20Dinesh%20Kumar`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-emerald-300 dark:hover:border-emerald-700 transition group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                    <Phone className="w-6 h-6" />
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800"
                  >
                    {copiedType === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Phone & WhatsApp
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1 font-mono">
                  {personalInfo.phone}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Direct call or WhatsApp available for swift communications.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

          </div>

          {/* Secondary Details: Location & Social Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Location */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-500 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Location
                </span>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Easwari Engineering College Campus
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-slate-400 dark:hover:border-slate-600 transition group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    GitHub
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    @Dinesh00176
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Source Code & Repositories
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-blue-400 dark:hover:border-blue-600 transition group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    LinkedIn
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    M. Dinesh Kumar
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Professional Network & Updates
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </a>

          </div>

          {/* Academic Profile & Internship Status Banner */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Seeking AI/ML Internship</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Interested in working together?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                Ready to contribute in machine learning research, convolutional computer vision models, and full-stack web software. Open for on-site (Chennai) and remote internship opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition"
              >
                <Mail className="w-4 h-4" />
                <span>Email Dinesh</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
