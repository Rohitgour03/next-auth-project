import React from 'react'

const ScheduleCard = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h3 className='text-[1.125rem] font-bold text-black'>Today&apos;s schedule</h3>
        <div className='text-[0.75rem] text-[#858585] flex items-center gap-[0.37rem] '>
          <span>See All</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
            <path d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z" fill="#858585"/>
          </svg>
        </div>
      </div>

      <div className='flex flex-col gap-[0.81rem] mt-[1.56rem]'>
        <div className='px-[0.94rem] border-l-[0.3125rem] border-[#9BDD7C]'>
          <p className='text-[#666] text-[0.875rem] font-bold'>Meeting with suppliers from Kuta Bali</p>
          <p className='text-[0.75rem] text-[#999]'>14.00-15.00</p>
          <p className='text-[0.75rem] text-[#999]'>at Sunset Road, Kuta, Bali</p>
        </div>
        <div className='px-[0.94rem] border-l-[0.3125rem] border-[#6972C3]'>
          <p className='text-[#666] text-[0.875rem] font-bold'>Check operation at Giga Factory 1</p>
          <p className='text-[0.75rem] text-[#999]'>18.00-20.00</p>
          <p className='text-[0.75rem] text-[#999]'>at Central Jakarta </p>
        </div>
      </div>
    </div>
  )
}

export default ScheduleCard