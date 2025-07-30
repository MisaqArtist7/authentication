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
    <section className='w-full min-h-screen flex items-center justify-center mb-4'>
      <div className='absolute right-0 top-0'>
        <Image src="/images/Decore.svg" alt="" width={333} height={333} className='object-cover w-full'/>
      </div>

      <div className='container grid grid-cols-1 md:grid-cols-9 w-full max-w-7xl gap-1 md:gap-0 items-center'>

          <div className='col-span-4 p-1 h-full overflow-hidden z-50'>
            <Image src="/images/Art.svg" alt="" width={7} height={7} className='object-cover rounded-lg w-[95%] h-full overflow-hidden'/>
          </div>

          <div className='col-span-4 z-50 h-full flex flex-col justify-center shadow px-6 py-4 bg-white rounded-lg'>
            <div>
              <h1 className='pt-7 font-bold text-5xl text-center'>Welcome to Heaven Flower</h1>
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
                <button type='submit' className='w-full py-2.5 bg-[#162D3A] hover:bg-black text-white rounded-lg transition ease-in duration-100'>Sign up</button>
              </div>
            </form>

            <div className='flex-row-center'>
              <span className='text-[#313957] text-[15px]'>Already have an account! <Link href="/" className='text-[#1E4AE9] border-b hover:border-none hover:cursor-pointer'>Login</Link></span>
            </div>
          </div>

      </div>
    </section>
  )
}
