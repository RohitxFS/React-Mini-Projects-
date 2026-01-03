import React from 'react'

const RightCardContent = (props) => {
    return (
        <div>
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white h-12 w-12 rounded-full flex justify-center items-center text-xl font-semibold'>{props.id + 1}</h2>
                <div>
                    <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-14'>{props.intro}</p>
                    <div className='flex justify-between'>
                        <button style={{ backgroundColor: props.color }} className=' text-white font-medium px-8 py-2 rounded-full  '>{props.tag}</button>
                        <button className=' text-white font-medium px-3 py-2 rounded-full  '><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
