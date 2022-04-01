import * as React from "react";
import { Box} from "native-base";
import {StyleSheet} from "react-native"
import {vh} from "react-native-units"

//import screen
import Todo from "./src/todo";
import Kalkulator from "./src/Calculator";
import Hello from "./src/Hello";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//Import Icon
import { Ionicons} from "@expo/vector-icons"


// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator()

// Create Component Bottom Tab Navigation
function MyTab(){
    return(
        <Tab.Navigator
            initialRouteName="Hello"
            screenOptions={({ route }) => ({
                // headerMode: "screen",
                headerTintColor: "black",
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName
        
                  if (route.name === "Hello") {
                    iconName = focused ? "ios-home" : "ios-home-outline"
                  } else if (route.name == "Todo") {
                    iconName = focused ? "list" : "list"
                  } else if (route.name == "Kalkulator") {
                    iconName = focused ? "ios-calculator" : "ios-calculator-outline"
                  }
        
                  return <Ionicons name={iconName} size={size} color={color} />
                },
                // tabBarActiveTintColor: theme.colors.primary["800"],
                tabBarInactiveTintColor: "gray"
            })}
            >
                <Tab.Screen name="Hello" component={Hello} options={{ headerShown: false }} />
                <Tab.Screen name="Todo" component={Todo} options={{headerShown:false}}/>
                <Tab.Screen name="Kalkulator" component={Kalkulator} options={{headerShown:false}} />
        </Tab.Navigator>
    )
}




export default function Container(){
    return( 
        <NavigationContainer>
           <MyTab/>
        </NavigationContainer>

        // <Box bg="primary.500" style={styles.content}>
        //     <MyTab/> 
        // </Box> 

        // <NavigationContainer>
        //     <MyTab/>
        // </NavigationContainer>
    )
}

