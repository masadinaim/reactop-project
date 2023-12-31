import React, { useState } from 'react';


function ForgotPassword() {
 const [email, setEmail] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email for password reset:', email);
    // replace this line with your logic to send a password reset email
 };

 return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              {' '}
              Sign in{' '}
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Request password reset
            </button>
          </div>
          <div className="mt-4 text-center">
            <div className="text-medium">
              <a href="/resetpw" className="text-red-700 hover:text-red-500">
                Or reset password here
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
 );
}

export default ForgotPassword;