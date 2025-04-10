import { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            setErrorMessage('Please provide both username and password.');
            return;
        }

        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);

            if (username === storedUsername && password === storedPassword) {

                window.location.href = '/';
            } else {
                setErrorMessage('Invalid username or password.');
            }
        } else {
            setErrorMessage('No user found. Please sign up first.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br flex items-center justify-center from-orange-50 to-yellow-100 p-4">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

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

                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

                <button
                    onClick={handleLogin}
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
