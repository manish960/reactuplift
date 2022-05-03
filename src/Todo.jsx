import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const Todo = () => {

    const [inputItem, setInputItem] = useState("");
    const [item, setItem] = useState([]);
    const [editico,setEditico] = useState(true);
    const [no,setNo] = useState(0);

    const eventItem = (event) => {
        console.log("input typing");
        setInputItem(event.target.value);



    }
    const addItem = () => {
       if(!inputItem){
        alert('please fill')
       }else{
        setItem((oldItem) => {

            return [...oldItem, inputItem];

        })
        setInputItem('');
       }

    }

    const deleted = (index) => {

        console.log("deleted");
        setItem((oldItem) => {

            return oldItem.filter((arrEle, indexD) => {
                return indexD != index;
            })

        })

    }


    const editList = (index) => {

        console.log("edited");
        setItem((oldItem) => {

            return oldItem.filter((arrEle, indexD) => {
                if(indexD == index){
                    setInputItem(arrEle);
                }
                return  oldItem;
            })

        })

        setEditico(false);
        setNo(index);

    }

    const edited = () => {

        console.log("edited");
        // console.log(index);
        setItem((oldItem) => {

            return oldItem.filter((arrEle, indexD) => {
                if(indexD === no){
                    // setItem(oldItem.splice)
                    // setItem([...oldItem.filter((e, i)=> i!==no), inputItem]);
                    let old_data =[...oldItem.filter((e, i)=> i!==no)] 
                    let latestData = [old_data.splice(no , 0 , inputItem)];
                    // console.log("latest dta",latestData);
                    // console.log("sssdss",old_data);
                    // console.log("new item",inputItem)
                    setItem(old_data);
                    setInputItem('');
                    setEditico(true);

                }
                // return indexD != index;
            })
            
        })

        setEditico(false);

    }





    return (
        <>

            <div className="container mx-auto w-1/2  h-full mt-10">
                <div className="">
                    <h1 className="bg-blue-400 text-3xl font-semibold text-center py-2">Todo List</h1>

                    <div className="flex justify-center gap-3 py-4">
                        <input type="text" value={inputItem} className="w-1/2 bg-gray-50 px-3" placeholder="Enter Your item here" onChange={eventItem}></input>
                        {editico ? (<button onClick={addItem} className="p-2 bg-blue-600 rounded text-white" >Add Item</button>) : (<button onClick={edited} className="p-2 bg-blue-600 rounded text-white" >Edit Item</button>)}
                    </div>
                    <ol className="mx-28">

                        {/* {inputItem} */}
                        {item.map((itemval, index) => {
                            return (<li className="text-xl capitalize flex ml-3 w-96 border justify-between bg-gray-50 px-3 py-2 rounded mb-1">
                             {itemval} <span><EditIcon className="text-yellow-500 hover:text-yellow-700 mr-1" onClick={() => editList(index)} /><DeleteForeverIcon className=" hover:text-red-500" onClick={() => deleted(index)} /></span>
                            </li>)

                        })}







                    </ol>

            
                </div>

            </div>



        </>
    )


}

export default Todo;