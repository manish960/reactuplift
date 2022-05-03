import React from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = (props) => {

    const ondeleted = ()=>{
        props.notedelete(props.id);
    }


    return (

        <>
            <div className=" border w-60 mx-4 bg-yellow-100">
                <div className="mx-8   ">

                    

                        <h1 className="font-semibold my-4 text-xl">{props.title}</h1>
                        
                        <p>{props.content}</p>
                        <span onClick={ondeleted} className="hover:text-red-500 float-right py-2"><DeleteForeverIcon/></span>
                    
                </div>
            </div>


        </>
    )
}

export default Note;