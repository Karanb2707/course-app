import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {apiUrl, filterData} from "./data"
import { toast } from "react-toastify"

const App = ()  => {
  
  const [courses, setCourse] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch(apiUrl);
        const courseData = await res.json();
        // save data in variable
        setCourse(courseData.data);
        // console.log(courses);
      } 
      catch (error) {
        toast.error(error);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      <Filter filterData = {filterData}/>
      <Cards courses = {courses}/>
    </div>
  );
};


export default App
