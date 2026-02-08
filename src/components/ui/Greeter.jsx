import { useState, useEffect } from 'react';

export default function Greeter() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExcited, setIsExcited] = useState(false);

    useEffect(() => {
        // Initial slide in delay
        const initialDelay = setTimeout(() => {
            setIsVisible(true);

            // Start the cycle AFTER the initial appearance
            // Cycle: Visible (20s) -> Hidden (10s) -> Repeat
            const runCycle = () => {
                // Phase 1: Already Visible (ON). Wait 20s, then hide.
                setTimeout(() => {
                    setIsVisible(false);

                    // Phase 2: Hidden (OFF). Wait 10s, then show again.
                    setTimeout(() => {
                        setIsVisible(true);
                        // Loop: recursive call to start Phase 1 again
                        runCycle();
                    }, 10000);

                }, 20000);
            };

            runCycle();

        }, 2500);

        return () => clearTimeout(initialDelay);
    }, []);

    const handleInteraction = () => {
        setIsExcited(true);
        setTimeout(() => setIsExcited(false), 3000);
    };

    return (
        <div
            className={`fixed bottom-0 left-6 z-50 transition-all duration-1000 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
            <style>
                {`
                @keyframes breathe {
                    0%, 100% { transform: scale(1) translateY(0); }
                    50% { transform: scale(1.02) translateY(-5px); }
                }
                @keyframes tilt {
                    0%, 100% { transform: rotate(-2deg); }
                    50% { transform: rotate(2deg); }
                }
                @keyframes jump {
                    0%, 100% { transform: translateY(0) scale(1); }
                    25% { transform: translateY(-20px) scale(1.1); }
                    50% { transform: translateY(0) scale(1); }
                    75% { transform: translateY(-10px) scale(1.05); }
                }
                .animate-alive {
                    animation: breathe 4s ease-in-out infinite, tilt 5s ease-in-out infinite;
                }
                .animate-jump {
                    animation: jump 0.8s ease-in-out infinite;
                }
                `}
            </style>

            <div className="relative group">
                {/* Speech Bubble - Always visible when component is visible */}
                <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white/95 backdrop-blur-md rounded-2xl rounded-bl-sm p-3 shadow-xl border border-slate-100 animate-bounce"
                    style={{ animationDuration: '3s' }}
                >
                    <p className="text-xs font-semibold text-slate-700 leading-snug text-center">
                        {isExcited ? "Yay! So happy to see you! 🎉" : <>"Welcome to Vibestey! Let's find your perfect stay." <span className="text-base">✨</span></>}
                    </p>
                    {/* Arrow */}
                    <div className="absolute top-full left-6 w-3 h-3 bg-white/95 backdrop-blur-md transform rotate-45 -translate-y-2 border-r border-b border-slate-100"></div>
                </div>

                {/* 3D Character Image */}
                <div
                    className={`w-24 filter drop-shadow-2xl hover:scale-105 transition-transform duration-300 origin-bottom cursor-pointer ${isExcited ? 'animate-jump' : 'animate-alive'}`}
                    onClick={handleInteraction}
                    title="Click me for a surprise!"
                >
                    <img
                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Tipping%20Hand.png"
                        alt="Virtual Host"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
