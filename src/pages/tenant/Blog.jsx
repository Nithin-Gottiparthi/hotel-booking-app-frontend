// Blog Page

import { Link } from 'react-router-dom';

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: 'Top 10 Hidden Gem Farmhouses Near Mumbai',
            category: 'Travel Guide',
            date: 'Oct 15, 2023',
            image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800',
            excerpt: 'Discover secret getaways just a few hours drive from the city chaos. Perfect for weekend digital detox.'
        },
        {
            id: 2,
            title: 'How to Plan a Budget Destination Wedding',
            category: 'Events',
            date: 'Oct 10, 2023',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
            excerpt: 'Dream weddings don\'t have to break the bank. Here are 5 tips to save money without compromising on style.'
        },
        {
            id: 3,
            title: 'The Rise of Co-Living Spaces in India',
            category: 'Trends',
            date: 'Oct 05, 2023',
            image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
            excerpt: 'Why millennials are choosing PGs and co-living spaces over traditional apartments. A deep dive into the trend.'
        },
        {
            id: 4,
            title: '5 Best Resorts for Company Offsites',
            category: 'Corporate',
            date: 'Sep 28, 2023',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            excerpt: 'Boost team morale with these amazing corporate retreat locations in Bangalore and Pune.'
        },
        {
            id: 5,
            title: 'Experience Life in a Tea Plantation',
            category: 'Travel Guide',
            date: 'Sep 20, 2023',
            image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800',
            excerpt: 'Munnar called! Here is what it is like to stay in a colonial bungalow in the middle of a tea estate.'
        },
        {
            id: 6,
            title: 'Safety Tips for Solo Female Travelers',
            category: 'Safety',
            date: 'Sep 15, 2023',
            image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
            excerpt: 'Essential safety tips and trusted stay options for women traveling alone in India.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">The Vibestey Blog</h1>
                    <p className="text-xl text-gray-600">Stories, guides, and inspiration for your next journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 mb-3">
                                    <span className="bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wide">{post.category}</span>
                                    <span className="text-gray-400 font-normal">{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="text-indigo-600 font-semibold text-sm hover:underline">Read More →</div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        Load More Articles
                    </button>
                </div>
            </div>
        </div>
    );
}
