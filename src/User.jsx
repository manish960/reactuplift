import React from "react";
import { useParams } from "react-router-dom";
const User = ()=>{
    const {name} = useParams();
    return(
        <>
         <h1>this is enter by user {name}</h1>
        </>
    )


}

export default User;