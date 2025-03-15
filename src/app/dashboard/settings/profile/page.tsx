import Image from 'next/image';
import React from 'react';

const Profile = () => {
    return (
        <div
            className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
            <div
                className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>
                <h1
                    className='text-3xl font-bold text-gray-800 mb-8'>
                    Profile Settings
                </h1>
                {/* profile picture settings  */}
                <section
                    className='mb-8'>
                    <h2
                        className='text-xl font-semibold text-gray-700 mb-4'>
                        Profile Picture
                    </h2>
                    <div
                        className="flex items-center space-x-4">
                        <div
                            className="w-24 h-24 rounded-full bg-gray-300">
                            <Image
                                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
                                alt="profile"
                                width={96}
                                height={96}
                                className='w-full h-full object-cover rounded-full' />
                        </div>
                    </div>
                    <div>
                        <button
                            className='px-6 py-2 mt-5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'>
                            Change Picture
                        </button>
                    </div>
                </section>
                {/* profile info section  */}
                <section className='mb-8'>
                    <h2
                        className='text-xl font-semibold text-gray-700 mb-4'>
                        Profile Information
                    </h2>
                    <div className='space-y-4'>
                        <div>
                            <label
                                className='block text-sm font-medium text-gray-600 '>
                                Full Name
                            </label>
                            <input
                                type="text"
                                defaultValue='Farhana Sharna'

                                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg 
                                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                        </div>
                        <div>
                            <label
                                className='block text-sm font-medium text-gray-600 '>
                                Username
                            </label>
                            <input
                                type="text"
                                defaultValue='Farhana_Sharna'

                                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg 
                                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                        </div>
                        <div>
                            <label
                                className='block text-sm font-medium text-gray-600 '>
                               Email Address
                            </label>
                            <input
                                type="text"
                                defaultValue='farhana@example.com'

                                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg 
                                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                        </div>
                    </div>
                </section>
                  {/* Actions Settings  */}
                  <div
                    className='flex justify-end space-x-4'>
                    <button
                        className='px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg'>
                        Cancel
                    </button>
                    <button
                        className='px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg'>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;