import React, { useState } from 'react';

function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.password !== values.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        alert('Registration successful');
        // Redirect to login page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Sign in to your account
                    </h2>
                </div>
                <div className="form">
                    <label>Username:</label>
                    <input className="input" type="text" name="username" onChange={handleChange} />
                    <label>Email:</label>
                    <input className="input" type="email" name="email" onChange={handleChange} />
                    <label>Password:</label>
                    <input className="input" type="password" name="password" onChange={handleChange} />
                    <label>Confirm Password:</label>
                    <input className="input" type="password" name="confirmPassword" onChange={handleChange} />
                    <div>
            <button
              type="submit"
              className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </div>
        </div>
        </div>
    );
}

export default Register;