// Login Page

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Login() {
    const navigate = useNavigate();
    const { login, quickLogin } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const result = login(formData.email, formData.password);

        if (result.success) {
            // Redirect based on role
            if (result.user.role === 'owner') {
                navigate('/owner');
            } else {
                navigate('/');
            }
        } else {
            setError(result.error || 'Login failed');
        }
    };

    const handleQuickLogin = (role) => {
        const result = quickLogin(role);
        if (result.success) {
            if (role === 'owner') {
                navigate('/owner');
            } else {
                navigate('/');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block">
                        <h1 className="text-4xl font-bold text-indigo-600">🏨 Vibestey</h1>
                    </Link>
                    <p className="text-gray-600 mt-2">Welcome back! Please login to continue.</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                        />

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />

                        <Button type="submit" fullWidth size="lg">
                            Login
                        </Button>
                    </form>

                    {/* Quick Login for Testing */}
                    <div className="mt-6 pt-6 border-t">
                        <p className="text-sm text-gray-600 mb-3 text-center">Quick Login (Demo)</p>
                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuickLogin('tenant')}
                            >
                                👤 Login as Tenant
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuickLogin('owner')}
                            >
                                🏠 Login as Owner
                            </Button>
                        </div>
                    </div>

                    {/* Signup Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
