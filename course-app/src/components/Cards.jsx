import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {

    if (!courses) return <div>Loading...</div>;

    let allCourses = [];

    // returns all courses
    const getCourses = () => {
        console.log(courses);
        Object.values(courses).forEach((courseCat) => {
            courseCat.forEach((course) => {
                allCourses.push(course);
            })
        })

        return allCourses;
    }

  return (
    <div>
        {
            getCourses().map(course => {
                return(
                    <Card key={course.id} course = {course}/>   
                )
            })
        }
    </div>
  )
}

export default Cards