import { useGoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BiImages } from 'react-icons/bi';
import { Toaster, toast } from 'sonner';
import { Link } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { Button, Divider, Logo, InputBox } from '../components';

const SignupPage = () => {
  const user = {};
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [file, setFile] = useState('');
  const [fileURL, setFileURL] = useState('');

  const googleLogin = async () => {};

  const handleSubmit = async () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  if (user.token) window.location.replace('/');

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex flex-col gap-y-4 md:w-1/3 bg-black items-center justify-center p-6">
        {fileURL && (
          <img
            src={fileURL || file}
            alt=""
            className="w-16 h-16 rounded-full"
          />
        )}
        <Logo type="signin" />
        <span className="text-xl font-semibold text-white"></span>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-2/3 min-h-screen bg-white dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#071b3e] to-black items-center px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="w-full h-full flex flex-col items-center justify-center py-12">
          {/* Mobile Logo */}
          <div className="block mb-10 md:hidden">
            <Logo />
          </div>

          <div className="w-full space-y-6 flex flex-col justify-start">
            {/* Heading */}
            <div className="max-w-md w-full flex gap-3 md:gap-4 items-center justify-center mb-12">
              {showForm && (
                <IoArrowBackCircleSharp
                  className="text-2xl lg:text-3xl cursor-pointer text-gray-800 dark:text-gray-400"
                  onClick={() => setShowForm(false)}
                />
              )}
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white">
                Sign up for an account
              </h2>
            </div>

            {/* Form */}
            {showForm ? (
              <form
                className="max-w-md w-full mt-8 space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6 mb-8">
                  <div className="w-full flex flex-col sm:flex-row gap-4">
                    <InputBox
                      type="text"
                      label="First Name"
                      placeholder="First Name"
                      name="firstName"
                      value={data.firstName}
                      onChange={handleChange}
                      isRequired={true}
                    />
                    <InputBox
                      type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
                      isRequired={true}
                    />
                  </div>

                  <InputBox
                    type="email"
                    label="Email Address"
                    placeholder="your@example.com"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    isRequired={true}
                  />
                  <InputBox
                    type="password"
                    label="Password"
                    placeholder="********"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    isRequired={true}
                  />

                  {/* Upload */}
                  <div className="flex items-center justify-between py-4">
                    <label
                      htmlFor="imgUpload"
                      className="flex items-center gap-1 text-base text-black dark:text-gray-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-600"
                    >
                      <input
                        id="imgUpload"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="hidden"
                        accept=".jpg, .png, .jpeg"
                      />
                      <BiImages />
                      <span>Picture</span>
                    </label>
                  </div>
                </div>

                <Button
                  label="Create Account"
                  type="submit"
                  styles="group relative w-full flex justify-center py-2.5 2xl:py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-black hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-600 focus:outline-none"
                />
              </form>
            ) : (
              // Button options
              <div className="max-w-md w-full space-y-8">
                <Button
                  onClick={() => googleLogin()}
                  label="Sign up with Google"
                  icon={<FcGoogle className="text-xl" />}
                  styles="w-full flex flex-row-reverse gap-4 bg-black dark:bg-transparent dark:border text-white px-5 py-2.5 rounded-full hover:border-blue-600 dark:hover:border-blue-600"
                />
                <Divider label="OR" />
                <Button
                  onClick={() => setShowForm(true)}
                  label="Continue with email"
                  styles="w-full gap-4 bg-white text-black dark:text-white px-5 py-2.5 rounded-full border dark:border-none border-gray-300 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-600"
                />
              </div>
            )}

            {/* Footer link */}
            <p className="max-w-md w-full text-center dark:text-white">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="text-blue-800 hover:text-blue-700 font-medium dark:hover:text-blue-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default SignupPage;
