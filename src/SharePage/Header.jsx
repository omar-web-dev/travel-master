import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="absolute bg-white w-full flex justify-between items-center mx-auto px-8 h-20">
            <div className='flex justify-between'>

                <div className="inline-flex items-center pr-5">
                    <Link className="" to="/" >
                        Brad name
                    </Link>
                </div>

                <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                    <div className="block md:inline-block">
                        <div className="inline-flex items-center max-w-full">
                            <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1" type="button">
                                <div className="block flex-grow flex-shrink overflow-hidden">Start your search</div>
                                <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">

                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-initial">
                <div className="flex justify-end items-center relative">
                    <div className="block md:flex mr-4 items-center">
                        <a className="block md:inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Home</div>
                        </a>
                        <a className="block md:inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Home</div>
                        </a>
                        <a className="block md:inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Home</div>
                        </a>
                        <a className="block md:inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Home</div>
                        </a>
                        <a className="block md:inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Home</div>
                        </a>
                    </div>
                    {/*         
                <div className="block">
                    <div className="inline relative">
                        <button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                            <div className="pl-1">
                               
                            </div>
        
                            <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                                <Link to='/'>LogIn</Link>
                            </div>
                        </button>
                    </div>
                </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Header;