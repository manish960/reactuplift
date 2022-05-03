import React from "react";
import {NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <div>

                <div className=" bg-blue-700 py-4 justify-center px-6  sm:flex gap-2 sm:text-xl">

                    <div className="text-yellow-200  hover:text-white"> <NavLink exact activeClassName="bg-red-500 text-white" to="/">Home</NavLink></div>
                    <div className="text-yellow-200 hover:text-white"><NavLink exact activeClassName="text-white" to="/Counters">Counter</NavLink></div>
                    <div className="text-yellow-200 hover:text-white"><NavLink exact activeClassName="text-white" to="/Gkeep">Gkeep</NavLink></div>
                    <div className="text-yellow-200 hover:text-white"><NavLink exact activeClassName="text-white" to="/Covid19">Covid19</NavLink></div>
                    <div className="text-yellow-200 hover:text-white"><NavLink exact activeClassName="text-white" to="/Todo">Todo</NavLink></div>
                    {/* <div className="text-yellow-200 hover:text-white"><NavLink exact activeClassName="text-white" to="/user/:name">User</NavLink></div>       */}
                    <div className="text-yellow-200 hover:text-white"><NavLink exact activeClassName="text-white" to="/Search">Search</NavLink></div>
                    <div className="text-yellow-200 hover:text-white"><NavLink exact activeClassName="text-white" to="/weather">Weather Report</NavLink></div>
                </div>
            </div>
        </>
    )


}
export default Navbar;