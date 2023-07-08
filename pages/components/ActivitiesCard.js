import React, { useEffect, useState }  from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ActivitiesCard = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://goweather.herokuapp.com/weather/India');
      const jsonData = await response.json();
      setData(jsonData.forecast)
      console.log("Yeah! Got the data")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  const exclusiveData = data.map((obj, index) => {
    return {
      day: `Day ${index+1}`, 
      temperature: parseInt(obj.temperature.split(" ")[0]),
      wind: parseInt(obj.wind.split(" ")[0]),
      quanity: 10+3*index,
    }
  })
  
  return (
    <div>
      <h3 className='text-[1.125rem] font-bold text-black'>Activities</h3>
      <div>
        <div className='text-[0.75rem] text-[#858585] flex items-center gap-[0.37rem] '>
          <span>May - June 2021</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
            <path d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z" fill="#858585"/>
          </svg>
        </div>
        <div></div>
      </div>

      <div className='mt-[1rem] h-[15rem]'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={exclusiveData}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#E9A0A0" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="wind" stroke="#9BDD7C" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ActivitiesCard