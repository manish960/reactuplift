import React from "react";
import Search from "./Search";
const SearchResult = (props)=>{
    const img = `https://source.unsplash.com/400x300/?${props.text}`
    return(
        <>

           <div className="flex justify-center">
               <span><img src={img} alt="search result  by user"/></span>
           </div>
        </>
    )

}
export default SearchResult;