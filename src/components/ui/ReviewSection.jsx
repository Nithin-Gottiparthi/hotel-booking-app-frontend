import { Icons } from './Icons';

export default function ReviewSection({ property }) {
    // Mock metrics data driven by the overall rating
    const rating = property.rating || 4.5;
    const metrics = [
        { name: 'Cleanliness', score: (rating * 0.98).toFixed(1) },
        { name: 'Accuracy', score: rating },
        { name: 'Check-in', score: 5.0 },
        { name: 'Communication', score: 4.9 },
        { name: 'Location', score: 4.8 },
        { name: 'Value', score: (rating * 0.95).toFixed(1) },
    ];

    // Mock Reviews Data
    const reviews = [
        {
            id: 1,
            user: "Sarah Jenkins",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
            date: "October 2023",
            rating: 5,
            comment: "Absolutely stunning place! The views were breathtaking and the host was incredibly accommodating. The pool was pristine and heated exactly as requested. Highly recommend for a weekend gateway.",
        },
        {
            id: 2,
            user: "Rahul Mehta",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            date: "September 2023",
            rating: 4,
            comment: "Great location and very spacious rooms. The food was delicious, especially the local cuisine. Only minor issue was the wifi speed in the bedroom, but who needs wifi with such a view?",
        },
        {
            id: 3,
            user: "Emily Chen",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
            date: "August 2023",
            rating: 5,
            comment: "One of the best stays I've ever had. It felt like a home away from home but with luxury hotel service. The farmhouse has a magical vibe at sunset. Will definitely come back!",
        },
        {
            id: 4,
            user: "Arjun Reddy",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
            date: "July 2023",
            rating: 5,
            comment: "Perfect spot for our college reunion. Massive space, great sound system, and no restrictions on late-night fun. The caretaker was exceedingly helpful.",
        }
    ];

    return (
        <div className="py-12 border-t border-slate-200">
            <h2 className="text-2xl font-serif text-slate-900 mb-8 flex items-center gap-2">
                <Icons.Star className="w-6 h-6 text-slate-900" fill="currentColor" />
                {rating} · {reviews.length * 7} Reviews
            </h2>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12">
                {metrics.map((metric) => (
                    <div key={metric.name} className="flex items-center justify-between">
                        <span className="text-slate-700 font-medium">{metric.name}</span>
                        <div className="flex items-center gap-3 w-1/2">
                            <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-slate-900 rounded-full"
                                    style={{ width: `${(metric.score / 5) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-bold text-slate-900 w-6">{metric.score}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={review.avatar}
                                alt={review.user}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-bold text-slate-900">{review.user}</h4>
                                <p className="text-sm text-slate-500">{review.date}</p>
                            </div>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                            {review.comment}
                        </p>
                    </div>
                ))}
            </div>

            <button className="mt-10 px-6 py-3 border border-slate-900 rounded-lg font-bold text-slate-900 hover:bg-slate-50 transition-colors">
                Show all {reviews.length * 7} reviews
            </button>
        </div>
    );
}
