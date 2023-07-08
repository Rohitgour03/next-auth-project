import React from 'react'

const TopProductCard = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h3 className='text-[1.125rem] font-bold text-black'>Top products</h3>
        <div className='text-[0.75rem] text-[#858585] flex items-center gap-[0.37rem] '>
          <span>May - June 2021</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
            <path d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z" fill="#858585"/>
          </svg>
        </div>
      </div>

      <div className='flex gap-[4.44rem] justify-center items-center'>
        <div>
          <img src="./Pie Chart.png" alt="chart image" />
        </div>

        <div className='mt-[1.25rem] flex flex-col gap-[1.31rem]'>
          <div className='relative'>
            <p className='text-[0.875rem] font-bold text-black before:content-[""] before:w-[0.6875rem] before:h-[0.6875rem] before:rounded-[10px] before:bg-[#98D89E] before:absolute before:left-[-1.25rem] before:top-[0.3rem]'>
              Basic Tees
            </p>
            <p className='text-[0.75rem] text-[#858585]'>55%</p>
          </div>

          <div className='relative'>
            <p className='text-[0.875rem] font-bold text-black before:content-[""] before:w-[0.6875rem] before:h-[0.6875rem] before:rounded-[10px] before:bg-[#F6DC7D] before:absolute before:left-[-1.25rem] before:top-[0.25rem]'>Custom Short Pants</p>
            <p className='text-[0.75rem] text-[#858585]'>31%</p>
          </div>

          <div className='relative'>
            <p className='text-[0.875rem] font-bold text-black before:content-[""] before:w-[0.6875rem] before:h-[0.6875rem] before:rounded-[10px] before:bg-[#EE8484] before:absolute before:left-[-1.25rem] before:top-[0.25rem]'>Super Hoodies</p>
            <p className='text-[0.75rem] text-[#858585]'>14%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopProductCard