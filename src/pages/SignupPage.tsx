import React, { useState } from 'react';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        localStorage.setItem('user', JSON.stringify({ username }));
        window.location.href = '/login';
    };

    return (
            <div className="min-h-screen bg-gradient-to-br flex items-center justify-center from-orange-50 to-yellow-100 p-4">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={handleSignup}
                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </div>
            </div>

    );
};

export default SignupPage;
