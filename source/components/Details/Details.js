import React, {useState, useEffect} from "react";
import { View , ImageBackground, Text, FlatList, StyleSheet, Image, TouchableOpacity} from "react-native";
import axios from 'axios';
import DetailsCard from "./DetailsCard";

const Detail = (props) =>
{
    const index = props.route.params;
    const[data, setData] = useState([]);

    useEffect(()=>{
        get();
    }, []);
    
    const get = async() =>{
        const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + index.strCategory;
        console.log(url);
        const tmp = await axios.get(url)
            setData(tmp.data.meals);
    }

    const navigateToMealDetail = ({item}) =>
    {
        props.navigation.navigate("Meal_Detail_Menu", item);
    }
    console.log(data);
    const renderMeals = ({item}) => <TouchableOpacity onPress={()=>navigateToMealDetail({item})}><DetailsCard detail = {item}/></TouchableOpacity>;
    return (
        <View style= {{backgroundColor: 'orange'}}>
            <FlatList
                data = {data}
                keyExtractor = {item => item.idMeal}
                renderItem = {renderMeals}
            />
        </View>
    )
}



export default Detail;