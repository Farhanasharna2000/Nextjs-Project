import Image from 'next/image';
import React from 'react';

const UsersDetails = () => {
    const user = {
        name: "Farhana Sharna",
        email: "farhana@example.com",
        role: "Admin",
        status: "Active",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
        profilePicture: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        activities: [
            { id: 1, description: "Updated password", timestamp: "2025-02-10" },
            { id: 2, description: "Changed email address", timestamp: "2025-01-25" },
            { id: 3, description: "Logged in from a new device", timestamp: "2025-01-15" }
        ]
    };

    return (
        <div
            className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
            <div
                className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>
                <div
                    className="flex items-center mb-8">
                    <Image
                        src={user.profilePicture}
                        alt='profile'
                        width={80}
                        height={80}
                        className='w-20 h-20 object-cover rounded-full mr-6' />
                    <div>
                        <h1
                            className='text-3xl font-bold text-gray-800 '>
                            {user.name}
                        </h1>
                        <p
                            className='text-sm text-gray-600'>
                            {user.email}
                        </p>
                        <p
                            className='text-sm text-gray-600'>
                            {user.role}
                        </p>
                        <p
                            className={`text-sm mt-2 
                ${user.status === 'Active'
                                    ? 'text-green-500'
                                    : 'text-red-500'
                                }`}>
                            Status: {user.status}
                        </p>

                    </div>
                </div>
                {/* bio section  */}
                <div
                    className="mb-8">
                    <h2
                        className='text-xl font-semibold text-gray-700 mb-4'>
                        About
                    </h2>
                    <p
                        className='text-gray-600'>
                        {user.bio}
                    </p>
                </div>
                {/* Activities timeline  */}
                <div 
                className="mb-8">
<h2
                        className='text-xl font-semibold text-gray-700 mb-4'>
                        Recent Activities
                    </h2>
                    <ul 
                    className='space-y-4'>
{
    user.activities.map(activity=>(
        <li 
        key={activity.id}
        className='flex items-center space-x-4'>
           <div
           className='bg-blue-600 text-white rounded-full w-8 h-8 flex justify-center items-center'>
           <span>A</span>
           </div>
           <div>
            <p
            className='text-gray-700'>
                {activity.description}
            </p>
            <p
            className='text-sm text-gray-500'>
                {activity.timestamp}
            </p>
           </div>
        </li>
    ))
}
                    </ul>
                    {/* Actions Section  */}
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
        </div>

    );
};

export default UsersDetails;