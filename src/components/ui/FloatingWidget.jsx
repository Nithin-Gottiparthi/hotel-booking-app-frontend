import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FloatingWidget() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Slide in gently after load
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed bottom-4 right-4 z-50 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
            <style>
                {`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-10deg); }
                    75% { transform: rotate(10deg); }
                }
                @keyframes blink {
                    0%, 96%, 100% { transform: scaleY(1); }
                    98% { transform: scaleY(0.1); }
                }
                .animate-float-mild {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-wave-hand {
                    transform-origin: bottom center;
                    animation: wave 3s ease-in-out infinite;
                }
                .animate-eyes {
                    transform-origin: center;
                    animation: blink 4s infinite;
                }
                `}
            </style>

            {/* Container for the Mascot */}
            <div
                className="relative group cursor-pointer animate-float-mild"
                onClick={() => navigate('/inbox')}
                title="Need help? Chat with us!"
            >
                {/* Speech Bubble (Hidden by default, appears on hover) */}
                <div className="absolute bottom-full right-0 mb-2 w-32 bg-white px-3 py-2 rounded-2xl rounded-tr-none shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-[10px] font-bold text-slate-600">Hi! Need help with your trip?</p>
                </div>

                {/* Vibe Buddy SVG Character */}
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl hover:scale-105 transition-transform duration-300">
                    {/* Shadow */}
                    <ellipse cx="50" cy="90" rx="25" ry="5" fill="#000" fillOpacity="0.1" />

                    {/* Body */}
                    <rect x="25" y="30" width="50" height="50" rx="16" fill="#6366f1" /> {/* Indigo-500 */}
                    <rect x="25" y="30" width="50" height="50" rx="16" fill="url(#paint0_linear)" fillOpacity="0.4" />

                    {/* Screen/Face */}
                    <rect x="35" y="42" width="30" height="24" rx="8" fill="#1e1b4b" /> {/* Slate-950 */}

                    {/* Eyes Container */}
                    <g className="animate-eyes">
                        {/* Left Eye */}
                        <circle cx="44" cy="52" r="3" fill="#bef264" /> {/* Lime-300 */}
                        {/* Right Eye */}
                        <circle cx="56" cy="52" r="3" fill="#bef264" />
                    </g>

                    {/* Smile */}
                    <path d="M46 58 Q50 61 54 58" stroke="#bef264" strokeWidth="2" strokeLinecap="round" />

                    {/* Antenna */}
                    <line x1="50" y1="30" x2="50" y2="20" stroke="#6366f1" strokeWidth="4" />
                    <circle cx="50" cy="18" r="4" fill="#ef4444" className="animate-pulse" />

                    {/* Waving Hand */}
                    <g className="animate-wave-hand" style={{ transformOrigin: '75px 60px' }}>
                        <circle cx="82" cy="55" r="8" fill="#6366f1" />
                        <circle cx="82" cy="55" r="8" fill="url(#paint0_linear)" fillOpacity="0.4" />
                    </g>

                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id="paint0_linear" x1="25" y1="30" x2="75" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.5" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
