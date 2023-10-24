import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Jobs from "./Components/Jobs/Jobs";

const MyJobApp = () => {
    return (
        <div className='w-[85%] m-auto bg-white'>
            <Navbar />
            <Search />
            <Jobs />
        </div>
    )
}

export default MyJobApp