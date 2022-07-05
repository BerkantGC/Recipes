import React from "react";
import {View, Text, Image} from "react-native";
import CategoryStyle from "./CategoryCard.Style";

const CategoryCard = ({category}) => {
    console.log(category);
    return(
        <View style = {CategoryStyle.container}>
            <Image style ={CategoryStyle.image} source={{uri : category.strCategoryThumb}}/>
            <View style = {CategoryStyle.title_container}>
                <Text style={CategoryStyle.title}>{category.strCategory}</Text>
            </View>
        </View>
    )
}
export default CategoryCard;