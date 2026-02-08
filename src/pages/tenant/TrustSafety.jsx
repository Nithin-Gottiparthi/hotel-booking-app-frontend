import { Icons } from '../../components/ui/Icons';

export default function TrustSafety() {
    const initiatives = [
        {
            icon: Icons.Shield,
            title: "Identity Verification",
            desc: "Every host and guest on Vibestey goes through a rigorous identity check. We use AI-powered ID verification to ensure our community is real."
        },
        {
            icon: Icons.Lock,
            title: "Secure Payments",
            desc: "Your money is safe with us. We hold payments until 24 hours after check-in to ensure the property matches the description."
        },
        {
            icon: Icons.Home,
            title: "VibeCover Protection",
            desc: "Every booking includes free protection against liability, damage to property, and unexpected cancellations."
        },
        {
            icon: Icons.Phone,
            title: "24/7 Support",
            desc: "Our global support team is available around the clock to help with any safety concerns or emergencies."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-slate-900 text-white py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <Icons.Shield className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-serif mb-6">Trust & Safety</h1>
                    <p className="text-xl text-slate-300 font-light">
                        Building a community requires trust. Here's how we keep you safe on every trip.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {initiatives.map((item, index) => (
                        <div key={index} className="flex gap-6 group hover:translate-y-[-5px] transition-transform duration-300">
                            <div className="w-16 h-16 shrink-0 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-slate-50 rounded-3xl p-10 md:p-16 text-center">
                    <h2 className="text-3xl font-serif text-slate-900 mb-6">Have a safety concern?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                        Our Safety Center is equipped with tools to help you before, during, and after your trip.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
                            Visit Safety Center
                        </button>
                        <button className="px-8 py-4 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                            Contact Emergency Line
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
