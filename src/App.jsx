import React, { useState } from "react";
import Todo from './Todo';
import Counters from './Counters';
import Gkeep from './Gkeep';
import Covid19 from './Covid19';
import Navbar from "./Navbar";
// import { Route, Switch } from "react-router-dom";
import { Routes, Route ,Navigate} from 'react-router-dom';
import Home from "./Home";
import User from "./User";
import Search from "./Search";
import Error from "./Error";
import Weather from "./Weather";



const App = () => {
    return (
        <>
             <Navbar/>
            <Routes>
                {/* <Route path="/" component={Counters} /> */}
                <Route path="/" element={<Home/>}  />
                <Route path="/Counters" element={<Counters/>} />
                <Route path="/gkeep" element={<Gkeep/>} />
                <Route path="/covid19" element={<Covid19/>} />
                <Route path="/todo" element={<Todo/>} />
                {/* <Route exact path="user/:name" element={<User/>} /> */}
                <Route path="/search" element={<Search/>} />
                <Route path="/weather" element={<Weather/>} />
                <Route path="*" element={<Error/>} />
                {/* <Route path="*" element={<Navigate replace to="/" />} /> */}

            </Routes>
        </>

    )


}

export default App;