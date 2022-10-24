import React from 'react';

const Home = () => {
    return (
        <div className=' bg-no-repeat bg-cover no-react bg-[url("https://i.ibb.co/fkP9kPs/Rectangle-1.png")]'>
            <div className='my-bg-image relative grid grid-cols-2 justify-center h-[100vh] items-center bg-opacity-70 bg-black' >
                <div className='pr-[10%] pl-[15%] '>
                    <h2 className='  text-white text-[97.68px] '>Cox's bazar</h2>
                    <p className='text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className='btn btn-sm font-semibold my-3 rounded-sm bg-[#F9A51A] text-black'>Get Start</button>
                </div>

                <div>
                    <section class=" mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
                        <article>
                            <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                                <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                                    <div class="relative w-full h-80 md:h-64 lg:h-44">
                                        <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg"
                                            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                            class="w-full h-full object-center object-cover"/>
                                    </div>
                                    <div class="px-3 py-4">
                                        <h3 class="text-sm text-gray-500 pb-2">
                                            <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                                <span class="absolute inset-0"></span>
                                                Cox's bazar
                                            </a>
                                        </h3>
                                        <p class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </article>
                               
                                <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                                    <div class="relative w-full h-80 md:h-64 lg:h-44">
                                        <img src="https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg"
                                            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                            class="w-full h-full object-center object-cover"/>
                                    </div>
                                    <div class="px-3 py-4">
                                        <h3 class="text-sm text-gray-500 pb-2">
                                            <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                                <span class="absolute inset-0"></span>
                                                Bander Ban
                                            </a>
                                        </h3>
                                        <p class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </article>
                                <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                                    <div class="relative w-full h-80 md:h-64 lg:h-44">
                                        <img src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg"
                                            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                            class="w-full h-full object-center object-cover"/>
                                    </div>
                                    <div class="px-3 py-4">
                                        <h3 class="text-sm text-gray-500 pb-2">
                                            <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                                <span class="absolute inset-0"></span>
                                                Nijom Drip
                                            </a>
                                        </h3>
                                        <p class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                                            Noakhali Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </article>
                            </section>
                        </article>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Home;