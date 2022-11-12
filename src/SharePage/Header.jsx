import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="absolute opacity-100 z-50 text-white w-full flex justify-between items-center mx-auto px-8 h-20">
            <div className='flex justify-between'>
                <div className="inline-flex items-center pr-5">
                    <Link className="" to="/" >
                        Brad name
                    </Link>
                </div>
                <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                    <div className="block md:inline-block">
                        <div className="inline-flex items-center max-w-full">
                            <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-md px-1  py-1" type="button">
                                <div className="block flex-grow flex-shrink overflow-hidden">Start your search</div>
                                <div className="flex items-center justify-center relative  h-8 w-8 rounded-md">

                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-initial">
                <div className="flex justify-end items-center relative">
                    <div className="block md:flex mr-4 items-center">
                        <Link className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/home">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Home</div>
                        </Link>
                        <Link className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/news">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">News</div>
                        </Link>
                        <Link className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/destination">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Destination</div>
                        </Link>
                        <Link className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/blog">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Blog</div>
                        </Link>
                        <Link className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/contact">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Contact</div>
                        </Link>
                        <Link className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/log-in">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">LogIn</div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;