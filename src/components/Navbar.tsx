import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
           <nav>
            <ul>
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/products'>Products</Link>
                    <Link href='/dashboard'>Dashboard</Link>

                </div>
            </ul>
            </nav> 
        </div>
    );
};

export default Navbar;