import {GoogleLogin, useGoogleLogin} from '@react-oauth/google';
import React, {useState} from 'react';
import {FcGoogle} from 'react-icons/fc';
import {Toaster, toast} from 'sonner';
import {Link} from 'react-router-dom';
import { Divider, Logo } from '../components';
import {Button}  from '../components';
import {InputBox} from '../components';


const LoginPage = () => {

  const user = {};

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>{

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };



  if(user.token) window.location.replace('/');
  // toast.error('Login Failed');
  return (
    <div className='w-full flex h-[100vh]'>
      <div className='hidden md:flex flex-col gap-y-4 w-1/3 min-h-screen bg-black items-center justify-center'> 
        <Logo type='login'/>
        <span className='text-xl text-white font-semibold'>Nice to see you, again!</span>
      </div>

      <div className='flex w-full md:w-2/3 h-full bg-white
      dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#071b3e] to-black
      items-center px-10 md:px-20 lg:px-40'>
        <div className='h-full flex flex-col items-center justify-center py-12 px-4
        sm:px-6 lg:px-8'>
          <div className='block mb-10 md:hidden'>
            <Logo />
          </div>
          <div className='max-w-md w-full space-y-8'>
            <h2 className='mt-6 text-center text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white'>Sign In to your account!</h2>
          </div>

          <Button
            label="Sign In with Google"
            icon={<FcGoogle/>}
            styles="w-full flex flex-row-reverse gap-4 bg-white dark:bg-transparent hover:border-blue-600 hover:dark:border-blue-600 text-black 
                    dark:text-white px-5 py-2.5 rounded-full border border-gray-300 mt-5"
            onClick={ () => GoogleLogin()}
          />

          <Divider label="Or sign in with email" />

          <form className='mt-8 space-y-6 w-full'>
            <div className='w-full flex flex-col rounded-md shadow-sm -space-y-px gap-5'>
              <InputBox 
                type='email'
                label='Email Address'
                placeholder='your@example.com'
                name='email'
                value={data?.email}
                onChange={handleChange}
                isRequired={true}
              />
              <InputBox 
                type='password'
                label='Password'
                placeholder='********'
                name='password'
                value={data?.password}
                onChange={handleChange}
                isRequired={true}
              />
            </div>
            <Button 
              label='Sign In'
              type='submit'
              styles='group relative w-full flex justify-center py-2.5 2xl:py-3 px-4 border
              border-transparent text-sm font-medium rounded-full text-white 
              bg-black hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-600
              focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-blue-500 mt-8'
            />
          </form>

          <div className='flex items-center justify-center text-gray-600 dark:text-gray-300 mt-5'>
            <p>
              Don't have an account ?{" "}
              <Link to='/sign-up' className='text-blue-800 hover:text-blue-700 font-medium dark:hover:text-blue-500'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster richColors/>
    </div>
  );
};

export default LoginPage;
