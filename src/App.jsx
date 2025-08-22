import { useEffect, useState } from 'react'
import { apiUrl, filterData } from './data'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { toast } from 'react-toastify'
import Spinner from './components/spinner'

const App = () => {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
useEffect (
  ()=>{
    const fetchData = async()=>{
      setLoading(true)
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data into a variable
       setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false)
    }
    fetchData();
  },[]
)

  return (
    <div className='min-h-screen flex flex-col'>
       <Navbar/>

       <Filter filterData={filterData} />

       {
        loading ? (<Spinner/>) : (  <Cards courses = {courses}/>)
       }
    </div>
  )
}

export default App
