import React from 'react';
import './loader.css'
const Loader = () => {
    return (
        <div className='bg-sky-800 min-h-screen'>
            <div className="loader w-full mx-auto place-content-center min-h-screen">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
        </div>
        </div>
    );
};

export default Loader;