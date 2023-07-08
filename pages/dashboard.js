import React from 'react'
import { useSession, getSession } from 'next-auth/react'

import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
import ActivitiesCard from './components/ActivitiesCard'
import TopProductCard from './components/TopProductCard'
import ScheduleCard from './components/ScheduleCard'

import Link from 'next/link'
import Image from 'next/image'

export async function getServerSideProps(context){
  const session = await getSession(context)

  if(!session){
    return{
      redirect: {
        destination: '/login'
      },
    }
  }
  return {
    props: { session }
  }
}

const Dashboard = () => {

  const { data: session } = useSession({required: true})
  
  let userImg;
  if(session){
    if(session.user.image){
      userImg = session.user.image.toString()
    } else{
      userImg = "/image 1.png"
    }
  }

  const avatar = userImg
  const avatarElement = <img src={avatar} width={100} height={100} alt="user avatar" className='w-[100%] rounded-[100px]' />

  // const dashboardData = [
  //   {
  //     color: "#DDEFE0",
  //     title: "Total Revenues",
  //     quantity: "$2,129,430",
  //     svgSrc: "/total_revenue_icon.svg" 
  //   },
  //   {
  //     color: "#F4ECDD",
  //     title: "Total Transactions",
  //     quantity: "1,520",
  //     svgSrc: "/total_transactions_icon.svg" 
  //   },
  //   {
  //     color: "#EFDADA",
  //     title: "Total Likes",
  //     quantity: "9,721",
  //     svgSrc: "/total_likes_icon.svg" 
  //   },
  //   {
  //     color: "#DEE0EF",
  //     title: "Total Users",
  //     quantity: "829",
  //     svgSrc: "/total_user_icon.svg" 
  //   },
  // ]

  // const dashboardCards = dashboardData.map((data, index) => {
  //   return <DataCard key={index} color={data.color} title={data.title} quantity={data.quantity} svgSrc={data.svgSrc} />
  // })


  if(!session){
    return (
      <div>
        <span>Sorry, You are not</span> 
        <Link href="/login">Signed in</Link>
      </div>
    )
  } else{
    return (
      <div className='w-full bg-[#F5F5F5] p-[2.5rem] lg:flex md:min-h-[64rem]'>
  
        <div className='flex-initial lg:w-[17.5rem]'>
          <Sidebar />
        </div>
  
        <div className='lg:w-[70%] md:ml-[3.75rem] md:mr-[1.5rem] xl:grow'>
          <div className='my-12 lg:my-4 md:w-full'>
            <div className='sm:flex justify-between items-center'>
              <h1 className='text-black text-[1.5rem] font-bold'>Dashboard</h1>
              <div className='mt-[1.5rem] sm:mt-0 flex gap-[1.8rem] items-center'>
                <SearchBar />
                <div className='ml-[auto] sm:ml-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path d="M16 11.586V8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8V11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14V16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15H2V14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12V8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8V12C14 12.266 14.105 12.52 14.293 12.707L16 14.414V15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18H6.182C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z" fill="black"/>
                  </svg>
                </div>
                <div className='w-[1.875rem] h-[1.875rem] bg-[#C4C4C4] rounded-[100px]'>
                  {avatarElement}
                </div>
              </div>
            </div>

            <div className='w-full my-[2.5rem] flex flex-wrap gap-y-[2.5rem] items-center justify-between rounded-lg md:min-h-[7.5rem]'>
              <div className='bg-[#DDEFE0] flex flex-col w-[13.81581rem] h-[7.5rem] px-[1.6rem] py-[1.25rem] rounded-[1rem]'>
                <Image
                  src="/total_revenue_icon.svg"
                  width={26.4}
                  height={24}
                  alt="Total revenue svg"
                  className='self-end'
                />
                <span className='text-black block text-[0.875rem] mb-[0.3rem]'>Total Revenues</span>
                <span className='text-black block text-[1.5rem] font-bold '>$2,129,430</span>
              </div>

              <div className='bg-[#F4ECDD] flex flex-col w-[13.81581rem] h-[7.5rem] px-[1.6rem] py-[1.25rem] rounded-[1rem]'>
                <Image
                    src="/total_transactions_icon.svg"
                    width={20.79}
                    height={24}
                    alt="Total revenue svg"
                    className='self-end'
                  />
                <span className='text-black block text-[0.875rem] mb-[0.3rem]'>Total Transactions</span>
                <span className='text-black block text-[1.5rem] font-bold '>1,520</span>
              </div>

              <div className='bg-[#EFDADA] flex flex-col w-[13.81581rem] h-[7.5rem] px-[1.6rem] py-[1.25rem] rounded-[1rem]'>
                <Image
                    src="/total_likes_icon.svg"
                    width={23.3}
                    height={24}
                    alt="Total likes svg"
                    className='self-end'
                  />
                <span className='text-black block text-[0.875rem] mb-[0.3rem]'>Total Likes</span>
                <span className='text-black block text-[1.5rem] font-bold '>9,721</span>
              </div>

              <div className='bg-[#DEE0EF] flex flex-col w-[13.81581rem] h-[7.5rem] px-[1.6rem] py-[1.25rem] rounded-[1rem]'>
                <Image
                    src="/total_user_icon.svg"
                    width={36.82}
                    height={24}
                    alt="Total user svg"
                    className='self-end'
                  />  
                <span className='text-black block text-[0.875rem] mb-[0.3rem]'>Total Users</span>
                <span className='text-black block text-[1.5rem] font-bold'>829</span>
              </div>
            </div>
          </div>
  
          <div className='my-[2.5rem] py-[1.88rem] px-[2.5rem] bg-white text-black rounded-[1.25rem] md:h-[22.4375rem] md:my-[2.5rem]'>
            <ActivitiesCard />
          </div>
  
          <div className='flex flex-col xl:flex-row gap-6 md:gap-[2.5rem] md:my-[2.5rem]'>
            <div className='py-[1.87rem] px-[2.5rem] bg-white rounded-[1.25rem] lg:h-[16rem] xl:w-[50%]'>
              <TopProductCard />
            </div>
            <div className='py-[1.87rem] px-[2.5rem] bg-white rounded-[1.25rem] lg:h-[16rem] xl:w-[50%]'>
              <ScheduleCard />
            </div>
          </div>
        </div>
  
      </div>
    )
  }
}

export default Dashboard