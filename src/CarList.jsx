import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { CurtainsTwoTone } from "@mui/icons-material";

const CarList = () => {


    const [list, setList] = useState();
    const [item, setItem] = useState([]);
    const [line,setLine]= useState(false);


    const inputEvent = (event) => {
        setList(event.target.value);
    }
    const addItem = () => {
        setItem((old) => {

            return [...old, list]

        })
        setList("");
    

    }
    // const deleted = (indexList) => {

    //     setItem((old) => {

    //         return old.filter((arrElement, index) => {
    //             return indexList !== index;



    //         })
    //     })

    // }

    const Cutit = ()=>{

        setLine(true);

    }


    return (

        <>

            <div className="">
                <div className="container mx-auto w-1/2 border h-96 mt-10 bg-purple-300">
                    <div className="">
                        <h1 className="bg-blue-400 text-3xl font-semibold text-center py-2">Home's Shopping List</h1>

                        <div className="flex justify-center gap-3 py-4">
                            <input type="text" className="w-1/2 bg-gray-50 px-3" placeholder="Enter Your item here" onChange={inputEvent} value={list}></input>
                            <button onClick={addItem} className="p-2 bg-blue-600 rounded text-white" >Add Item</button>
                        </div>
                        <ol className="mx-28">

                            {/* <li>{list}</li> */}

                            {item.map((itemValue, indexList) => {


                                return (<li className="text-xl capitalize" style={{textDecoration : line ? 'line-through' :'none' }}> <span className="hover:text-red-500" onClick={() => {
                                    // deleted(indexList)
                                    Cutit(indexList)
                                }}> <DeleteForeverIcon /></span> {itemValue}</li>)

                            })}








                        </ol>


                    </div>

                </div></div>

        </>
    )
}

export default CarList;