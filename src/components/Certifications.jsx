import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Plus, 
  Search, 
  CheckCircle2, 
  Calendar, 
  Building, 
  X,
  Upload,
  Image as ImageIcon,
  Maximize2,
  Eye,
  Link as LinkIcon,
  Trash2
} from 'lucide-react';

const STORAGE_KEY = 'dinesh_custom_certifications_v1';

const loadSavedCertifications = () => {
  if (typeof window === 'undefined') return [];

  // Clear out any old keys that held the pre-populated default certs
  const oldKeys = [
    'dinesh_portfolio_certifications_v1',
    'dinesh_portfolio_certifications_v2',
    'dinesh_portfolio_certifications_v3',
    'dinesh_portfolio_certifications'
  ];

  for (const oldKey of oldKeys) {
    try {
      localStorage.removeItem(oldKey);
    } catch (e) {}
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        // Filter out any remnant default items if they somehow exist
        return parsed.filter(item => !['cert-1', 'cert-2', 'cert-3', 'cert-4'].includes(item.id));
      }
    }
  } catch (e) {
    console.error('Failed to parse certifications from storage', e);
  }

  // Start with an empty list so user can add manually
  return [];
};

const Certifications = () => {
  const [certifications, setCertifications] = useState(loadSavedCertifications);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activePreviewCert, setActivePreviewCert] = useState(null);
  const [notification, setNotification] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    year: new Date().getFullYear().toString(),
    category: 'AI & ML',
    image: '',
    description: ''
  });
  const [imageUploadType, setImageUploadType] = useState('file'); // 'file' | 'url'
  const [imagePreview, setImagePreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const fileInputRef = useRef(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(certifications));
    } catch (e) {
      console.error('Failed to save certifications', e);
    }
  }, [certifications]);

  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Handle local file upload and convert to optimized base64
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFormErrors(prev => ({ ...prev, image: 'Please select a valid image file.' }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const scale = Math.min(1, MAX_WIDTH / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);

        setImagePreview(dataUrl);
        setFormData(prev => ({ ...prev, image: dataUrl }));
        setFormErrors(prev => ({ ...prev, image: null }));
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setFormData(prev => ({ ...prev, image: url }));
    setImagePreview(url);
    if (formErrors.image) {
      setFormErrors(prev => ({ ...prev, image: null }));
    }
  };

  const handleAddCertification = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.title.trim()) errors.title = 'Certification title is required';
    if (!formData.issuer.trim()) errors.issuer = 'Issuing organization is required';
    if (!formData.year.trim()) errors.year = 'Year is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newCert = {
      id: `cert-${Date.now()}`,
      title: formData.title.trim(),
      issuer: formData.issuer.trim(),
      year: formData.year.trim(),
      category: formData.category,
      image: formData.image || '',
      description: formData.description.trim() || 'Verified professional certification in core engineering domain.'
    };

    setCertifications(prev => [newCert, ...prev]);
    setIsAddModalOpen(false);
    setFormData({
      title: '',
      issuer: '',
      year: new Date().getFullYear().toString(),
      category: 'AI & ML',
      image: '',
      description: ''
    });
    setImagePreview(null);
    setFormErrors({});
    showToast(`Added "${newCert.title}" successfully!`);
  };

  // Categories list
  const allCategories = ['All', ...new Set(certifications.map(c => c.category))];

  // Filtering
  const filteredCerts = certifications.filter(cert => {
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-white text-sm font-medium ${
              notification.type === 'info' ? 'bg-slate-800 border border-slate-700' : 'bg-emerald-600'
            }`}>
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>{notification.message}</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Showcase your verified certifications, degrees, and licenses. You can add your certificates and upload proof images directly.
          </p>
        </div>

        {/* Controls Toolbar: Show when certifications exist OR show simplified add bar */}
        {certifications.length > 0 && (
          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 mb-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by certification name or issuer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Add Certification Button */}
              <button
                onClick={() => {
                  setImagePreview(null);
                  setIsAddModalOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add Certification</span>
              </button>

            </div>

            {/* Category Filter Pills (if multiple categories exist) */}
            {allCategories.length > 1 && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                <span className="text-xs font-medium text-slate-400 mr-1">Filter by:</span>
                {allCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
                <span className="text-xs text-slate-400 ml-auto">
                  Showing {filteredCerts.length} of {certifications.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Certifications Grid or Empty State */}
        {certifications.length === 0 ? (
          /* Empty Initial State: Inviting Add CTA */
          <div className="glass-card rounded-3xl p-10 sm:p-16 text-center border-2 border-dashed border-slate-300 dark:border-slate-700/80 max-w-xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                No Certifications Added Yet
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                Ready to showcase your credentials! Click below to add your certifications with course titles, issuing organizations, and certificate images.
              </p>
            </div>

            <button
              onClick={() => {
                setImagePreview(null);
                setIsAddModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Certification</span>
            </button>
          </div>
        ) : filteredCerts.length > 0 ? (
          /* Populated Grid of User-Added Certifications */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                {/* Certificate Image Banner */}
                <div 
                  className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden cursor-pointer group/img"
                  onClick={() => setActivePreviewCert(cert)}
                  title="Click to view full certificate image"
                >
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white text-center">
                      <Award className="w-12 h-12 text-indigo-400 mb-2" />
                      <span className="font-bold text-sm tracking-wide">{cert.issuer}</span>
                      <span className="text-xs text-slate-400 mt-1">{cert.title}</span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-white border border-white/20 shadow">
                      {cert.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-indigo-950/80 backdrop-blur-md text-indigo-200 border border-indigo-700/50">
                      {cert.year}
                    </span>
                  </div>

                  {/* View Fullscreen overlay hint */}
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Issuer */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      <Building className="w-3.5 h-3.5" />
                      <span>{cert.issuer}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* Card Footer Bar */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActivePreviewCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Full Certificate</span>
                    </button>

                    <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Search mismatch state */
          <div className="glass-card rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-800 space-y-3 max-w-md mx-auto">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              No certifications matched "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}

      </div>

      {/* Full-Screen Certificate Image Preview Lightbox */}
      {activePreviewCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePreviewCert(null)}
        >
          <div 
            className="glass-card bg-slate-900 text-white rounded-2xl max-w-3xl w-full border border-slate-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/60">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="text-sm font-bold text-white line-clamp-1">
                    {activePreviewCert.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activePreviewCert.issuer} • {activePreviewCert.year}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActivePreviewCert(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Display */}
            <div className="p-4 sm:p-6 bg-slate-950 flex items-center justify-center max-h-[70vh] overflow-hidden">
              {activePreviewCert.image ? (
                <img 
                  src={activePreviewCert.image} 
                  alt={activePreviewCert.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
                />
              ) : (
                <div className="p-12 text-center text-slate-400">
                  <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-40" />
                  <p>No image preview available for this certificate</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs bg-slate-950/80">
              <span className="text-slate-400">
                Category: <strong className="text-white">{activePreviewCert.category}</strong>
              </span>

              <button
                onClick={() => setActivePreviewCert(null)}
                className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Certification Modal (with Image Upload / URL) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div 
            className="glass-card bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Add New Certification
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Enter details and upload or link your certificate image.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddCertification} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Certification Title *
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Master Computer Vision OpenCV in Python"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                    formErrors.title ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50`}
                />
                {formErrors.title && (
                  <p className="text-[11px] text-red-500 mt-1">{formErrors.title}</p>
                )}
              </div>

              {/* Issuer & Year (2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Issuing Organization *
                  </label>
                  <input
                    type="text"
                    name="issuer"
                    placeholder="e.g. Infosys Springboard"
                    value={formData.issuer}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                      formErrors.issuer ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50`}
                  />
                  {formErrors.issuer && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.issuer}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Year *
                  </label>
                  <input
                    type="text"
                    name="year"
                    placeholder="2025"
                    value={formData.year}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                      formErrors.year ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50`}
                  />
                  {formErrors.year && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.year}</p>
                  )}
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <option value="AI & ML">AI & ML</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Databases">Databases</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Cloud / DevOps">Cloud / DevOps</option>
                  <option value="Programming">Programming</option>
                </select>
              </div>

              {/* Certificate Image Addition Section */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                    Certificate Image / Proof (Optional)
                  </label>
                  
                  {/* Selector: Upload file vs Image URL */}
                  <div className="flex rounded-lg bg-slate-200 dark:bg-slate-700 p-0.5 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setImageUploadType('file')}
                      className={`px-2.5 py-1 rounded-md font-medium transition ${
                        imageUploadType === 'file' 
                          ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageUploadType('url')}
                      className={`px-2.5 py-1 rounded-md font-medium transition ${
                        imageUploadType === 'url' 
                          ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Image URL
                    </button>
                  </div>
                </div>

                {/* Upload from Local Device */}
                {imageUploadType === 'file' && (
                  <div>
                    <input 
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-4 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-indigo-500 rounded-xl flex flex-col items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition bg-white dark:bg-slate-800/40"
                    >
                      <Upload className="w-5 h-5 text-indigo-500" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        Click to select an image from your device
                      </span>
                      <span className="text-[10px] text-slate-400">
                        PNG, JPG, WEBP, or SVG
                      </span>
                    </button>
                  </div>
                )}

                {/* Provide Image URL */}
                {imageUploadType === 'url' && (
                  <div className="space-y-1.5">
                    <div className="relative">
                      <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="url"
                        placeholder="https://example.com/my-certificate.png"
                        value={formData.image}
                        onChange={handleUrlChange}
                        className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                  </div>
                )}

                {/* Image Preview Box */}
                {imagePreview && (
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 h-32 flex items-center justify-center">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="max-h-full max-w-full object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData(prev => ({ ...prev, image: '' }));
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                      className="absolute top-2 right-2 p-1 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition"
                      title="Remove image"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] text-emerald-400 font-mono">
                      Image attached
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Brief Summary / Topics Covered (Optional)
                </label>
                <textarea
                  name="description"
                  rows={2}
                  placeholder="Key concepts, algorithms, or practical skills acquired..."
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>

              {/* Modal Buttons */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition"
                >
                  Add Certification
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
