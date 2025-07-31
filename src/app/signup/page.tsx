"use client";

import React from 'react';
import Image from 'next/image';
import z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

// Zod schema for sign-up form validation
const signUpSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32, { message: "Password must be at most 32 characters" })
    .regex(/[A-Z]/, { message: "Must include at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Must include at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Must include at least one number" })
    .regex(/[!@#$%^&*]/, { message: "Must include at least one special character (!@#$%^&*)" })
    .refine(val => !/\s/.test(val), { message: "Password must not contain spaces" }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

type SignUpSchemaType = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data);
    // Here you can send data to backend (e.g., using fetch or axios)
  };

  return (
    <section className='w-full min-h-screen flex items-center justify-center mb-4'>
      
      {/* Top-right decorative image */}
      <div className='absolute right-0 top-0'>
        <Image src="/images/Decore.svg" alt="" width={333} height={333} className='object-cover w-full' />
      </div>

      <div className='container grid grid-cols-1 md:grid-cols-9 w-full max-w-7xl gap-1 md:gap-0 items-center'>
        
        {/* Left-side illustration */}
        <div className='col-span-4 p-1 h-full overflow-hidden z-50'>
          <Image src="/images/Art.svg" alt="" width={7} height={7} className='object-cover rounded-lg w-[95%] h-full overflow-hidden' />
        </div>

        {/* Form Card */}
        <div className='col-span-4 z-50 h-full flex flex-col justify-center shadow px-6 py-4 bg-white rounded-lg'>
          
          {/* Heading */}
          <div>
            <h1 className='pt-7 font-bold text-5xl text-center'>Welcome to Heaven Flower</h1>
          </div>

          {/* Sign-up form */}
          <form onSubmit={handleSubmit(onSubmit)} className='my-3 flex flex-col gap-3'>

            {/* Full name */}
            <div className='flex flex-col gap-1'>
              <label htmlFor="">Full name:</label>
              <input
                {...register("fullName")}
                type="text"
                placeholder='Enter your full name'
                className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'
              />
              {errors.fullName && <span className='text-red-500 text-sm'>{errors.fullName.message}</span>}
            </div>

            {/* Email */}
            <div className='flex flex-col gap-1'>
              <label htmlFor="">Email:</label>
              <input
                {...register("email")}
                type="email"
                placeholder='Enter your email'
                className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'
              />
              {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className='flex flex-col gap-1'>
              <label htmlFor="">Password:</label>
              <input
                {...register("password")}
                type="password"
                placeholder='Enter your password'
                className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'
              />
              {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
            </div>

            {/* Confirm Password */}
            <div className='flex flex-col gap-1'>
              <label htmlFor="">Confirm Password:</label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder='Re-enter your password'
                className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'
              />
              {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}
            </div>

            {/* Submit button */}
            <div className='flex flex-col items-end gap-3 mt-3'>
              <button type='submit' className='w-full py-2.5 bg-[#162D3A] hover:bg-black text-white rounded-lg transition ease-in duration-100'>
                Sign up
              </button>
            </div>
          </form>

          {/* Link to login */}
          <div className='flex-row-center'>
            <span className='text-[#313957] text-[15px]'>
              Already have an account?{" "}
              <Link href="/" className='text-[#1E4AE9] border-b hover:border-none hover:cursor-pointer'>
                Login
              </Link>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
