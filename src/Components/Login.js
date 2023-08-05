
import { Link } from 'react-router-dom';
import logo from '../images/logo_transparent.png';
import React, { useState } from 'react';
import axios from 'axios';
import loginBackground from '../images/loginbackground.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                password,
            });

            console.log('User logged in:', response.data);
            // You can redirect the user to another page or perform other actions here.
        } catch (error) {
            console.error('Error logging in:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            className="h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${loginBackground})`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <div className="relative flex flex-col items-center justify-center p-6 space-y-6 md:p-8 md:max-w-md w-full bg-gray-700 bg-opacity-70 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                <Link to="/" className="flex items-center text-2xl font-semibold text-blue-600 dark:text-white">
                    <img className="w-full h-20 mr-2" src={logo} alt="Dine Discover Logo" />

                </Link>
                <div className="space-y-4">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-900 bg-opacity-70 border border-gray-400 text-white sm:text-sm rounded-lg fucus:ring-teal-400 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-600 dark:bg-opacity-70 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-900 bg-opacity-70 border border-gray-400 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:bg-opacity-70 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-900 bg-opacity-70 focus:ring-3 focus:ring-primary-300 dark:bg-gray-600 dark:bg-opacity-70 dark:border-gray-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required=""
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-white dark:text-gray-300">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            onClick={handleLogin} disabled={isSubmitting}
                            type="submit"
                            className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:bg-opacity-70 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sign in
                        </button>
                        <p className="text-sm font-light text-white dark:text-gray-400">
                            Don’t have an account yet?{' '}
                            <a href="/SignUp.js" onClick={handleLogin} disabled={isSubmitting} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
