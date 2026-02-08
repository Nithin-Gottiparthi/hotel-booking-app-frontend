// Terms of Service Page

export default function Terms() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
                    <p className="text-sm text-gray-600 mb-8">Last updated: February 2026</p>

                    <div className="space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed">
                                By accessing and using Vibestey, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of Service</h2>
                            <p className="leading-relaxed mb-2">
                                Vibestey provides a platform for booking accommodations and event services. You agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the security of your account</li>
                                <li>Not use the service for any illegal purposes</li>
                                <li>Respect the rights of property owners and other users</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Bookings and Payments</h2>
                            <p className="leading-relaxed">
                                All bookings are subject to availability and confirmation. Payment terms and cancellation policies vary by property and are clearly stated during the booking process.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. User Responsibilities</h2>
                            <p className="leading-relaxed">
                                Users are responsible for their conduct while using our platform and during their stay at booked properties. Any damage or violation of property rules may result in additional charges.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                Vibestey acts as a platform connecting users with property owners. We are not responsible for the quality, safety, or legality of the properties listed on our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Changes to Terms</h2>
                            <p className="leading-relaxed">
                                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact Information</h2>
                            <p className="leading-relaxed">
                                For questions about these Terms of Service, please contact us at legal@vibestey.com
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 pt-8 border-t">
                        <p className="text-sm text-gray-600 text-center">
                            This is a demonstration platform. These terms are for illustrative purposes only.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
