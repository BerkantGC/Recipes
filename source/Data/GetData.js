import React, { useState, useEffect } from "react";
import axios from "axios";

const getData = () => 
{
    const[data, setData] = useState([]);

    useEffect(()=>{
        get();
        
    }, []);

    const get = () =>{
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        axios.get(url).then((response) => {
            setData(response.data.categories);
        })} 
        return data;   
}

export default getData;
