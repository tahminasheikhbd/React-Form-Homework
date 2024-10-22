/** @format */

import React, { useState } from "react";

const NewForm1 = () => {
  const [mobile, setMobile] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [checkbox, setCheckbox] = useState([]);
  const [schedule, setSchedule] = useState("");
  const [nationality, setNationality] = useState("");
  const [file, setFile] = useState(null);

  const user = [
    {
      username: "john_doe",
      email: "john.doe@example.com",
      location: "New York, USA",
      mobile: "+1-202-555-0156",
    },
    {
      username: "jane_smith",
      email: "ahmed@gmail.com",
      location: "London, UK",
      mobile: "+44-20-7946-0958",
    },
    {
      username: "maria_garcia",
      email: "maria.garcia@example.com",
      location: "Madrid, Spain",
      mobile: "+34-91-555-1234",
    },
    {
      username: "li_wei",
      email: "li.wei@example.com",
      location: "Beijing, China",
      mobile: "+86-10-5555-6789",
    },
    {
      username: "amit_kumar",
      email: "amit.kumar@example.com",
      location: "Mumbai, India",
      mobile: "+91-22-5555-4321",
    },
  ];

  const validateEmail = () => {
    if (email?.length > 0) {
      const isEmailUsed = user.find(
        (user) => user.email.toLowerCase().trim() == email.toLowerCase().trim()
      );
      setEmailStatus(isEmailUsed ? "unavailable !" : "available");
    }
  };

  const courses = ["Graphic Design", "Video Graphy", "Web Development"];

  const packages = ["React.js", "Angular", "Vue.js", "Next.js", "Backbone.js"];

  const timing = ["Morning", "Afternoon", "Evening"];

  return (
    <div className='min-h-screen bg-green-200 flex items-center justify-center'>
      <div
        action=''
        className='bg-blue-300  w-full max-w-[800px] p-10 border my-10 rounded-sm border-blue-500 flex flex-col gap-3 '>
        <p className='font-semibold text-2xl text-center'>Registration Form</p>
        <span className='border-b- border-[3px] border-double border-black h-[4px] w-full max-w-[280px] mx-auto md:mb-10' />
        <form
          action=''
          className='md:grid md:grid-cols-2 gap-2 space-y-2 md:space-y-0'>
          <InputFeild
            label='First name :'
            htmFor='fname'
            placeholder='Type your first name'
            type='text'
          />
          <InputFeild
            label='Last name :'
            htmFor='lname'
            placeholder='Type your last name'
            type='text'
          />

          {/* email */}
          <div className='grid col-span-2'>
            <div
              className={`flex gap-1 bg-white/50  items-center p-4 rounded-md `}>
              <label htmlFor='email' className='w-[100px] font-medium text-lg'>
                Email:
              </label>
              <input
                type='email'
                className={`outline-none p-3 rounded-md   placeholder:italic flex-1 `}
                placeholder='type your email address'
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                value={email}
              />
            </div>
            {emailStatus && (
              <p
                className={`font-medium text-center ${
                  emailStatus === "unavailable !"
                    ? "text-red-500"
                    : "text-green-700"
                }`}>
                Email {emailStatus}
              </p>
            )}
          </div>
          {/* email end */}

          <InputFeild
            label='Password :'
            htmFor='password'
            placeholder='Type your password'
            type='password'
          />

          {/* mobile */}
          <div>
            <div
              className={`flex gap-1 bg-white/50  items-center p-4 rounded-md`}>
              <label htmlFor='mobile' className='w-[100px] font-medium text-lg'>
                Mobile:
              </label>
              <input
                type='text'
                className={`outline-none p-3 rounded-md   placeholder:italic flex-1 `}
                placeholder='type your mobile number'
                onChange={(e) => {
                  if (/^[\d+ \-\s]+$/.test(e.target.value)) {
                    setMobile(e.target.value);
                  }
                }}
                value={mobile}
              />
            </div>
          </div>
          {/* mobile */}

          <InputFeild
            label='Address:'
            htmFor='address'
            placeholder='Type your home address'
            type='text'
          />
          {/* text-area */}
          <div className='grid col-span-2'>
            <div
              className={`flex gap-1 bg-white/50  items-center p-4 rounded-md`}>
              <label htmlFor='mobile' className='w-[100px] font-medium text-lg'>
                Comments:
              </label>
              <textarea
                type='text'
                className={`outline-none p-3 rounded-md   placeholder:italic flex-1 `}
                placeholder='Share your opinions'
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </div>
          </div>
          {/* text-area-end */}

          {/* redio-start */}
          <div className='grid col-span-2  bg-white/50   p-4 rounded-md '>
            <div className='flex items-center'>
              <p className='w-[100px] font-medium text-lg'>Course:</p>
              <div className={`flex   flex-col   gap-2 rounded-md flex-1`}>
                {courses.map((course) => (
                  <div
                    className='flex gap-2 items-center p-4 rounded-md bg-white'
                    key={course}>
                    <input
                      id={course}
                      type='radio'
                      onChange={() => setSelectedCourse(course)}
                      checked={selectedCourse == course}
                    />
                    <label htmlFor={course}>{course}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* redio-end */}

          {/* checkbox-start */}
          <div className='grid col-span-2  bg-white/50   p-4 rounded-md '>
            <div className='flex items-center'>
              <p className='w-[100px] font-medium text-lg'>Packages:</p>
              <div
                className={`flex  md:justify-between  gap-2 md:flex-row flex-col rounded-md flex-1`}>
                {packages.map((options) => (
                  <div
                    className='flex gap-2 items-center p-4 rounded-md bg-white flex-1'
                    key={options}>
                    <input
                      id={options}
                      type='checkbox'
                      checked={checkbox.includes(options)}
                      onChange={() =>
                        setCheckbox((crr) => {
                          const isExist = !!crr.find(
                            (option) => option == options
                          );

                          if (isExist) {
                            return crr.filter((option) => option !== options);
                          } else {
                            return [...crr, options];
                          }
                        })
                      }
                    />
                    <label htmlFor={options}>{options}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* checkbox-end */}

          {/* timing-start */}
          <div className='grid col-span-2  bg-white/50   p-4 rounded-md '>
            <div className='flex items-center'>
              <p className='w-[100px] font-medium text-lg'>Schedule:</p>
              <div
                className={`flex   flex-col md:flex-row md:justify-between  gap-2 rounded-md flex-1`}>
                {timing.map((time) => (
                  <div
                    className='flex gap-2 items-center p-4 rounded-md bg-white flex-1'
                    key={time}>
                    <input
                      id={time}
                      type='checkbox'
                      onChange={() => setSchedule(time)}
                      checked={schedule == time}
                    />
                    <label htmlFor={time}>{time}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* timing-end */}

          {/*nationality-start */}

          <div className='flex-1 grid col-span-2'>
            <div
              className={`flex gap-1 bg-white/50  items-center p-4 rounded-md flex-1`}>
              <label htmlFor='mobile' className='w-[100px] font-medium text-lg'>
                Nationality:
              </label>
              <select
                name=''
                id=''
                className={`outline-none p-3 rounded-md   placeholder:italic flex-1 `}
                onChange={(e) => setNationality(e.target.value)}
                value={nationality}>
                <option value='Bangladeshi'>Bangladeshi</option>
                <option value='Pakistani'>Pakistani</option>
                <option value='Indian'>Indian</option>
              </select>
            </div>
          </div>
          {/* nationality-end */}

          {/* file-start */}

          <div className='flex-1 grid col-span-2'>
            <div
              className={`flex gap-1 bg-white/50  items-center p-4 rounded-md flex-1`}>
              <label htmlFor='mobile' className='w-[100px] font-medium text-lg'>
                File:
              </label>
              <input
                type='file'
                className={`outline-none p-3 rounded-md   placeholder:italic flex-1 bg-white`}
                onChange={(e) => setFile(e.target.files)}
                multiple
              />
            </div>
          </div>
          {/* file-end */}

          {/* button-start */}
          <div className='flex-1 grid col-span-2'>
            <div
              className={`flex gap-1 bg-white/50  items-center p-4 rounded-md flex-1`}>
              <button
                className={`outline-none p-3 rounded-md   font-medium flex-1 bg-white`}
                type='submit'>
                Submit
              </button>
            </div>
          </div>
          {/* button-end */}
        </form>
      </div>
    </div>
  );
};

export default NewForm1;

const InputFeild = ({ label, htmFor, placeholder, value, onChange, type }) => {
  return (
    <div
      className={`${htmFor == "email" ? "grid col-span-2 " : ""} ${
        htmFor == "address" ? "grid col-span-2 " : ""
      } `}>
      <div className={`flex gap-1 bg-white/50  items-center p-4 rounded-md`}>
        <label htmlFor={htmFor} className='w-[100px] font-medium text-lg'>
          {label}
        </label>
        <input
          type={type}
          className={`outline-none p-3 rounded-md   placeholder:italic flex-1 ${
            htmFor == "email" ? "flex-1" : ""
          } ${htmFor == "address" ? "flex-1" : ""} `}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

{
  /* <label htmlFor='mobile' className='w-[100px] font-medium text-lg'>
                Mobile:
              </label> */
}
