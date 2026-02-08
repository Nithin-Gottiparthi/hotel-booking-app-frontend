// Add Property Page - "The Studio"
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Icons } from '../../components/ui/Icons';
import Button from '../../components/ui/Button';

const STEPS = [
    { id: 1, title: 'The Basics', description: 'Name & Location' },
    { id: 2, title: 'The Narrative', description: 'Description & Type' },
    { id: 3, title: 'The Details', description: 'Capacity & Pricing' },
    { id: 4, title: 'Visuals', description: 'Photos & Mood' }
];

export default function AddProperty() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        type: 'resort',
        description: '',
        price: '',
        priceUnit: 'night',
        guests: '',
        bedrooms: '',
        bathrooms: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send data to API
        navigate('/owner/properties');
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-100 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/owner/dashboard" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors">
                            <Icons.ArrowLeft className="w-5 h-5 text-slate-600" />
                        </Link>
                        <div>
                            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">The Studio</span>
                            <h1 className="text-xl font-serif font-bold text-slate-900">Create New Haven</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span className="font-medium text-slate-900">Step {currentStep}</span> of 4
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="h-1 bg-slate-100 w-full">
                    <div
                        className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                    />
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT: FORM AREA */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* STEP 1: BASICS */}
                            {currentStep === 1 && (
                                <div className="animate-fade-in-up">
                                    <h2 className="text-3xl font-serif font-bold mb-2">Let's start with the basics.</h2>
                                    <p className="text-slate-500 mb-8 text-lg">Every great story needs a title and a setting.</p>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Property Title</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white border-b-2 border-slate-200 focus:border-indigo-600 px-0 py-3 text-xl font-serif placeholder:text-slate-300 transition-colors focus:outline-none"
                                                placeholder="e.g. The Glasshouse at Lonavala"
                                                autoFocus
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Location</label>
                                            <div className="relative">
                                                <Icons.Search className="absolute left-0 top-3.5 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    className="w-full bg-transparent border-b border-slate-200 focus:border-indigo-600 pl-8 pr-0 py-3 text-lg transition-colors focus:outline-none"
                                                    placeholder="e.g. Lonavala, Maharashtra"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: NARRATIVE */}
                            {currentStep === 2 && (
                                <div className="animate-fade-in-up">
                                    <h2 className="text-3xl font-serif font-bold mb-2">Set the scene.</h2>
                                    <p className="text-slate-500 mb-8 text-lg">What makes your haven unique?</p>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Property Type</label>
                                            <div className="grid grid-cols-2 gap-4">
                                                {['farmhouse', 'hotel', 'resort', 'villa'].map(type => (
                                                    <button
                                                        key={type}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, type })}
                                                        className={`p-4 border rounded-lg text-left transition-all ${formData.type === type ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600' : 'border-slate-200 hover:border-slate-300'}`}
                                                    >
                                                        <span className="block capitalize font-bold text-slate-900">{type}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">The Story (Description)</label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-slate-200 rounded-lg p-4 text-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-shadow min-h-[200px]"
                                                placeholder="Tell guests what they'll experience..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: DETAILS */}
                            {currentStep === 3 && (
                                <div className="animate-fade-in-up">
                                    <h2 className="text-3xl font-serif font-bold mb-2">The finer details.</h2>
                                    <p className="text-slate-500 mb-8 text-lg">Capacity and investment for your guests.</p>

                                    <div className="space-y-8">
                                        <div className="grid grid-cols-3 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Max Guests</label>
                                                <input
                                                    type="number"
                                                    name="guests"
                                                    value={formData.guests}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border-0 rounded-lg px-4 py-3 text-lg font-bold text-center focus:ring-2 focus:ring-indigo-600"
                                                    placeholder="0"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Bedrooms</label>
                                                <input
                                                    type="number"
                                                    name="bedrooms"
                                                    value={formData.bedrooms}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border-0 rounded-lg px-4 py-3 text-lg font-bold text-center focus:ring-2 focus:ring-indigo-600"
                                                    placeholder="0"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Bathrooms</label>
                                                <input
                                                    type="number"
                                                    name="bathrooms"
                                                    value={formData.bathrooms}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border-0 rounded-lg px-4 py-3 text-lg font-bold text-center focus:ring-2 focus:ring-indigo-600"
                                                    placeholder="0"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-slate-100">
                                            <label className="block text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Pricing Strategy</label>
                                            <div className="flex items-center gap-4">
                                                <span className="text-2xl font-serif text-slate-400">₹</span>
                                                <input
                                                    type="number"
                                                    name="price"
                                                    value={formData.price}
                                                    onChange={handleChange}
                                                    className="w-full bg-transparent border-b-2 border-slate-200 focus:border-indigo-600 text-4xl font-serif font-bold px-0 py-2 focus:outline-none"
                                                    placeholder="15,000"
                                                />
                                                <select
                                                    name="priceUnit"
                                                    value={formData.priceUnit}
                                                    onChange={handleChange}
                                                    className="bg-transparent border-b border-slate-200 py-3 font-medium text-slate-500 focus:outline-none"
                                                >
                                                    <option value="night">/ night</option>
                                                    <option value="day">/ day</option>
                                                    <option value="month">/ month</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 4: VISUALS (Dummy) */}
                            {currentStep === 4 && (
                                <div className="animate-fade-in-up">
                                    <h2 className="text-3xl font-serif font-bold mb-2">Showcase your haven.</h2>
                                    <p className="text-slate-500 mb-8 text-lg">Upload high-quality images to attract guests.</p>

                                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer group">
                                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                                            <span className="text-2xl">📸</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">Drag photos here</h3>
                                        <p className="text-slate-500 mb-6">or click to browse from your device</p>
                                        <button type="button" className="px-6 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold hover:border-slate-400">
                                            Select Files
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* NAVIGATION ACTIONS */}
                            <div className="flex items-center gap-4 pt-12">
                                {currentStep > 1 && (
                                    <Button type="button" variant="outline" onClick={prevStep}>
                                        Back
                                    </Button>
                                )}
                                {currentStep < 4 ? (
                                    <Button type="button" onClick={nextStep} className="ml-auto px-8">
                                        Continue
                                    </Button>
                                ) : (
                                    <Button type="submit" className="ml-auto px-8 w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200">
                                        Publish Listing
                                    </Button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* RIGHT: LIVE PREVIEW */}
                    <div className="hidden lg:block col-span-5">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Live Preview</h3>

                            {/* Card Preview */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="h-64 bg-slate-200 relative">
                                    {/* Placeholder Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                        <span className="text-sm font-medium">Cover Photo</span>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                                        {formData.type || 'Type'}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                                        {formData.name || 'Your Property Title'}
                                    </h4>
                                    <p className="text-slate-500 text-sm mb-4">
                                        {formData.location || 'Location, City'}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
                                        <span>{formData.guests || '-'} Guests</span>
                                        <span>•</span>
                                        <span>{formData.bedrooms || '-'} BEDS</span>
                                        <span>•</span>
                                        <span>{formData.bathrooms || '-'} BATHS</span>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                                        <div>
                                            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Price</p>
                                            <p className="text-xl font-serif text-indigo-600">
                                                ₹{formData.price || '0'} <span className="text-sm text-slate-400 font-sans font-medium">/ {formData.priceUnit}</span>
                                            </p>
                                        </div>
                                        <div className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded">View</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
