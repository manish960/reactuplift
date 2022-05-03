import React, { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';

const Counters = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {

        setCounter(counter + 1);
    }

    const Decrement = () => {
        console.log("decrement");
        setCounter(counter - 1);
        if (counter == 0) {
            alert("zero maximum reach")
            setCounter(0);
        }
    }

    return (

        <>
            <div className="container mx-auto border h-96 py-6   ">

                <div className="flex justify-center border mx-96 drop-shadow-lg bg-gray-100">

                    <div className=" py-12 w-1/2 text-center">
                        <h1 className="text-xl">counter is : <span>{counter}</span></h1><br></br>
                        <div className="">
                            <button onClick={increment} className="bg-green-400 p-2 rounded mr-4">Increment </button>
                            <button onClick={Decrement} className="bg-green-400 p-2 rounded">Decrement </button></div>
                        {/* <Button>cddd</Button> */}
                        <Badge badgeContent={counter} color="secondary" className="text-start my-5">
                            <MailIcon color="action" />
                        </Badge>
                        {/* <AbcIcon/> */}

                    </div>

                </div>

            </div>
        </>

    )


}

export default Counters;