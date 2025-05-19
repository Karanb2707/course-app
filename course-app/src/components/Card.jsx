import React from 'react'
import { FcLike } from "react-icons/fc"

const Card = ({course}) => {
  return (
    <div>
        <div>
            <img src={course.image.url} alt="" />
            
            <div>
                <button>
                    <FcLike fontSize="1.75rem" />
                </button>
            </div>
        </div>
        <div>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
        </div>
    </div>
  )
}

export default Card