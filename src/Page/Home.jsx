import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TravelCard from './TravelCard';

const Home = () => {
    const travelCard = useLoaderData()
    return (
        <div className=' bg-no-repeat bg-cover no-react bg-[url("https://i.ibb.co/fkP9kPs/Rectangle-1.png")]'>
            <div className='my-bg-image relative grid grid-cols-2 justify-center h-[100vh] items-center bg-opacity-70 bg-black' >
                <div className='pr-[10%] pl-[15%] '>
                    <h2 className='  text-white text-[97.68px] '>Cox's bazar</h2>
                    <p className='text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className='btn btn-sm font-semibold my-3 rounded-sm bg-[#F9A51A] text-black'>Get Start</button>
                </div>

                <div>
                    <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                        {travelCard.map(travel => <TravelCard key={travel.id} travel={travel} />)}
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Home;