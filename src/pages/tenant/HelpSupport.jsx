// Help & Support Page

import { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

export default function HelpSupport() {
    const [activeCategory, setActiveCategory] = useState('booking');
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const faqs = {
        booking: [
            {
                question: 'How do I book a property?',
                answer: 'Browse properties, select your dates and guests, then click "Book Now". You\'ll be guided through the booking process.'
            },
            {
                question: 'Can I cancel my booking?',
                answer: 'Yes, you can cancel bookings from the "My Bookings" page. Cancellation policies vary by property.'
            },
            {
                question: 'How do I modify my booking?',
                answer: 'Contact us through the support form or reach out to the property owner directly through your booking details.'
            }
        ],
        payment: [
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit/debit cards, UPI, net banking, and digital wallets.'
            },
            {
                question: 'Is my payment information secure?',
                answer: 'Yes, all payments are processed through secure, encrypted channels.'
            },
            {
                question: 'When will I be charged?',
                answer: 'Payment is processed immediately upon booking confirmation.'
            }
        ],
        account: [
            {
                question: 'How do I create an account?',
                answer: 'Click on "Sign Up" in the navigation bar and fill in your details to create an account.'
            },
            {
                question: 'I forgot my password. What should I do?',
                answer: 'Click on "Forgot Password" on the login page and follow the instructions to reset your password.'
            },
            {
                question: 'How do I update my profile?',
                answer: 'Go to "My Profile" from the user menu and click "Edit Profile" to update your information.'
            }
        ]
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Support request submitted! (dummy action)');
        setContactForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
                <p className="text-gray-600 mb-8">Find answers to common questions or contact us</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* FAQ Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                            {/* Category Tabs */}
                            <div className="flex gap-2 mb-6 border-b">
                                {[
                                    { value: 'booking', label: 'Booking' },
                                    { value: 'payment', label: 'Payment' },
                                    { value: 'account', label: 'Account' }
                                ].map((category) => (
                                    <button
                                        key={category.value}
                                        onClick={() => setActiveCategory(category.value)}
                                        className={`
                      px-4 py-2 font-medium transition-colors
                      ${activeCategory === category.value
                                                ? 'text-indigo-600 border-b-2 border-indigo-600'
                                                : 'text-gray-600 hover:text-gray-900'
                                            }
                    `}
                                    >
                                        {category.label}
                                    </button>
                                ))}
                            </div>

                            {/* FAQ List */}
                            <div className="space-y-4">
                                {faqs[activeCategory].map((faq, index) => (
                                    <div key={index} className="border-b pb-4 last:border-0">
                                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-sm sticky top-20">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-sm text-gray-600 mb-6">
                                Can't find what you're looking for? Send us a message.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <Input
                                    label="Name"
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                    required
                                />

                                <Input
                                    label="Email"
                                    type="email"
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                    required
                                />

                                <Input
                                    label="Subject"
                                    value={contactForm.subject}
                                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                    required
                                />

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        value={contactForm.message}
                                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>

                                <Button type="submit" fullWidth>
                                    Send Message
                                </Button>
                            </form>

                            <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span>📧</span>
                                    <span>support@vibestey.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>📞</span>
                                    <span>+91 XXXXX XXXXX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
