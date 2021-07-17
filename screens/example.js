import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import Login from "./login";
import participants from "./participants";
import home from "./home";
import community from "./community";
import Profile from './Profile'


const Tab = createBottomTabNavigator();

function Example() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
         <Tab.Screen
        name="home"
        component={home}
        options={{
           tabBarLabel: 'home',
          tabBarIcon: ({ color,size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),

        }}
      />
     
     <Tab.Screen
        name="participants"
        component={participants}
        options={{
          tabBarLabel: 'community',
          title:"hello",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-group" color={color} size={size} />
          ),
  
        }}
      />
       <Tab.Screen
        name="community"
        component={community}
        options={{
          tabBarLabel: 'community',
          title:"hello",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" color={color} size={size} />
          ),
  
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          title:"hello",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
  
        }}
      />
    </Tab.Navigator>

  );
}

export default Example;