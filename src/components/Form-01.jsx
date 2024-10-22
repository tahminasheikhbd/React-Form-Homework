/** @format */

import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoLockOpenOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";

import { MdAddIcCall } from "react-icons/md";

const Form1 = () => {
  const [mobile, setMobile] = useState("");

  return (
    <div className='flex items-center justify-center bg-gradient-to-r from-[#2A00B7] to-pink-400 min-h-screen '>
      <form className=' space-y-3  p-10 rounded-lg container max-w-[600px]  bg-white'>
        <div className='header !mb-8 flex flex-col items-center gap-3'>
          <div className='text-3xl font-semibold text-[#2A00B7]'>Sign Up</div>
          <div className='underline h-[5px] bg-[#2A00B7] max-w-[40%] md:max-w-[35%] w-full rounded-full'></div>
        </div>

        <div className='flex flex-col gap-5 items-center'>
          <InputFeild
            type='text'
            icon={
              <FaRegUser className='text-xl text-slate-400 absolute left-2' />
            }
            className='w-[400px] h-[50px] outline-none  pl-10 placeholder:text-lg text-lg focus:border-[#2A00B7] focus:border-b-2 rounded-md'
            placeholder='Type your name'
          />

          <InputFeild
            type='email'
            icon={
              <BsEnvelope className='text-xl text-slate-400 absolute left-2' />
            }
            className='w-[400px] h-[50px] outline-none  pl-10 placeholder:text-lg text-lg focus:border-[#2A00B7] focus:border-b-2 rounded-md'
            placeholder='Type your email'
          />

          <InputFeild
            icon={
              <MdAddIcCall className='text-xl text-slate-400 absolute left-2' />
            }
            onChange={(event) => {
              if (/^[\d+\-\s]+$/.test(event.target.value)) {
                setMobile(event.target.value);
              }
            }}
            value={mobile}
            className='w-[400px] h-[50px] outline-none  pl-10 placeholder:text-lg text-lg focus:border-[#2A00B7] focus:border-b-2 rounded-md appearance-none'
            placeholder='Type your mobile number'
            focused
          />
          <InputFeild
            htmlFor='password'
            type='password'
            icon={
              <IoLockOpenOutline className='text-xl text-slate-400 absolute left-2' />
            }
            className='w-[400px] h-[50px] outline-none  pl-10 placeholder:text-lg text-lg focus:border-[#2A00B7] focus:border-b-2 rounded-md'
            placeholder='Type your password'
          />
        </div>

        <div className='forget-password text-slate-500 pl-4 md:pl-9 flex gap-2 items-center'>
          <p className='text-lg'>Forget password?</p>
          <span className='text-[#2A00B7] cursor-pointer font-medium '>
            Click here
          </span>
        </div>
        <div className='submit-container flex gap-5 justify-center !mt-[60px]'></div>
      </form>
    </div>
  );
};
export default Form1;

export const InputFeild = ({ className, type, icon, placeholder }) => {
  return (
    <div className='w-[450px] h-[80px] flex items-center flex-col  justify-center bg-slate-300 rounded-md'>
      <div className='relative flex items-center justify-center'>
        {icon}

        <div>
          <input
            type={type}
            className={className}
            placeholder={placeholder}

            // {...register(
            //   { htmlFor },
            //   {
            //     required: true,
            //     minLength: { value: 3, message: "maximum charecter atleast 3" },
            //     maxLength: {
            //       value: 10,
            //       message: "maximum charecter atmost 10",
            //     },
            //   }
            // )}
          />
        </div>
      </div>
    </div>
  );
};
