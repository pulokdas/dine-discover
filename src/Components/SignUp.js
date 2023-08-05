import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo_transparent.png';
import loginBackground from '../images/loginbackground.jpg';

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('/api/register', {
                name,
                email,
                password,
            });

            if (response.status === 201) {
                alert('Sign up successful!'); // Replace with your desired UI feedback
            } else {
                console.error('Sign up failed:', response.data.error);
                alert('Sign up failed. Please try again.');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Sign up failed. Please try again.');
        }

        setIsSubmitting(false);
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
                        Create an account
                    </h1>
                    <form className="space-y-4" action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                                Your name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-900 bg-opacity-70 border border-gray-400 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:bg-opacity-70 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John Doe"
                                required=""
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                Your email
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-900 bg-opacity-70 border border-gray-400 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:bg-opacity-70 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                Password
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-900 bg-opacity-70 border border-gray-400 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:bg-opacity-70 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <button
                            onClick={handleSignUp}
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:bg-opacity-70 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Create Account
                        </button>
                        <p className="text-sm font-light text-white dark:text-gray-400">
                            Already have an account?{' '}
                            <Link to="/Login.js" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
