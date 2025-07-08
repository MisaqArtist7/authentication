import React from 'react'
import Image from 'next/image'
export default function SignUp() {
  return (
    <section className='container flex items-center justify-between my-7'>
      <div>
        <div className='w-[55%] mx-auto'>

          <div className='flex flex-col gap-5 justify-center'>
            <h2 className='text-[var(--primary-color)] font-semibold text-4xl'>Welcome Back  👋</h2>
            <p>Today is a new day. It&apos;s your day. You shape it. 
            Sign in to start managing your projects.</p>
          </div>

          <form action="" className='my-9 flex flex-col gap-3'>
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Example@email.com' className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-xl placeholder:text-[#8897AD]'/>
            </div>
            <div className='flex flex-col justify-center gap-1'> 
              <label htmlFor="">Password</label>
              <input type="text" placeholder='At least 8 characters' className='bg-[#F7FBFF] border border-[#D4D7E3] py-2 px-3 rounded-xl placeholder:text-[#8897AD]'/>
            </div>
            <div className='flex flex-col justify-center items-end gap-3 my-3'>
              <span className='text-[#1E4AE9]'>Forgot Password?</span>
              <button type='submit' className='w-full py-2.5 bg-[#162D3A] text-white rounded-xl'>Sign in</button>
            </div>
          </form>
        </div>
      </div>
      <div className='bg-amber-400'>
        <Image src="/images/Art.svg" alt="" width={525} height={0}/>
      </div>
    </section>
  )
}
