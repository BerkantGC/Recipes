import React from "react";
import {Dimensions, StyleSheet} from "react-native";

const CategoryStyle = new StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10,
        height: Dimensions.get("window").height/6.5,
        alignItems: 'center',
        marginLeft: 15,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    title_container: {
        alignItems: 'flex-end',
        marginLeft: 10
    },
    title: {
        fontSize: 20
    },
    image: {
        width: 120,
        height: 120,
        marginLeft: 5,
        resizeMode: 'contain'
    }
})

export default CategoryStyle;