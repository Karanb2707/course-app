import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {

    let courses = props.courses;

    const [allLikedCourses, setLikedCourses] = useState([]);

    // returns all courses
    const getCourses = () => {
        let allCourses = [];
        console.log(courses);
        Object.values(courses).forEach(courseCat => {
            courseCat.forEach(course => {
                allCourses.push(course);
            })
        })

        return allCourses;
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