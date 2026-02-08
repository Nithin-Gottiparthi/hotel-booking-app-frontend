// Booking Flow Page - "Secure Your Haven"
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Icons } from '../../components/ui/Icons';
import Button from '../../components/ui/Button';

export default function BookingFlow() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { property, checkIn, checkOut, guests } = location.state || {};
    const [step, setStep] = useState(1); // 1: Details, 2: Payment
    const [loading, setLoading] = useState(false);

    const [contactInfo, setContactInfo] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || ''
    });

    const [paymentMethod, setPaymentMethod] = useState('card');

    if (!property) {
        navigate('/explore');
        return null;
    }

    const calculateNights = () => {
        if (!checkIn || !checkOut) return 1;
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        return nights > 0 ? nights : 1;
    };

    const nights = calculateNights();
    const totalAmount = property.price * nights;

    const handleConfirmBooking = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            const bookingId = `BK-${Date.now().toString().slice(-6)}`;
            navigate('/booking-success', {
                state: {
                    bookingId,
                    property,
                    checkIn,
                    checkOut,
                    guests,
                    nights,
                    totalPrice: totalAmount
                }
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pt-24 pb-12">
            <div className="max-w-6xl mx-auto px-6">

                {/* BACK BUTTON */}
                <button onClick={() => navigate(-1)} className="flex items-center text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                    <Icons.ChevronLeft className="w-4 h-4 mr-1" /> Back to property
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT COLUMN - STEPS */}
                    <div className="lg:col-span-2">
                        <div className="mb-10">
                            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-2 block">
                                Step {step} of 2
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                                {step === 1 ? 'Your Details' : 'Secure Payment'}
                            </h1>
                        </div>

                        {/* STEP 1: DETAILS */}
                        {step === 1 && (
                            <div className="animate-fade-in-up">
                                <section className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 mb-8">
                                    <h3 className="font-serif text-2xl mb-6">Guest Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                value={contactInfo.name}
                                                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                                                className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 px-4 py-3 outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={contactInfo.phone}
                                                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                                                className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 px-4 py-3 outline-none transition-colors"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                value={contactInfo.email}
                                                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                                                className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 px-4 py-3 outline-none transition-colors"
                                                placeholder="john@example.com"
                                            />
                                            <p className="text-xs text-slate-400 mt-2">We'll send your confirmation ticket here.</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 mb-8">
                                    <h3 className="font-serif text-2xl mb-6">Special Requests</h3>
                                    <textarea
                                        className="w-full bg-slate-50 border-2 border-slate-100 focus:border-indigo-600 rounded-sm p-4 h-32 outline-none transition-colors resize-none"
                                        placeholder="Dietary restrictions, early check-in, etc..."
                                    ></textarea>
                                </section>

                                <Button
                                    onClick={() => setStep(2)}
                                    size="lg"
                                    className="bg-slate-900 text-white hover:bg-slate-800 w-full md:w-auto px-12"
                                >
                                    Continue to Payment
                                </Button>
                            </div>
                        )}

                        {/* STEP 2: PAYMENT */}
                        {step === 2 && (
                            <div className="animate-fade-in-up">
                                <section className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 mb-8">
                                    <h3 className="font-serif text-2xl mb-6">Payment Method</h3>
                                    <div className="space-y-4">
                                        <div
                                            onClick={() => setPaymentMethod('card')}
                                            className={`p-4 border rounded-sm cursor-pointer flex justify-between items-center transition-all ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 hover:border-slate-300'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'card' ? 'border-indigo-600' : 'border-slate-300'}`}>
                                                    {paymentMethod === 'card' && <div className="w-2 h-2 rounded-full bg-indigo-600"></div>}
                                                </div>
                                                <span className="font-medium text-slate-900">Credit / Debit Card</span>
                                            </div>
                                            <div className="flex gap-2 opacity-60">
                                                <div className="w-8 h-5 bg-slate-200 rounded"></div>
                                                <div className="w-8 h-5 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>

                                        <div
                                            onClick={() => setPaymentMethod('upi')}
                                            className={`p-4 border rounded-sm cursor-pointer flex justify-between items-center transition-all ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 hover:border-slate-300'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'upi' ? 'border-indigo-600' : 'border-slate-300'}`}>
                                                    {paymentMethod === 'upi' && <div className="w-2 h-2 rounded-full bg-indigo-600"></div>}
                                                </div>
                                                <span className="font-medium text-slate-900">UPI / Net Banking</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-8 py-3 bg-slate-100 text-slate-600 rounded-sm hover:bg-slate-200 font-medium transition-colors"
                                    >
                                        Back
                                    </button>
                                    <Button
                                        onClick={handleConfirmBooking}
                                        isLoading={loading}
                                        size="lg"
                                        className="bg-indigo-600 text-white hover:bg-indigo-700 flex-1"
                                    >
                                        Pay ₹{totalAmount.toLocaleString()}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN - SUMMARY */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-sm shadow-xl sticky top-24 border-t-4 border-indigo-600">
                            <div className="flex gap-4 mb-6 border-b border-slate-100 pb-6">
                                <img src={property.images[0]} alt={property.name} className="w-20 h-20 object-cover rounded-sm" />
                                <div>
                                    <h4 className="font-serif text-lg leading-tight mb-1">{property.name}</h4>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">{property.type}</p>
                                    <div className="flex items-center gap-1 mt-2 text-xs text-slate-600">
                                        <Icons.Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        <span className="font-bold">{property.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Dates</span>
                                    <span className="font-medium text-slate-900">
                                        {new Date(checkIn).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} - {new Date(checkOut).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Guests</span>
                                    <span className="font-medium text-slate-900">{guests} Guest{guests > 1 ? 's' : ''}</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-6 space-y-3">
                                <div className="flex justify-between text-sm text-slate-600">
                                    <span>₹{property.price.toLocaleString()} x {nights} nights</span>
                                    <span>₹{totalAmount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-600">
                                    <span>Cleaning fee</span>
                                    <span>₹0</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-600">
                                    <span>Service fee</span>
                                    <span>₹0</span>
                                </div>
                                <div className="flex justify-between text-lg font-serif font-bold pt-4 border-t border-slate-100 mt-4">
                                    <span>Total</span>
                                    <span>₹{totalAmount.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="mt-8 bg-slate-50 p-4 rounded text-xs text-slate-500 flex gap-2">
                                <Icons.Check className="w-4 h-4 shrink-0 text-green-600" />
                                <p>Free cancellation until 48 hours before check-in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
