"use client";

import React from 'react';
import Image from 'next/image';
import z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

// Zod schema for form validation
const signInSchema = z.object({
  email: z.email({ message: "please enter valid email" }),
  password: z.string()
    .min(8, { message: "password must be at least 8 characters" })
    .max(32, { message: "password must be at most 32 characters" })
    .regex(/[A-Z]/, { message: "password must include at least one uppercase letter" })
    .regex(/[a-z]/, { message: "password must include at least one lowercase letter" })
    .regex(/[0-9]/, { message: "password must include at least one number" })
    .regex(/[!@#$%^&*]/, { message: "password must include at least one special character !@#$%^&*" }) 
    .refine(val => !/\s/.test(val), { message: "password must not contain spaces" })
});

type SignInSchemaType = z.infer<typeof signInSchema>;

export default function SignUp() {
  // Initialize react-hook-form with zod schema validation
  const { register, handleSubmit, formState: { errors } } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema)
  });

  // Submit handler
  const onSubmit = (data : SignInSchemaType) => {
    console.log(data);
    // You can replace this with actual login logic (API call, etc.)
  };
  
  // show current password to user
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <section className='w-full min-h-screen flex items-center justify-center mb-4'>
      {/* Decorative image at top-right corner */}
      <div className='absolute right-0 top-0'>
        <Image src="/images/Decore.svg" alt="" width={333} height={333} className='object-cover w-full'/>
      </div>

      <div className='container grid grid-cols-1 md:grid-cols-9 w-full max-w-7xl gap-2 md:gap-0 items-center'>
        
        {/* Left-side illustration */}
        <div className='col-span-4 p-1 h-full overflow-hidden z-50'>
          <Image src="/images/Art.svg" alt="" width={7} height={7} className='object-cover rounded-lg w-[95%] h-full overflow-hidden'/>
        </div>

        {/* Login form card */}
        <div className='col-span-4 z-50 h-full flex flex-col justify-center shadow px-6 py-4 bg-white rounded-lg'>
          
          {/* Headings */}
          <div>
            <h1 className='pt-7 font-bold text-5xl text-center'>Welcome back 👋</h1>
            <h2 className='text-center pt-4'>Today is a new day. It&apos;s your day. You shape it. Sign in to start managing your projects.</h2>
          </div>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className='my-3 flex flex-col gap-3'>
            
            {/* Email field */}
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Email:</label>
              <input
                {...register("email")}
                type="text"
                placeholder='Enter your email'
                className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'
              />
              {errors.email && (
                <span className='text-red-500 text-sm'>{errors.email.message}</span>
              )}
            </div>

            {/* Password field */}
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Password:</label>
              <div className='w-full relative'>
                <input
                  {...register("password")}
                  type={`${showPassword ? 'text' : 'password'}`}
                  placeholder='Enter your password'
                  className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD] w-full'
                />
                {showPassword 
                ? <span onClick={togglePasswordVisibility} className='absolute flex-row-center right-3 bottom-0 top-0'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </span>
                :
                  <span onClick={togglePasswordVisibility} className='absolute flex-row-center right-3 bottom-0 top-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </span>
                }
              </div>
              {errors.password && (
                <span className='text-red-500 text-sm'>{errors.password.message}</span>
              )}
            </div>

            {/* Remember me + Submit button */}
            <div className='flex flex-col justify-center items-end gap-3 mt-3'>
              <span className='text-[#1E4AE9]'>
                Remember me! <input type="checkbox" />
              </span>
              <button
                type='submit'
                className='w-full py-2.5 bg-[#162D3A] hover:bg-black text-white rounded-lg transition ease-in duration-100'
              >
                Login
              </button>
            </div>
          </form>

          {/* Redirect to sign up */}
          <div className='flex-row-center'>
            <span className='text-[#313957] text-[15px]'>
              Don&apos;t you have an account?{" "}
              <Link href="/signup" className='text-[#1E4AE9] border-b hover:border-none hover:cursor-pointer'>
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
