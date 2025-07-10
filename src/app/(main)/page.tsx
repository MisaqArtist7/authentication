import React from 'react'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpSchemaType } from '@/validations/signUpSchema';

export default function SignUp() {
  
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema)
  })

  return (
    <section className='container flex flex-col-reverse gap-7 md:gap-0 md:flex-row items-center justify-center min-h-screen my-3 xl:my-0'>
      <div>
        <div className='w-[90%] xl:w-[55%] mx-auto'>

          <div className='flex flex-col gap-5 justify-center'>
            <h2 className='text-[var(--primary-color)] font-semibold text-3xl text-center md:text-left md:text-4xl'>Welcome Back  👋</h2>
            <p className='text-center md:text-left'>Today is a new day. It&apos;s your day. You shape it. 
            Sign in to start managing your projects.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} action="" className='my-7 flex flex-col gap-3'>
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Email</label>
              <input {...register("email")}
               type="text" placeholder='Example@email.com' className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-xl placeholder:text-[#8897AD]'/>
              {errors.email && (
                <span className='text-red-500 text-sm'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Password</label>
              <input {...register("password")}
              type="text" placeholder='At least 8 characters' className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-xl placeholder:text-[#8897AD]'/>
              {errors.password && (
                <span className='text-red-500 text-sm'>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className='flex flex-col justify-center items-end gap-3 mt-3'>
              <span className='text-[#1E4AE9] hover:cursor-pointer'>Forgot Password?</span>
              <button type='submit' className='w-full py-2.5 bg-[#162D3A] hover:bg-[#17252d] text-white rounded-xl'>Sign in</button>
            </div>
          </form>

          <div className='flex-row-center relative'>
            <span className='absolute w-[45%] h-[1.3px] bg-[#CFDFE2] rounded left-0'></span>
            <span className='text-[#294957]'>Or</span>
            <span className='absolute w-[45%] h-[1.3px] bg-[#CFDFE2] rounded right-0'></span>
          </div>

          <div className='my-5 flex justify-between items-center md:flex md:flex-col gap-2'>

            <div className='flex justify-center items-center gap-2 w-full py-2.5 bg-[#F3F9FA] rounded-xl border border-gray-200'>
              <div className='flex items-center justify-start gap-2 w-[80%] md:w-[55%] xl:w-[60%] lg:w-[40%] xl:text-[16px] text-[14.5px]'>
                <Image src="/images/Google.svg" alt="" width={25} height={0}/>
                <span className='text-[#313957] hover:cursor-pointer'>Sign in with Google</span>  
              </div>
            </div> 
            <div className='flex justify-center items-center gap-2 w-full py-2.5 bg-[#F3F9FA] rounded-xl border border-gray-200'>
              <div className='flex items-center justify-start gap-2 w-[80%] md:w-[55%] xl:w-[60%] lg:w-[40%] xl:text-[16px] text-[14.5px]'>
                <Image src="/images/Facebook.svg" alt="" width={25} height={0}/>
                <span className='text-[#313957] hover:cursor-pointer'>Sign in with Facebook</span>  
              </div>
            </div> 

          </div>

          <div className='flex-row-center mt-9'>
            <span className='text-[#313957] text-[15px]'>Don&apos;t you have an account? <span className='text-[#1E4AE9] border-b hover:border-none hover:cursor-pointer'>Sign up</span></span>
          </div>
        </div>
      </div>
      <div>
        <Image src="/images/Art.svg" alt="" width={555} height={0}/>
      </div>
    </section>
  )
}
