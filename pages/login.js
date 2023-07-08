import { signIn, getSession } from 'next-auth/react'
import LoginComponent from './components/LoginComponent'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export async function getServerSideProps(context){
  const session = await getSession(context)
  if(session){
    return{
      redirect: {
        destination: '/dashboard'
      },
    }
  }
  return {
    props: { }
  }
}

const login = () => {
  const router = useRouter()
  const [credentials, setCredentials] = useState({email: "", password: ""})

  const submitHandler = async (e) => {
    e.preventDefault()
    const signinResponse = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false
    })
    console.log(signinResponse)
    
    if(signinResponse){
      console.log("Successfully authenticated!")
      console.log(router)
      router.push('/dashboard')
    } else{
      console.log("Error: ", signinResponse)
    }
  }

  return (
    <div className='h-[100vh] md:flex '>
      <section className='bg-black flex items-center justify-center h-[25%] md:h-full md:w-[40%]'>
        <span className='text-white text-3xl md:text-7xl font-bold'>Board.</span>
      </section>
      <section className='bg-[#F5F5F5] flex items-center justify-center h-[75%] md:h-full md:w-[60%]'>
        <LoginComponent 
          credentials={credentials}
          setCredentials={setCredentials}
          submitHandler={submitHandler}
        />
      </section>
    </div>
  )
}

export default login