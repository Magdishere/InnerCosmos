import { useState } from 'react';
import {CATEGORIES, posts} from '../utils/dummyData';
import {Banner} from '../components';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import {PopularPost} from '../components';
import {PopularWriter} from '../components';
import {Pagination} from '../components/';
import { popular } from '../utils/dummyData';



const Home = () => {

  const numOfPages = 1;
  const [page, setPage] =  useState(1);
  
  const randomIndex = Math.floor(Math.random() * posts.length);

  const handlePageChange = () => {};

  if(posts.length <1) 
    return (
      <div className='w-full h-full px-8 flex place-items-center justify-center'>
        <span className='text-lg text-slate-500'>No Posts Available.</span>
      </div>
    );
  return (
  <div className='py-10 2xl:py-5'>
    <Banner post = {posts[randomIndex]}/>
    <div className='px-0 lg:pl-20 2xl:px-20'>
      {/* Categories */}
      <div className='mt-6 md:mt-0'>
        <p className='text-2xl font-semibold text-gray-600 dark:text-white'>
          Popular Categories
        </p>
        <div className='w-full flex flex-wrap py-10 gap-8'>
          {CATEGORIES.map((cat) => (
            <Link
            className={`flex items-center justify-center gap-3 ${cat.color}
             text-white font-semibold text-base px-4 py-2 rounded cursor-pointer`}
            >
            {cat.icon}
            <span>{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className='w-full flex flex-col md:flex-row gap-10 2xl:gap-20'>
          {/* Left Side*/}
          <div className='w-full md:w-2/3 flex flex-col gap-10 gap-y-20'>
            {
              posts?.map((post, index) =>(
                <Card key={post?._id} post = {post} index = {index}/>
              ))
            }
            <div className='w-full flex items-center justify-center'>
              {/* <Pagination totalPages={numOfPages} onPageChange={handlePageChange}/> */}
            </div>
          </div>

          {/* Right Side*/}
          <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
            {/** Popular Posts */}
            <PopularPost posts={popular?.posts}/>
            {/** Popular Writers */}
            <PopularWriter data={popular?.writers}/>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
