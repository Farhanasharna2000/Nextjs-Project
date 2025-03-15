import Link from 'next/link';
import React from 'react';

const Settings = () => {
    return (
        <div
            className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-10'>
            <div
                className='max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8'>
                <h1
                    className='text-4xl font-extrabold text-gray-900 mb-6'>
                    Settings
                </h1>
                <p
                    className='text-lg text-gray-700 mb-8 max-w-2xl'>
                    Customise your account settings, profile, and notifications here.Choose an option from the sidebar to begin.
                </p>
                <div
                    className="flex space-x-12">
                    <div className='w-1/4 bg-white rounded-lg p-6 space-y-6'>
                        <h2
                            className='text-2xl font-semibold text-gray-800 mb-4'>
                            Quick Links
                        </h2>
                        <ul className='space-y-4'>
                            <li>
                                <Link
                                    href='/dashboard/settings/account'
                                    className='flex items-center text-lg text-gray-800 hover:text-indigo-600 transition-colors hover:bg-indigo-50 
                                    py-2 px-4 rounded-md'>
                                    <span>Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/dashboard/settings/notifications'
                                    className='flex items-center text-lg text-gray-800 hover:text-yellow-600 transition-colors hover:bg-yellow-50 
                                    py-2 px-4 rounded-md'>
                                    <span>Notifications</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/dashboard/settings/profile'
                                    className='flex items-center text-lg text-gray-800 hover:text-green-600 transition-colors hover:bg-green-50 
                                    py-2 px-4 rounded-md'>
                                    <span>Profile</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div
                        className="flex-1 bg-white rounded-lg shadow-md p-8">
                        <h2
                            className='text-3xl font-semibold text-gray-900 mb-6'>
                            Select a settings
                        </h2>
                        <p
                            className='text-lg text-gray-600 max-w-3xl'>
                            Choose an option from the sidebar to manage your account, notifications, or profile settings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;