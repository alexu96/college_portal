import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Example from './example';
import Login from './login';
import list from "./list";
import Edition from "./ProfileEdition";
import Profile from "./Profile";
import editing from "./teacher/editing";
import marks from "./teacher/marks";
import profile from "./teacher/profile";
import tabScreen from "./teacher/tabscreen";
import listProfile from "./listProfile";
import teacherlist from "./teacherListProfile"



const RootStack = createStackNavigator();

const RootStackScreen = () => (

    <RootStack.Navigator>
        <RootStack.Screen name="Login" component={Login} options={{
            headerShown:false
        }
        }/>
        <RootStack.Screen name="Example" component={Example} options={{
            title:'College portal'
        }
        }/>
         <RootStack.Screen name="tabScreen" component={tabScreen} options={{
            title:'College portal'
        }
        }/>
         <RootStack.Screen name="teacherlist" component={teacherlist} options={{
            title:'College portal'
        }
        }/>
        <RootStack.Screen name="list" component={list} options={{
           title:"college portal"
        }
        }/>
         <RootStack.Screen name="listProfile" component={listProfile} options={{
           title:"college portal"
        }
        }/>
         <RootStack.Screen name="Profile" component={Profile}
        />
        <RootStack.Screen name="Edition" component={Edition} options={{
           title:"College Portal"
        }
        }/>
        <RootStack.Screen name="editing" component={editing} options={{
           title:"College Portal"
        }
        }/>
        <RootStack.Screen name="marks" component={marks} options={{
           title:"College Portal"
        }
        }/>
        <RootStack.Screen name="profile" component={profile} options={{
           title:"College Portal"
        }
        }/>
    </RootStack.Navigator>
);
export default RootStackScreen;