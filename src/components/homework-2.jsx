/** @format */
import { CiUser } from "react-icons/ci";
import React, { useState } from "react";
import { MdAddIcCall } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const NewForm2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const [password, setPassword] = useState("");
  const onSubmit = (value) => {
    console.log({ value });
  };

  return (
    <div className='bg-black min-h-screen flex items-center justify-center  '>
      <div className=' p-7'>
        <form
          action=''
          className='bg-slate-100 border  border-x-zinc-400 p-10 md:block rounded-md'
          onSubmit={handleSubmit(onSubmit)}>
          <div className='p-6'>
            <p className='text-2xl font-semibold  border-black'>
              Registration Form
            </p>

            <span className='bg-zinc-400 h-[1px] w-full block max-w-[250px] my-1'></span>

            <p className='text-sm font-medium text-zinc-500 pt-1'>
              Fill out the form carefully for registration
            </p>
          </div>
          <span className='bg-zinc-400 h-[1px] w-full block'></span>
          <div className='form-info p-6 space-y-12'>
            <div className='studentname text-center md:text-start'>
              <p className='font-medium text-lg mb-2'> Student Name</p>
              <div className='grid md:grid-cols-3 gap-1 '>
                <InputFeild
                  label='First Name'
                  type='text'
                  name='First Name'
                  register={register}
                  errors={errors}
                  required
                  htmlFor='First Name'
                  id='First Name'
                />
                <InputFeild
                  label='Middle Name'
                  htmlFor='Middle Name'
                  id='Middle Name'
                  name='mname'
                  type='text'
                  register={register}
                  errors={errors}
                />
                <InputFeild
                  label='Last Name'
                  name='name'
                  type='text'
                  register={register}
                  errors={errors}
                  required
                  htmlFor='Last Name'
                  id='Last Name'
                />
              </div>
            </div>

            {/* birth date and gender option start */}
            <div className='flex gap-2 '>
              <div className='flex-1'>
                <p className='font-medium text-lg mb-2'>Birth Date</p>
                <div className='grid grid-cols-3 gap-1 '>
                  <InputFeild
                    label='Day'
                    htmlFor='Day'
                    id='Day'
                    type='number'
                    name='fname'
                    register={register}
                    errors={errors}
                    required
                  />
                  <InputFeild
                    label='Month'
                    htmlFor='Month'
                    id='Month'
                    type='number'
                    name='fname'
                    register={register}
                    errors={errors}
                    required
                  />
                  <InputFeild
                    label='Year'
                    htmlFor='Year'
                    id='Year'
                    type='number'
                    name='fname'
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
              </div>
              <div className='flex-1'>
                <p className='font-medium text-lg mb-2'>Mobile</p>
                <InputFeild
                  label='Mobile'
                  htmlFor='Mobile'
                  id='Mobile'
                  type='number'
                  placeholder='type your mobile number'
                  name='fname'
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            {/* birth date and gender option end */}

            {/* address-start */}
            <div className='address flex flex-col gap-2'>
              <div>
                <p className='font-medium text-lg mb-2'>Address:</p>
                <InputFeild
                  label='Street Address'
                  htmlFor='Street Address'
                  id='Street Address'
                  type='text'
                  name='Street Address'
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <InputFeild
                label='Street Address Line 2'
                htmlFor='Street Address Line 2'
                type='text'
                id='Street Address Line 2'
                name='Street Address Line 2'
                register={register}
                errors={errors}
                required
              />

              <div className='grid grid-cols-2 gap-2'>
                <InputFeild
                  label='City Code'
                  htmlFor='City Code'
                  id='City Code'
                  type='text'
                  name='City Code'
                  register={register}
                  errors={errors}
                  required
                />
                <InputFeild
                  label='Province/State'
                  htmlFor='Province/State'
                  id='Province/State'
                  type='text'
                  name='Province/State'
                  register={register}
                  errors={errors}
                  required
                />
              </div>
            </div>
            {/* address-end */}

            {/* others-info-start */}
            <div className='grid grid-cols-2 gap-x-2 gap-y-3'>
              <div className='flex flex-col justify-center'>
                <p className='font-medium text-lg mb-2'>Student E-mail:</p>
                <InputFeild
                  label='Email'
                  htmlFor='Email'
                  id='Email'
                  type='email'
                  placeholder='name@gmail.com'
                  name='Email'
                  register={register}
                  errors={errors}
                  required
                />
              </div>

              <div>
                <p className='font-medium text-lg mb-2'>Password:</p>
                <InputFeild
                  label='Password'
                  htmlFor='Password'
                  id='Password'
                  type='password'
                  placeholder='Type strong password'
                  name='Password'
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div>
                <p className='font-medium text-lg mb-2'>Mobile:</p>
                <InputFeild
                  label='Mobile'
                  htmlFor='Mobile'
                  id='Mobile'
                  type='number'
                  name='Mobile'
                  register={register}
                  errors={errors}
                  required
                />
              </div>

              <div>
                <p className='font-medium text-lg mb-2'>Nationality:</p>
                <Select
                  htmlFor='Nationality'
                  id='Nationality'
                  type='text'
                  name='Nationality'
                  register={register}
                  errors={errors}
                  required
                  options={[
                    {
                      label: "Bangladeshi",
                    },
                    {
                      label: "PakisTani",
                    },
                    {
                      label: "Indian",
                    },
                  ]}
                />
              </div>

              <div>
                <p className='font-medium text-lg mb-2'>Religion:</p>
                <InputFeild
                  label='Religion'
                  htmlFor='Religion'
                  id='Religion'
                  type='text'
                  name='Religion'
                  register={register}
                  errors={errors}
                  required
                />
              </div>

              <div>
                <p className='font-medium text-lg mb-2'>Hobby:</p>
                <InputFeild
                  label='Hobby'
                  htmlFor='Hobby'
                  id='Hobby'
                  type='text'
                  name='Hobby'
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            {/* others-info-end*/}

            {/* available-course-start */}

            <div className='bg-white px-2  py-4 rounded-md border border-zinc-400'>
              <p className='font-medium text-lg mb-2'>Course Schedule:</p>
              <div className='flex flex-col '>
                <Radio
                  htmlFor='Morning'
                  id='Morning'
                  type='radio'
                  className='self-start'
                  name='radio'
                  register={register}
                  errors={errors}
                  label='Morning'
                  value='Morning'
                />
                <Radio
                  htmlFor='Afternoon'
                  id='Afternoon'
                  type='radio'
                  name='radio'
                  register={register}
                  errors={errors}
                  label='Afternoon'
                  value='Afternoon'
                />
                <Radio
                  htmlFor='Evening'
                  id='Evening'
                  type='radio'
                  name='radio'
                  register={register}
                  errors={errors}
                  label='Evening'
                  value='Evening'
                />
              </div>
            </div>
            {/* available-course-end */}

            {/* select-course-start */}

            <div className='bg-white py-4 px-2 rounded-md border border-zinc-400'>
              <p className='font-medium text-lg mb-2'>Select Course:</p>
              <div className='grid md:grid-cols-4 grid-cols-2 '>
                <Checkbox
                  htmlFor='Web Development'
                  id='Web Development'
                  value='Web Development'
                  type='checkbox'
                  name='Web Development'
                  register={register}
                  errors={errors}
                  label='Web Development'
                />
                <Checkbox
                  htmlFor='Graphic Design'
                  id='Graphic Design'
                  value='Graphic Design'
                  type='checkbox'
                  name='Graphic Design'
                  register={register}
                  errors={errors}
                  label='Graphic Design'
                />
                <Checkbox
                  htmlFor='Motion Graphic'
                  id='Motion Graphic'
                  value='Motion Graphic'
                  type='checkbox'
                  name='Motion Graphic'
                  register={register}
                  errors={errors}
                  label='Motion Graphic'
                />
                <Checkbox
                  htmlFor='Video Graphy'
                  id='Video Graphy'
                  value='Video Graphy'
                  type='checkbox'
                  name='Video Graphy'
                  register={register}
                  errors={errors}
                  label='Video Graphy'
                />
              </div>
            </div>
            {/* select-course-end */}

            {/* Choose Packages-start */}
            <div className='bg-white py-4 px-2 rounded-md border border-zinc-400'>
              <p className='font-medium text-lg mb-2'>Select Course:</p>

              <Select
                htmlFor='Web Development'
                id='Web Development'
                value='Web Development'
                type='checkbox'
                name='Web Development'
                register={register}
                errors={errors}
                options={[
                  {
                    label: "Web Development",
                  },
                  {
                    label: "App Development",
                  },
                  {
                    label: "Graphic Design",
                  },
                ]}
              />
            </div>
            {/* Choose Packages-end */}
            <button
              className='w-full bg-white border-zinc-400 border outline-none py-2 rounded-md font-medium'
              type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewForm2;

const InputFeild = ({
  label,
  id,
  htmlFor,
  register,
  name,
  errors,
  type,
  placeholder,
  required = false,
}) => {
  console.log(`hello from ${name}`);
  // const Icon = icon;
  // const [type, setType] = useState(props.type || "text");

  return (
    <div className='flex flex-col '>
      <div className=' flex items-center flex-col'>
        {/* {icon && (
          <Icon className='absolute w-7 pl-3 h-7 top-1/2 -translate-y-1/2 text-zinc-400' />
        )} */}
        <input
          className={` border border-zinc-400 outline-none p-2  rounded-md w-full placeholder:text-sm placeholder:text-zinc-400  `}
          placeholder={placeholder}
          type={type}
          id={id}
          {...register(name, { required: required })}
        />
        <div className='flex gap-2 items-center'>
          <label htmlFor={htmlFor} className='text-sm text-zinc-500 text-start'>
            {label}
          </label>
          {errors[name]?.type == "required" && (
            <p className='text-red-500 text-sm'> is required</p>
          )}
        </div>

        {/* {props.type == "password" && (
          <button
            type='button'
            className='absolute top-1/2 -translate-y-1/2 right-2'
            onClick={() =>
              setType((crr) => (crr == "password" ? "text" : "password"))
            }>
            {type == "password" ? "show" : "hide"}
          </button>
        )} */}
      </div>
    </div>
  );
};

const Radio = ({
  label,
  id,
  htmlFor,
  register,
  name,
  errors,
  type,
  placeholder,
  required = false,
  value,
}) => {
  console.log(`hello from ${name}`);

  return (
    <div className='flex gap-2'>
      <input
        className={` border border-zinc-400 outline-none p-2  rounded-md  placeholder:text-sm placeholder:text-zinc-400  `}
        placeholder={placeholder}
        type={type}
        id={id}
        {...register(name, { required: required })}
        value={value}
      />

      <label htmlFor={htmlFor} className=' text-zinc-500 text-start '>
        {label}
      </label>
    </div>
  );
};

const Checkbox = ({
  label,
  id,
  htmlFor,
  register,
  name,
  errors,
  type,
  placeholder,
  required = false,
  value,
}) => {
  console.log(`hello from ${name}`);

  return (
    <div className='flex gap-2'>
      <input
        className={` border border-zinc-400 outline-none p-2  rounded-md  placeholder:text-sm placeholder:text-zinc-400  `}
        placeholder={placeholder}
        type={type}
        id={id}
        {...register(name, { required: required })}
        value={value}
      />

      <label htmlFor={htmlFor} className=' text-zinc-500 text-start '>
        {label}
      </label>
    </div>
  );
};
const Select = ({
  label,
  id,
  htmlFor,
  register,
  name,
  errors,
  type,
  placeholder,
  required = false,
  value,
  options = [],
}) => {
  console.log(`hello from ${name}`);

  return (
    <div className=''>
      <label htmlFor={htmlFor} className='font-medium '>
        {label}
      </label>
      <select
        className={` border border-zinc-400 outline-none p-2 bg-white w-full rounded-md    `}
        {...register(name)}
        value={value}>
        {options.map((opt, idx) => (
          <option value={opt.value} key={idx}>
            {opt?.label}
          </option>
        ))}
      </select>
    </div>
  );
};
