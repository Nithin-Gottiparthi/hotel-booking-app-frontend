// Owner Onboarding - "The Welcome"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../../components/ui/Icons';

export default function OwnerOnboarding() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">

                {/* Visual Progress */}
                <div className="flex justify-center gap-2 mb-12">
                    <div className={`w-2 h-2 rounded-full transition-colors ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                    <div className={`w-2 h-2 rounded-full transition-colors ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                    <div className={`w-2 h-2 rounded-full transition-colors ${step >= 3 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                </div>

                <div className="text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-100">
                        <Icons.User className="w-8 h-8" />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-4 block">The Welcome</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                        Welcome to the <br /> curator's circle.
                    </h1>
                    <p className="text-lg text-slate-500 max-w-lg mx-auto mb-12 leading-relaxed">
                        We're thrilled to have you. Let's finish setting up your profile so you can start sharing your haven with the world.
                    </p>

                    <div className="space-y-4 max-w-sm mx-auto">
                        <button
                            onClick={() => navigate('/owner/properties/add')}
                            className="w-full py-4 bg-slate-900 text-white rounded-sm font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                        >
                            List Your First Property
                        </button>
                        <button
                            onClick={() => navigate('/owner')}
                            className="w-full py-4 bg-white border border-slate-200 text-slate-900 rounded-sm font-medium hover:bg-slate-50 transition-colors"
                        >
                            Explore Dashboard
                        </button>
                    </div>

                    <p className="text-xs text-slate-400 mt-8">
                        By continuing, you agree to our curation standards & terms.
                    </p>
                </div>

            </div>
        </div>
    );
}
