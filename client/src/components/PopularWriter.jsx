import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.png';
import { formatNumber } from '../utils';

export const PopularWriter = ({data}) => {
  return (
    <div className='w-full flex flex-col gap-8'>
        <p className='text-xl font-bold -mb-2 text-gray-600 dark:text-white'>
            Popular Writers
        </p>

        {data?.map((el) => (
            <Link
            to={`/writer/${el?._id}`}
            key={el?._id}
            className='flex gap-2 items-center'
            >
                <img 
                src={el?.image || Profile} alt={el?.name}
                className='object-cover w-12 h-12 rounded-full'/>

                <div className='flex flex-col gap-1'>
                    <span className='text-base font-semibold text-slate-800 dark:text-slate-500'>
                        {el?.name}
                    </span>

                    <span className='text-blue-800 font-medium'>
                        {formatNumber(el?.followers)}{" "}
                        <span className='text-gray-600'>Followers</span>
                    </span>
                </div>
            </Link>

        ))}
    </div>
  )
}


export default PopularWriter;