// Careers Page

import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function Careers() {
    const openings = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'Remote / Bangalore',
            type: 'Full-time'
        },
        {
            id: 2,
            title: 'Product Designer (UI/UX)',
            department: 'Design',
            location: 'Mumbai',
            type: 'Full-time'
        },
        {
            id: 3,
            title: 'Partner Success Manager',
            department: 'Operations',
            location: 'Delhi',
            type: 'Full-time'
        },
        {
            id: 4,
            title: 'Customer Support Lead',
            department: 'Support',
            location: 'Remote',
            type: 'Full-time'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-indigo-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Vibestey Team</h1>
                    <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
                        We're on a mission to revolutionize hospitality and event experiences in India.
                        Come build the future with us.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold mb-2">Innovation First</h3>
                            <p className="text-gray-600">We push boundaries and are not afraid to break things to build better.</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold mb-2">Customer Obsessed</h3>
                            <p className="text-gray-600">Our users are at the heart of every decision we make.</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-bold mb-2">Impact Driven</h3>
                            <p className="text-gray-600">We aim to create meaningful impact for travellers and hosts alike.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Openings */}
            <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
                <div className="space-y-4">
                    {openings.map((job) => (
                        <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                                    <span>🏢 {job.department}</span>
                                    <span>📍 {job.location}</span>
                                    <span>⏱️ {job.type}</span>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Apply Now</Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-100 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see a fit?</h2>
                <p className="text-gray-600 mb-8">Send us your resume anyway. We're always looking for talent.</p>
                <a href="mailto:careers@vibestey.com" className="text-indigo-600 font-bold hover:underline">careers@vibestey.com</a>
            </div>
        </div>
    );
}
