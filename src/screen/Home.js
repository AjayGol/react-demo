import React from 'react'
import '../styles/Home.css'
import Navbar from "../components/Navabar";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return(
       <>
           <div>
               <Navbar/>
               <Sidebar/>
           </div>
           <div className='mainBody '>
               <div className="collapse navbar-collapse d-flex justify-content-start">
                   <button className="btn btn-success mx-2" type="submit">
                       Allocations | Theatre 2
                   </button>
                   <button className="btn btn-outline-success mx-2" type="submit">
                       Day
                   </button>
                   <button className="btn btn-outline-success mx-2" type="submit">
                       Month
                   </button>
                   <button className="btn btn-outline-success mx-2" type="submit">
                       Year
                   </button>
               </div>

               <div className='d-flex w-100 h-75 mt-4'>
                   <div className='bg-body-tertiary h-100 d-flex justify-content-center align-items-center' style={{width:'15%'}}>
                       <span className='text-dark'>Available Staff</span>
                   </div>
                   <div className='bg-success opacity-50 h-100 mx-3' style={{width:'85%'}}>

                   </div>
               </div>
           </div>
       </>
    )
}

export default Home
