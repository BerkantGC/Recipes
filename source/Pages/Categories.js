import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";

import GetData from "../Data/GetData"
import CategoryCard from "../components/CategoryCard/CategoryCard";

const Categories = ({navigation}) => {
    const data = GetData();
    const renderProducts = ({item}) => <TouchableOpacity onPress={() => navigateDetail({item})}><CategoryCard category = {item}/></TouchableOpacity>

    const navigateDetail = ({item}) =>
    {
        navigation.navigate('Details_Menu', item);
    }

    return(
        <SafeAreaView style = {styles.container}>
            {
            <FlatList
            data={data}
            renderItem = {renderProducts}
            keyExtractor = {item => item.idCategory}
            />
            }
        </SafeAreaView>
    );
}

const styles = new StyleSheet.create({
    container: {
        backgroundColor: 'orange',
    }
})
export default Categories;