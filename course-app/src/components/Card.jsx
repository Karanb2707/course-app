import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify"

const Card = ({course}) => {

    const [likeBtn, setLikeBtn] = useState(false);

    function likeFunHandler() {
        const likeState = !likeBtn;
        setLikeBtn(likeState);
        likeState ? toast.success('Liked!') : toast.warning('Like Removed!');
    }

  return (
    <div className='flex flex-col border p-3 m-2 rounded-2xl'>
        <div className='flex flex-col space-y-2'>
            <img className='rounded-2xl' src={course.image.url} alt="" />
            
            <div className='flex justify-end p-1 -mt-[60px]'>
                <button className='p-2 rounded-full bg-purple-200 cursor-pointer' onClick={likeFunHandler}>
                    {likeBtn ? <FcLike fontSize="1.75rem" /> : <AiOutlineHeart fontSize="1.75rem" />}
                </button>
            </div>
        </div>
        <div className='flex flex-col justify-between space-y-2 mt-4'>
            <h4 className="text-xl font-bold">{course.title}</h4>
            <p>{course.description}</p>
        </div>
    </div>
  )
}

export default Card