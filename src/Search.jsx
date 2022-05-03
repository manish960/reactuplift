import React, { useState } from "react";
import SearchResult from "./SearchResult";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
const Search = () => {

    const [img, setImg] = useState('');
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);

    }
    return (
        <>

            <div className="text-center  border py-10 bg-orange-200">
                <h1 className="text-xl font-semibold py-2  ">Enter Your word Search</h1>
                <input type="text" placeholder="Enter Your words" value={img} className="px-3 py-2 w-1/4 rounded outline outline-1 " onChange={inputEvent}></input>
            </div>

            {img == '' ? null : <div><h1 className="text-center text-xl font-semibold py-3  ">Your Searched image <div className="text-3xl font-semibold  "><ArrowCircleDownIcon/></div></h1><SearchResult/></div>}
        </>
    )

}
export default Search;