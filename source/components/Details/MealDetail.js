import React, {useState, useEffect} from "react";
import axios from "axios";
import { View, Image , StyleSheet, Dimensions,Text, Button, Linking, ScrollView} from "react-native";

const MealDetail = (props) => {

    const index = props.route.params;
    const[data, setData] = useState([0]);

    useEffect(()=>{
        get();
    }, []);
    
    const get = async() =>{
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + index.strMeal;
        const tmp = await axios.get(url)
            setData(tmp.data.meals);
    }

    
    const newData = data[0];
    console.log(newData);
    return (
        <ScrollView>
            <View>
                <Image style = {MealStyle.image} source={{uri: newData.strMealThumb}}></Image>
                <View>
                    <Text style = {MealStyle.title}>{newData.strMeal}</Text>
                    <Text style ={MealStyle.area}>{newData.strArea}</Text>
                </View>
                <Text style = {MealStyle.instructions}>{newData.strInstructions}</Text>
                <Button color = "red" title = "Watch on Youtube" onPress={()=>{Linking.openURL(newData.strYoutube)}}/>
            </View>
        </ScrollView>
    )

}

const MealStyle = new StyleSheet.create({
    image: {
        height: Dimensions.get('window').height/4,
        width: Dimensions.get('window').width,
        resizeMode: 'cover',
        marginBottom: 10,       
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight:'bold',
        fontSize: 35,
        color: 'darkred',
        marginLeft: 5,
    },
    area: {
        fontWeight:'bold',
        fontSize: 25,
        color: 'darkred',
        marginLeft: 5,
        marginBottom: 15,
    },
    instructions: {
        marginLeft: 5,
        fontSize: 15,
        font
    }
})
export default MealDetail;