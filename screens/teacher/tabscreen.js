import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import profile from "./profile";
import participants from "../participants";
import community from "../community"


const Tab = createBottomTabNavigator();

const tabScreen=()=> {
  return (
    <Tab.Navigator
      initialRouteName="profile"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
         <Tab.Screen
        name="profile"
        component={profile}
        options={{
           tabBarLabel: 'profile',
          tabBarIcon: ({ color,size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),

        }}
      />
     
     <Tab.Screen
        name="participants"
        component={participants}
        options={{
          tabBarLabel: 'participants',
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
    </Tab.Navigator>

  );
}

export default tabScreen;