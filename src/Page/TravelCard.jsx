import React from 'react';
import { Link } from 'react-router-dom';


const TravelCard = ({travel}) => {
    console.log(travel);
    const {id, title, photo} = travel
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className=" w-full">
                <img src={photo} alt='tad' className="w-[100%]" />
            </div>
            <div className="px-3 py-4">
                <h3 className="text-sm text-gray-500 pb-2">
                    <Link to={`../hotel/${id}`} className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                        <span className="absolute inset-0"></span>
                        {title}
                    </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                   </p>
            </div>
        </div>
    );
};

export default TravelCard;