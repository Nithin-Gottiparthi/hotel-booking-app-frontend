// Contact Us Page

import { useState } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 text-xl">📍</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Headquarters</h3>
                                    <p className="text-gray-600">123, Tech Park, Sector 4<br />Bangalore, India 560102</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 text-xl">📧</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">support@vibestey.com</p>
                                    <p className="text-gray-600">partners@vibestey.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 text-xl">📞</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                                    <p className="text-gray-600">+91 1800-123-4567</p>
                                    <p className="text-sm text-gray-500">Mon-Fri, 9am to 6pm</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t">
                            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 cursor-pointer">FB</span>
                                <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 cursor-pointer">TW</span>
                                <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 cursor-pointer">IG</span>
                                <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 cursor-pointer">LI</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">✓</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-6 text-indigo-600 font-semibold hover:underline">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                                <Input label="Your Name" placeholder="John Doe" required />
                                <Input label="Email Address" type="email" placeholder="john@example.com" required />
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Subject</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                                        <option>General Inquiry</option>
                                        <option>Booking Issue</option>
                                        <option>Partner Inquiry</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>
                                <Button type="submit" fullWidth size="lg">Send Message</Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
