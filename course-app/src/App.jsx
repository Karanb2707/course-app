import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {apiUrl, filterData} from "./data"
import { toast } from "react-toastify"
import Spinner from './components/Spinner'

const App = ()  => {
  
  const [courses, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let courseData = await res.json();
      setCourse(courseData.data);
    } 
    catch (error) {
      toast.error('Error is', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      <Navbar/>
      <Filter filterData = {filterData} category = {category} setCategory = {setCategory} />
      <div>
        {
          loading ? <Spinner/> : <Cards courses = {courses} category = {category}/>
        }
      </div>
    </div>
  );
};


export default App
