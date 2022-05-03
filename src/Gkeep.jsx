import React, { useState } from "react"
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note"
import Footer from "./Footer";


const Gkeep = () => {

    const [arrItem, setArrItem] = useState([]);
    const addItem = (item) => {
        // alert('hello i m clicked');
        // if(arrItem==''){
        //     alert('please fill your notes below')
        //     item.splice(0,1);
        // }
        setArrItem((preData) => {
            return [...preData, item]

        })
        console.log(item);

    }
    const ondeleted=(id)=>{

        setArrItem((oldd)=>{

            return oldd.filter((element,indexx)=>{
                return indexx!=id;
            })
        })

    }

    return (

        <>
            <Header />
            <CreateNote passItem={addItem} />
            {/* <Note /> */}

           <div className="h-60">
           <div className="flex flex-wrap gap-4 mt-4 h-auto">
           {arrItem.map((element,index)=>{
                return <Note

                    key={index}
                    id={index}
                    title={element.Title}
                    content ={element.Content}
                    notedelete={ondeleted}

                />
            })}
           </div>
           </div>

            <Footer />

        </>
    )
}

export default Gkeep;