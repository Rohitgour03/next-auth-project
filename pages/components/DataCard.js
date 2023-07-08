import React from 'react'

export const DataCard = ({color, title, quantity, svgSrc}) => {

  const clas = `bg-[${color}] flex flex-col w-[13.81581rem] h-[7.5rem] px-[1.6rem] py-[1.25rem] rounded-[1rem]`
  console.log(color)
  return (
    <div className={clas}>
      <img className='h-[1.5rem] w-fit self-end' src={svgSrc} alt="" />
      <span className='text-black block text-[0.875rem] mb-[0.3rem]'>{title}</span>
      <span className='text-black block text-[1.5rem] font-bold '>{quantity}</span>
    </div>
  )
}
