// Price Breakdown Component

export default function PriceBreakdown({
    pricePerNight,
    nights,
    guests,
    serviceFee = 0,
    taxes = 0,
    discount = 0
}) {
    const subtotal = pricePerNight * nights;
    const calculatedServiceFee = serviceFee || subtotal * 0.05; // 5% service fee
    const calculatedTaxes = taxes || subtotal * 0.12; // 12% taxes
    const total = subtotal + calculatedServiceFee + calculatedTaxes - discount;

    const formatPrice = (amount) => {
        return `₹${Math.round(amount).toLocaleString()}`;
    };

    return (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-4">Price Breakdown</h3>

            <div className="space-y-3">
                {/* Base Price */}
                <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                        {formatPrice(pricePerNight)} × {nights} {nights === 1 ? 'night' : 'nights'}
                    </span>
                    <span className="font-semibold text-gray-900">
                        {formatPrice(subtotal)}
                    </span>
                </div>

                {/* Guests */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Guests</span>
                    <span>{guests} {guests === 1 ? 'guest' : 'guests'}</span>
                </div>

                <div className="border-t pt-3 space-y-3">
                    {/* Service Fee */}
                    <div className="flex justify-between items-center text-gray-700">
                        <span>Service fee</span>
                        <span>{formatPrice(calculatedServiceFee)}</span>
                    </div>

                    {/* Taxes */}
                    <div className="flex justify-between items-center text-gray-700">
                        <span>Taxes (12%)</span>
                        <span>{formatPrice(calculatedTaxes)}</span>
                    </div>

                    {/* Discount */}
                    {discount > 0 && (
                        <div className="flex justify-between items-center text-green-600">
                            <span>Discount</span>
                            <span>-{formatPrice(discount)}</span>
                        </div>
                    )}
                </div>

                {/* Total */}
                <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-lg text-gray-900">Total</span>
                        <span className="font-bold text-2xl text-indigo-600">
                            {formatPrice(total)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Info Note */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-800">
                    💡 <strong>Note:</strong> This is a dummy calculation for demonstration purposes.
                </p>
            </div>
        </div>
    );
}
