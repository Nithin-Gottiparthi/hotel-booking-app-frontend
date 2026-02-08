// User Profile Page

import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Profile() {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || {
            street: '',
            city: '',
            state: '',
            pincode: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setFormData({
                ...formData,
                address: { ...formData.address, [addressField]: value }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSave = () => {
        // In a real app, this would call an API
        alert('Profile updated successfully! (dummy action)');
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                            <img
                                src={user?.avatar}
                                alt={user?.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h2 className="text-xl font-bold text-gray-900 mb-1">{user?.name}</h2>
                            <p className="text-gray-600 text-sm mb-4">{user?.email}</p>

                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                                <span className={user?.verified ? 'text-green-600' : 'text-yellow-600'}>
                                    {user?.verified ? '✓' : '⚠'}
                                </span>
                                <span>{user?.verified ? 'Verified Account' : 'Unverified'}</span>
                            </div>

                            <p className="text-xs text-gray-500">
                                Member since {new Date(user?.joinedDate).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>

                    {/* Profile Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
                                {!isEditing && (
                                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                                        Edit Profile
                                    </Button>
                                )}
                            </div>

                            <div className="space-y-4">
                                <Input
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />

                                <Input
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                />

                                <Input
                                    label="Phone Number"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    placeholder="+91 XXXXX XXXXX"
                                />

                                <div className="pt-4 border-t">
                                    <h3 className="font-semibold text-gray-900 mb-4">Address</h3>

                                    <div className="space-y-4">
                                        <Input
                                            label="Street Address"
                                            name="address.street"
                                            value={formData.address.street}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />

                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                label="City"
                                                name="address.city"
                                                value={formData.address.city}
                                                onChange={handleChange}
                                                disabled={!isEditing}
                                            />
                                            <Input
                                                label="State"
                                                name="address.state"
                                                value={formData.address.state}
                                                onChange={handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>

                                        <Input
                                            label="PIN Code"
                                            name="address.pincode"
                                            value={formData.address.pincode}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="flex gap-3 pt-4">
                                        <Button onClick={handleSave} fullWidth>
                                            Save Changes
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setIsEditing(false);
                                                setFormData({
                                                    name: user?.name || '',
                                                    email: user?.email || '',
                                                    phone: user?.phone || '',
                                                    address: user?.address || { street: '', city: '', state: '', pincode: '' }
                                                });
                                            }}
                                            fullWidth
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
