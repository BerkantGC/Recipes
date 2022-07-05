import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./Pages/Categories";
import Home from "./Pages/Home";
import Details from "./components/Details/Details";
import MealDetail from "./components/Details/MealDetail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CategoriesPage = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Categories_Menu" component={Categories}/>
        <Stack.Screen name = "Details_Menu" component={Details}/>
        <Stack.Screen name = "Meal_Detail_Menu" component={MealDetail}/>
    </Stack.Navigator>
    )
}
const App = () => {
    return (
    <NavigationContainer >
        <Tab.Navigator screenOptions={{headerShown: false
        }}>
            <Tab.Screen name = "Home" component={Home}/>
            <Tab.Screen name="Categories" component={CategoriesPage}/>
        </Tab.Navigator>
    </NavigationContainer>
    )
}

export default App;