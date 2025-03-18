import React from 'react';

const User =async ({params}:{params:{user:string}}) => {
    // console.log(params);
    const {user}=await params;
    // console.log(user);
    
    return (
        <div>
            <h1>Information about {user}</h1>
        </div>
    );
};

export default User;