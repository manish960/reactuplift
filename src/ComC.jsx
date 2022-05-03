import React from "react";
import { FirstName, LastName, desi } from "./App2";


const ComC = () => {
    return (

        <>

            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>{(lname) => {
                            return <h1 className="text-red-500">{fname} {lname}</h1>
                        }}</LastName.Consumer>

                    )
                }}

            </FirstName.Consumer>
            <desi.Consumer>{(d) => {
                return <h1>{d}</h1>
            }}</desi.Consumer>


        </>
    )

}
export default ComC;
