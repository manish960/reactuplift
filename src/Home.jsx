import React from "react";
import { useLocation } from "react-router-dom";

const Home = ()=>{

    const loc = useLocation();
    console.log(loc);
    return(
         <>

            
          <h1 className="my-16 text-2xl text-center">I am Home Page and path is {loc.pathname}</h1>
        </>
    )

}
export default Home;