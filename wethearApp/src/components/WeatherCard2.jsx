import React from 'react'

const WeatherCard2 = ({humidity}) => {
  return (
    
    <div className="h-[90%] w-1/2 mx-14  bg-indigo-500/10 
                backdrop-blur-xl 
                border border-white/10  shadow-lg shadow-black/20 rounded-xl flex flex-col items-center text-white">
                <h2>Today's Highlight</h2>

        
      <div className="grid grid-cols-2 gap-6 w-full p-12 place-items-center">

            <div className='bg-indigo-300/20 p-3 border rounded-2xl border-white/10 h-[200px] w-[200px] flex flex-col items-center'>
                <h4 className='text-[18px] font-medium text-gray-300 tracking-wide'> HUMIDITY </h4>
                <div className='flex flex-1 justify-center items-center'>
                <p className='text-[72px] leading-none tracking-tight text-white'>{humidity}</p>

                </div>
            </div>
            <div className='bg-indigo-300/20 p-3 border rounded-2xl border-white/10 h-[200px] w-[200px] flex flex-col items-center'>
                <h4 className='text-[18px] font-medium text-gray-300 tracking-wide'> CLOUDS </h4>
                <div className='flex flex-1 justify-center items-center'>
                <p className='text-[72px] leading-none tracking-tight text-white'>{humidity}</p>

                </div>
            </div>
            <div className='bg-indigo-300/20 p-3 border rounded-2xl border-white/10 h-[200px] w-[200px] flex flex-col items-center'>
                <h4 className='text-[18px] font-medium text-gray-300 tracking-wide'> WIND </h4>
                <div className='flex flex-1 justify-center items-center'>
                <p className='text-[72px] leading-none tracking-tight text-white'>{humidity}</p>

                </div>
            </div>
            <div className='bg-indigo-300/20 p-3 border rounded-2xl border-white/10 h-[200px] w-[200px] flex flex-col items-center'>
                <h4 className='text-[18px] font-medium text-gray-300 tracking-wide'> UV </h4>
                <div className='flex flex-1 justify-center items-center'>
                <p className='text-[72px] leading-none tracking-tight text-white'>{humidity}</p>

                </div>
            </div>
            <div className='bg-indigo-300/20 p-3 border rounded-2xl border-white/10 h-[200px] w-[200px] flex flex-col items-center'>
                <h4 className='text-[18px] font-medium text-gray-300 tracking-wide'> VISIBLE DIS. </h4>
                <div className='flex flex-1 justify-center items-center'>
                <p className='text-[72px] leading-none tracking-tight text-white'>{humidity}</p>

                </div>
            </div>
            <div className='bg-indigo-300/20 p-3 border rounded-2xl border-white/10 h-[200px] w-[200px] flex flex-col items-center'>
                <h4 className='text-[18px] font-medium text-gray-300 tracking-wide'> HUMIDITY </h4>
                <div className='flex flex-1 justify-center items-center'>
                <p className='text-[72px] leading-none tracking-tight text-white'>{humidity}</p>

                </div>
            </div>
        

      </div>
    
    </div>
    
  )
}

export default WeatherCard2