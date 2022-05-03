import React from "react";

const Header = () => {
    return (

        <>
            <div className="flex text-3xl border bg-yellow-400 py-3 justify-between px-10">
            <h1 className="">Google Keep Clone</h1>
                <div className="flex gap-3">
                    <h1 className="text-xl">Home</h1>
                    <h1 className="text-xl">About</h1>
                </div>
            </div>

        </>
    )
}

export default Header;