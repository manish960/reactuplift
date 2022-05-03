import React, { useContext } from "react";
import { FirstName, LastName } from "./App2";
// import ComC from "./ComC";


const ComB = () => {
    const faname = useContext(FirstName);
    const lname = useContext(LastName);


    return (

        <>
            <h1>{faname} {lname}</h1>



        </>
    )

}
export default ComB;
