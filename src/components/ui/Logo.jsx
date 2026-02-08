export default function Logo({ className = "", variant = "colored" }) {
    // variant: "colored" | "white"

    // Brand Colors
    const colorPrimary = "#4f46e5"; // Indigo-600
    const colorDark = "#0f172a";    // Slate-900
    const colorWhite = "#ffffff";

    const mainColor = variant === "white" ? colorWhite : colorPrimary;
    const secondaryColor = variant === "white" ? "rgba(255,255,255,0.8)" : colorDark;

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform hover:rotate-6 duration-500 ease-out"
            >
                <defs>
                    <linearGradient id="logoGradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                        <stop stopColor={variant === "white" ? "#fff" : "#6366f1"} />
                        <stop offset="1" stopColor={variant === "white" ? "#e0e7ff" : "#4338ca"} />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Abstract 'V' - Elegant Ribbon Style */}
                <path
                    d="M12 10C12 8 14 6 16 8L24 16L32 8C34 6 36 8 36 10V22L24 38L12 22V10Z"
                    fill={secondaryColor}
                    fillOpacity="0.1"
                />

                {/* Main V Shape - Modern & Sharp */}
                <path
                    d="M8 8L24 40L40 8"
                    stroke="url(#logoGradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    opacity="0.3"
                />
                <path
                    d="M8 8L24 40L40 8"
                    stroke="url(#logoGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Diamond/Gem Center Accent */}
                <rect
                    x="24"
                    y="16"
                    width="6"
                    height="6"
                    transform="translate(-3 -3) rotate(45 24 16)"
                    fill={mainColor}
                    className="animate-pulse"
                />
            </svg>

            {/* Text Logo - Kept exactly as requested */}
            <div className="flex flex-col -space-y-1">
                <span className={`font-serif text-2xl font-bold tracking-tight ${variant === "white" ? "text-white" : "text-slate-900"}`}>
                    Vibestey
                </span>
                <span className={`text-[0.6rem] font-sans tracking-widest uppercase font-medium ml-0.5 ${variant === "white" ? "text-white/80" : "text-indigo-600"}`}>
                    Premium Stays
                </span>
            </div>
        </div>
    );
}
