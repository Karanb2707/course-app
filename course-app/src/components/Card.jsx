import React from 'react'
import { FcLike } from "react-icons/fc"

const Card = ({course}) => {
  return (
    <div className='flex flex-col border p-3 m-2 rounded-2xl'>
        <div className='flex flex-col space-y-2'>
            <img className='rounded-2xl' src={course.image.url} alt="" />
            
            <div className='flex justify-end p-2'>
                <button>
                    <FcLike fontSize="1.75rem" />
                </button>
            </div>
        </div>
        <div className='flex flex-col justify-between space-y-2'>
            <h4 className="text-xl font-bold">{course.title}</h4>
            <p>{course.description}</p>
        </div>
    </div>
  )
}

export default Card