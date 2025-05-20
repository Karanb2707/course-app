import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses, category}) => {

    const [allLikedCourses, setLikedCourses] = useState([]);

    // returns all courses
    const getCourses = () => {
        
        if(category === "All")
        {
            let allCourses = [];
            console.log(courses);
            Object.values(courses).forEach(courseCat => {
                courseCat.forEach(course => {
                    allCourses.push(course);
                })
            })

            return allCourses;
        }
        else
        {
            // specific category
            return courses[category];
        }
        
    }

  return (
    <div className='w-8/12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto py-2'>
        {
            getCourses().map(course => {
                return(
                    <Card key={course.id} course = {course} allLikedCourses={allLikedCourses} setLikedCourses={setLikedCourses}/>   
                )
            })
        }
    </div>
  )
}

export default Cards