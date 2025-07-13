"use client";
import React from 'react'
import Image from 'next/image'
import z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
export default function SignUp() {
  
const signUpSchema = z.object({
  email: z.string().email({ message: "please enter valid email" }),
  password: z.string()
    .min(8, { message: "password must be at least 8 characters" })
    .max(32, { message: "password must be at most 32 characters" })
    .regex(/[A-Z]/, { message: "password must include at least one uppercase letter" })
    .regex(/[a-z]/, { message: "password must include at least one lowercase letter" })
    .regex(/[0-9]/, { message: "password must include at least one number" })
    .regex(/[!@#$%^&*]/, { message: "password must include at least one special character !@#$%^&*" }) 
    .refine(val => !/\s/.test(val), { message: "password must not contain spaces" })
})

  type SignUpSchemaType = z.infer<typeof signUpSchema>

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema)
  })

  const onSubmit = (data : SignUpSchemaType) => {
    console.log(data)
  }

  return (
    <section className='container flex flex-col-reverse gap-7 w-full lg:gap-3 md:flex-row items-center justify-center min-h-screen'>
        <div className='absolute right-0 top-0'>
          <img src="/images/Decore.svg" alt="" />
        </div>
        <div className='p-1 bg'>
          <Image src="/images/Art.svg" alt="" width={505} height={0}/>
        </div>

        <div className='w-[90%] xl:w-[40%] z-50'>
          <div>
            <h1 className='pt-7 font-semibold text-4xl text-center'>Welcome to Heaven Flower</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} action="" className='my-3 flex flex-col gap-3'>
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Full name:</label>
              <input {...register("email")}
               type="text" placeholder='Enter your full name' className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'/>
              {errors.email && (
                <span className='text-red-500 text-sm'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Email:</label>
              <input {...register("email")}
               type="text" placeholder='Enter your email' className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'/>
              {errors.email && (
                <span className='text-red-500 text-sm'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Password:</label>
              <input {...register("password")}
              type="text" placeholder='Enter your password' className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'/>
              {errors.password && (
                <span className='text-red-500 text-sm'>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Re-Password:</label>
              <input {...register("password")}
              type="text" placeholder='Re-enter your password' className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-lg placeholder:text-[#8897AD]'/>
              {errors.password && (
                <span className='text-red-500 text-sm'>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className='flex flex-col justify-center items-end gap-3 mt-3'>
              <span className='text-[#1E4AE9]'>Remember me! <input type="checkbox" /></span>
              <button type='submit' className='w-full py-2.5 bg-[#162D3A] hover:bg-[#17252d] text-white rounded-xl'>Sign up</button>
            </div>
          </form>

          <div className='flex-row-center relative'>
            <span className='absolute w-[45%] h-[1.3px] bg-[#CFDFE2] rounded left-0'></span>
            <span className='text-[#294957]'>Or</span>
            <span className='absolute w-[45%] h-[1.3px] bg-[#CFDFE2] rounded right-0'></span>
          </div>

          <div className='my-5 flex justify-between items-center md:flex md:flex-col gap-2'>

            <div className='flex justify-center items-center gap-2 w-full py-2.5 bg-[#F3F9FA] rounded-xl border border-gray-200'>
              <div className='flex items-center justify-start gap-2 w-[80%] md:w-[55%] xl:w-[50%] lg:w-[40%] xl:text-[16px] text-[14.5px]'>
                <Image src="/images/Google.svg" alt="" width={25} height={0}/>
                <span className='text-[#313957] hover:cursor-pointer'>Sign up with Google</span>  
              </div>
            </div> 
            <div className='flex justify-center items-center gap-2 w-full py-2.5 bg-[#F3F9FA] rounded-xl border border-gray-200'>
              <div className='flex items-center justify-start gap-2 w-[80%] md:w-[55%] xl:w-[50%] lg:w-[40%] xl:text-[16px] text-[14.5px]'>
                <Image src="/images/Facebook.svg" alt="" width={25} height={0}/>
                <span className='text-[#313957] hover:cursor-pointer'>Sign up with Facebook</span>  
              </div>
            </div> 

          </div>

          <div className='flex-row-center mt-9'>
            <span className='text-[#313957] text-[15px]'>Already have an account! <Link href="/" className='text-[#1E4AE9] border-b hover:border-none hover:cursor-pointer'>Login</Link></span>
          </div>
          
        </div>
    </section>
  )
}
