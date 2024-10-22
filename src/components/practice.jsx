/** @format */

import React from "react";
import { useForm } from "react-hook-form";

const Practice = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const NameValue = watch("fname");
  const EmailValue = watch("lname");

  // const handleShow = () => {
  //   const values = getValues("fname");
  //   console.log({ values });
  // };

  const onSubmit = (values) => {
    console.log({ values });
  };

  return (
    <form
      className='min-h-screen bg-green-200 flex items-center justify-center flex-col gap-5'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='flex items-center gap-2'>
        <p>Name:{NameValue}</p>
        <p>Email:{EmailValue} </p>
      </div>
      <div>
        <label htmlFor=''>First name:</label>
        <input type='text' {...register("fname")} />
      </div>
      <div>
        <label htmlFor=''>Last name:</label>
        <input type='text' {...register("lname")} />
      </div>
      <button>submit</button>
    </form>
  );
};

export default Practice;
