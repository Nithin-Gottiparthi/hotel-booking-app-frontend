// Privacy Policy Page

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                    <p className="text-sm text-gray-600 mb-8">Last updated: February 2026</p>

                    <div className="space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
                            <p className="leading-relaxed mb-2">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Name, email address, and phone number</li>
                                <li>Payment information</li>
                                <li>Booking preferences and history</li>
                                <li>Communication with customer support</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
                            <p className="leading-relaxed mb-2">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Process your bookings and payments</li>
                                <li>Send booking confirmations and updates</li>
                                <li>Provide customer support</li>
                                <li>Improve our services</li>
                                <li>Send promotional communications (with your consent)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Information Sharing</h2>
                            <p className="leading-relaxed">
                                We share your information with property owners to facilitate bookings. We do not sell your personal information to third parties. We may share information when required by law or to protect our rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h2>
                            <p className="leading-relaxed">
                                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
                            <p className="leading-relaxed mb-2">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies</h2>
                            <p className="leading-relaxed">
                                We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Changes to Privacy Policy</h2>
                            <p className="leading-relaxed">
                                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us at privacy@vibestey.com
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 pt-8 border-t">
                        <p className="text-sm text-gray-600 text-center">
                            This is a demonstration platform. This privacy policy is for illustrative purposes only.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
