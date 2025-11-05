import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData]=useState([])
  const [index, setIndex] = useState(1)

  async function getData() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    const res_data = response.data
    // console.log(res_data);
    
    setUserData(res_data)
     
  }
  useEffect(()=>{
    getData()
    
  },[index])


  let printUserData = <h3 className='text-gray-400'>No user Available</h3>

  if (userData.length>0) {
    printUserData = userData.map((elem, idx)=>{
      return (<div>
        <div className='h-40 w-44 overflow-hidden bg-white rounded-2xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt='no image'/> 
        </div>
        <h3 className='font-bold text-lg'>{elem.author}</h3>
      </div>)
    })
  }


  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <h1 className='fixed bg-red-100 text-6xl'>{index}</h1>
      <div className='flex flex-wrap gap-4'>
        {
          printUserData
        }
      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
        <button onClick={()=>{console.log('prev-button clicked')

          if(index>1){
            setIndex(index-1)
          }
        
        }} className='bg-amber-400 text-black rounded  px-4 py-4 font-semibold'>Prev</button>
        <button onClick={()=>{console.log('next button click')
          setIndex(index+1)
        }} className='bg-amber-400 text-black rounded px-4 py-4 font-semibold'>Next</button>
      </div>

b
    </div>

  )
}

export default App