import React, { createContext, useState, useEffect } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();
const desi = createContext();

const App2 = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    // const clickEvent = ()=>{
    //     setNum(num+1)
    //     alert("i m clicked")
    // }

    useEffect(() => {
        // alert("i m clicked")
        document.title= `you click me ${num}`
        document.body.style.background='yellow';
        {setTimeout(()=>{document.body.style.background='red';},3000)}
    })
    return (

        <>
            <FirstName.Provider value={"riya"}>
                <LastName.Provider value={"kumari"}>
                    <ComA />

                </LastName.Provider>

            </FirstName.Provider>

            <desi.Provider value={'software developer'}><ComA /></desi.Provider>


            <button onClick={() => {
                setNum(num + 1)
            }}>click me {num}</button>

            <button onClick={() => {
                setNums(nums + 1);
            }}>click me {nums}</button>


        </>
    )

}
export default App2;
export { FirstName, LastName, desi }
