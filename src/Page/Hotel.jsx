import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Hotel = () => {
    const hotelData = useLoaderData()
    console.log(hotelData);
    const { title, description, origin } = hotelData
    return (
        <div className=' bg-no-repeat bg-cover no-react bg-[url("https://i.ibb.co/fkP9kPs/Rectangle-1.png")]'>
            <div className='my-bg-image relative grid grid-cols-2 justify-center h-[100vh] items-center bg-opacity-70 bg-black' >
                <div className='pr-[10%] pl-[15%] '>
                    <h2 className='  text-white text-[97.68px] '>{title}</h2>
                    <p className='text-white'>{description}</p>
                    <button className='btn btn-sm font-semibold my-3 rounded-sm bg-[#F9A51A] text-black'>Get Start</button>
                </div>

                <div>
                    <div className="flex items-center justify-center px-10 py-5 rounded-md mr-32 bg-white">
                        <div className="mx-auto w-full">
                            <from >
                                <label
                                    htmlFor="origin"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Origin
                                </label>
                                <input
                                    type="text"
                                    name="origin"
                                    id="origin"
                                    placeholder={origin}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                                <label
                                    htmlFor="origin"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Origin
                                </label>
                                <input
                                    type="text"
                                    name="origin"
                                    id="origin"
                                    placeholder={origin}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />

                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <label
                                            htmlFor="date"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                htmlFor="date"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <div className="mb-5">
                                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                                            Are you coming to the event?
                                        </label>
                                        <div className="flex items-center space-x-6">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="radio1"
                                                    id="radioButton1"
                                                    className="h-5 w-5"
                                                />
                                                <label
                                                    htmlFor="radioButton1"
                                                    className="pl-3 text-base font-medium text-[#07074D]"
                                                >
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="radio1"
                                                    id="radioButton2"
                                                    className="h-5 w-5"
                                                />
                                                <label
                                                    htmlFor="radioButton2"
                                                    className="pl-3 text-base font-medium text-[#07074D]"
                                                >
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </from>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hotel;