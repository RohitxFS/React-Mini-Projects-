import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const GetData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function () {
    GetData()
  }, [index])

  let printUserData = <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold '>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
    
     <Card elem={elem } />
      </div>
    })
  }

  return (
<div className="bg-black min-h-screen p-6 text-white">

      <div className='flex flex-wrap gap-4 p-2 h-[82%]'>
        {printUserData}
      </div>

      <div
        className='justify-center flex gap-6 items-center p-4'>
        <button style={{opacity : index == 1 ?  0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }

          }}
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95' >
          Prev</button>
          <h4>Page {index} </h4>
        <button
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'>
          Next</button>
      </div>
    </div>

  )
}

export default App
