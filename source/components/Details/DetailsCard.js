import React from "react";
import { Image, View, Text, ImageBackground, StyleSheet, Dimensions } from "react-native";

const DetailsCard = ({detail}) =>
{
    console.log(detail);

    return(
        <View style = {DetailStyle.container}>
            <ImageBackground style ={DetailStyle.background_image} source={{uri : detail.strMealThumb}}>
                <View  style = {DetailStyle.title_container}></View>
                <Text style={DetailStyle.title}>{detail.strMeal}</Text>
            </ImageBackground>
        </View>
        )
}

const DetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    background_image: {
        flex: 1,
        height: Dimensions.get('window').height/4,
        resizeMode: 'contain',
        marginHorizontal: 5,
        marginBottom: 20,
        marginTop: 5,
       
        justifyContent: 'flex-end',
    },
    title_container: {
        backgroundColor: 'black',
        height: Dimensions.get('window').height/15,
        opacity: 0.4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    title: {
        position: 'absolute',
        bottom: 1,
        color: 'white',
        right: 5,
        bottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 1
    }
})

export default DetailsCard;