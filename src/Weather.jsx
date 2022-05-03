import React, { useEffect, useState } from "react";
const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Ludhiana');




    useEffect(() => {

        const ApiData = async () => {
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a1e02f4dcd283b44b1f363c103974ee7`);
            // console.log(res);
            const acData = await res.json();
            console.log(acData);
            // setcity(acData.main);
            // setTemp(acData.main);
            // console.log(acData.main);
            // setTemp(acData.main.temp);
            // console.log(acData.main.temp);
            // console.log(tem);
            setCity(acData.main);
            console.log(acData.main);

        }
        ApiData();

    }, [search])


    return (
        <>
            <div className="flex justify-center py-8 border sm:w-1/2 mx-auto bg-orange-200 mt-5 capitalize">
                <div className="">

                    <input type="search" value={search} onChange={(event) => {
                        const data = event.target.value;
                        setSearch(data);
                    }} placeholder="Enter city name" className="outline outline-1 w-72 px-3 py-2 rounded "></input>
                    {!city ? (<p className="text-2xl text-center">NO data found</p>) : <div><h1 className="pt-4">{search}</h1>
                        <h1>{city.temp} °C</h1>
                        <h1>Min : <span>{city.temp_min}°C </span> Max : <span>{city.temp_max} °C</span></h1></div>}
                        
                        
                </div>

            </div>
        </>
    )

}
export default Weather;