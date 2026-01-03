import { useState } from "react";

function App() {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle("")
    setDetails("")
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-col lg:w-1/2 p-10 gap-4 items-start '>

        <h1 className="font-bold text-3xl text-pink-400 ">Add Notes</h1>

        <input type="text" placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full outline-none font-medium rounded border-2'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)

          }}
        />

        <textarea type="text" placeholder='Write Details Here'
          className='px-5 h-32 py-2 items-start font-medium  flex-row w-full outline-none rounded border-2'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='text-black bg-white active:scale-98 px-5 py-2 w-full outline-none font-medium rounded'>Add Note</button>

      </form>
      <div className="lg:w-1/2 lg:border-l-2 border-solid border-pink-600  p-10">

        <h1 className="font-bold text-3xl text-pink-400 ">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start h-[90%] gap-5 mt-5 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">

          {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-65 w-44 rounded-2xl px-4 pt-9 pb-4 text-black bg-white bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8UoY1H5Gz_7dJ6XGuqq14-48n4YUGbcKgQ&s')]">
              <div>
                <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
                <p className="mt-3 leading-tight text-xs font-semibold text-gray-700">{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className="w-full text-xs rounded font-bold py-1 bg-red-500 cursor-pointer active:scale-95 text-white">Delete</button>

            </div>

          })}
        </div>

      </div>
    </div>
  )
}

export default App
