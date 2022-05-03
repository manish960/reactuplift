
import React, { useState } from "react"
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';

const CreateNote = (props) => {


    const [item, setItem] = useState({
        Title: '',
        Content: ''
    })

    const inputEvent = (event) => {
        // let value = event.target.value;
        // let name = event.target.name;
        const { name, value } = event.target;
        setItem((old) => {
            return {
                ...old,
                [name]: value,
            }
        });

    }
    const addItem = () => {

        props.passItem(item);
        setItem({
            Title: '',
            Content: ''
        })

    }
    return (

        <>
            <div className="border  flex justify-center  ">
                <div className=" border w-96 rounded-xl my-4 bg-blue-100 ">
                    <div className="mx-8 py-8  ">



                        <h1 className="py-1 text-center text-xl bg-green-400 rounded"> Add Your Notes <span><DomainVerificationIcon/></span></h1><br></br>
                        <input type="text" className="w-full p-3 rounded" name="Title" value={item.Title} placeholder="Enter Your Title" onChange={inputEvent}></input><br></br>

                        {/* <label> Description :</label><br></br> */}
                        <textarea type="text" className="w-full mt-8 p-3 rounded" name="Content" value={item.Content} onChange={inputEvent} placeholder="Enter Your Description"></textarea>
                        <button onClick={addItem} className="bg-blue-500 p-2 mt-3 rounded px-3" >Add Item</button>


                    </div>
                </div>

            </div>


        </>
    )
}

export default CreateNote;