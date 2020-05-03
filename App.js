import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing screens
import Home from './screens/Home.js';
import Blog from './screens/Blog.js';
import BlogAbout from './screens/BlogAbout.js';




const Stack = createStackNavigator();

function NavStack(){
  return(

    <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
        


      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }}
      />

      <Stack.Screen 
        name="Blog" 
        component={Blog} 
        options={{ title: 'Blog' }}
        />
      
      <Stack.Screen 
        name="BlogAbout" 
        component={BlogAbout} 
        options={{ title: 'BlogAbout' }}
        />

      
    </Stack.Navigator> 
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
  




