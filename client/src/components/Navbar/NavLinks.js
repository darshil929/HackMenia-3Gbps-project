import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <> <HashLink className="px-4 text-2xl font-extrabold text-gray-500 hover:text-blue-900" to="/">
            Home
        </HashLink>

            <HashLink className="px-4 text-2xl font-extrabold text-gray-500 hover:text-blue-900" to="/catalogue">
                Explore
            </HashLink>
            <HashLink className="px-4 text-2xl font-extrabold text-gray-500 hover:text-blue-900" to="/sign-in">
                Sign-In
            </HashLink>
            <Link className="text-white text-2xl bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo">
                Talk to Us!
            </Link>
        </>
    )
}

export default NavLinks;