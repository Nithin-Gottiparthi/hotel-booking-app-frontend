// Date Picker Component (UI only, using HTML date input)

export default function DatePicker({
    label,
    name,
    value,
    onChange,
    min,
    max,
    required = false,
    disabled = false,
    error = '',
    className = ''
}) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <input
                id={name}
                type="date"
                name={name}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                required={required}
                disabled={disabled}
                className={`
          px-4 py-2 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
            />

            {error && (
                <span className="text-sm text-red-500">{error}</span>
            )}
        </div>
    );
}
