// Payouts Page - "The Growth"
import { Icons } from '../../components/ui/Icons';
import { Link } from 'react-router-dom';

export default function Payouts() {
    const payoutHistory = [
        { id: 1, date: '2026-02-01', amount: 45000, status: 'Completed', method: 'Bank Transfer' },
        { id: 2, date: '2026-01-15', amount: 38000, status: 'Completed', method: 'Bank Transfer' },
        { id: 3, date: '2026-01-01', amount: 52000, status: 'Completed', method: 'Bank Transfer' },
        { id: 4, date: '2025-12-15', amount: 41000, status: 'Completed', method: 'Bank Transfer' }
    ];

    const pendingPayout = {
        amount: 28500,
        bookings: 8,
        nextPayoutDate: '2026-02-15'
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-2 block">Financials</span>
                            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                                Payouts & Invoices
                            </h1>
                            <p className="text-slate-500 mt-2">Manage your earnings and banking details.</p>
                        </div>
                        <button className="inline-flex items-center px-6 py-3 border border-slate-200 text-slate-900 rounded-sm hover:bg-slate-50 transition-colors font-medium">
                            <Icons.Check className="w-4 h-4 mr-2" /> Download Statement
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN: Payout History */}
                    <div className="lg:col-span-2">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { label: 'Total Earnings', value: '₹2.4L', sub: '+18% vs last month', isGood: true },
                                { label: 'This Month', value: '₹72K', sub: '18 bookings', isGood: false },
                                { label: 'Avg Payout', value: '₹44K', sub: 'Per cycle', isGood: false },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-slate-100">
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
                                    <p className="text-3xl font-serif font-bold text-slate-900 mb-1">{stat.value}</p>
                                    <p className={`text-xs font-medium ${stat.isGood ? 'text-green-600' : 'text-slate-400'}`}>{stat.sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Payout History Table */}
                        <div className="bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-6 border-b border-slate-100">
                                <h2 className="text-xl font-serif">Transaction History</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-slate-100 bg-slate-50/50">
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400">Date</th>
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400">Amount</th>
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400">Method</th>
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
                                            <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {payoutHistory.map((payout) => (
                                            <tr key={payout.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="py-4 px-6 text-sm text-slate-600 font-medium">
                                                    {new Date(payout.date).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </td>
                                                <td className="py-4 px-6 font-serif font-bold text-slate-900">
                                                    ₹{payout.amount.toLocaleString()}
                                                </td>
                                                <td className="py-4 px-6 text-sm text-slate-500">{payout.method}</td>
                                                <td className="py-4 px-6">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 uppercase tracking-wide">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                        {payout.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                                                        <Icons.Check className="w-4 h-4" /> {/* Use download icon ideally */}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Pending & Bank Details */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Pending Payout Card */}
                        <div className="bg-slate-900 text-white rounded-sm p-8 relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">Pending Payout</p>
                                <p className="text-5xl font-serif mb-6">₹{pendingPayout.amount.toLocaleString()}</p>

                                <div className="space-y-3 border-t border-white/10 pt-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Bookings</span>
                                        <span>{pendingPayout.bookings} cleared</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Scheduled Date</span>
                                        <span>{new Date(pendingPayout.nextPayoutDate).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        </div>

                        {/* Bank Details */}
                        <div className="bg-white rounded-sm shadow-sm border border-slate-100 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-serif">Bank Details</h2>
                                <button className="text-xs font-bold text-indigo-600 uppercase tracking-wider hover:text-indigo-800">Edit</button>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-sm border border-slate-100">
                                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Account Holder</p>
                                    <p className="font-bold text-slate-900">Ravi Chandra</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-sm border border-slate-100">
                                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Account Number</p>
                                    <p className="font-bold text-slate-900 font-mono tracking-wide">•••• •••• 1234</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 p-4 bg-slate-50 rounded-sm border border-slate-100">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Bank</p>
                                        <p className="font-bold text-slate-900">HDFC</p>
                                    </div>
                                    <div className="flex-1 p-4 bg-slate-50 rounded-sm border border-slate-100">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">IFSC</p>
                                        <p className="font-bold text-slate-900">HDFC001</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
