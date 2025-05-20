import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder  } from "react-icons/fc";
import { toast } from "react-toastify"

const Card = ({course, allLikedCourses, setLikedCourses}) => {

    function likeFunHandler() {
        if(allLikedCourses.includes(course.id))
        {
            // Already liked
            setLikedCourses(prev => prev.filter(cid => (cid !== course.id)))
            toast.warning('Liked Removed!');
        }
        else
        {
            // Not liked alredy
            if(allLikedCourses.length === 0)
            {
                // All empty
                setLikedCourses([course.id]);
                toast.success('Liked!');
            }
            else
            {
                // Add New in prevs
                setLikedCourses(prev => [...prev, course.id]);
                toast.success('Liked!');
            }
        }
    }

  return (
    <div className='flex flex-col border p-3 m-2 rounded-2xl'>
        <div className='flex flex-col space-y-2'>
            <img className='rounded-2xl' src={course.image.url} alt="" />
            
            <div className='flex justify-end p-1 -mt-[60px]'>
                <button className='p-2 rounded-full bg-white cursor-pointer' onClick={likeFunHandler}>
                    { allLikedCourses.includes(course.id) ? 
                        <FcLike fontSize="1.75rem" /> : 
                        <FcLikePlaceholder fontSize="1.75rem" />
                    }
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