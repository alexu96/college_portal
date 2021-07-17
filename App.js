import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from "./screens/RootStackScreen";
import store from './store';
import { Provider } from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
    </Provider>
  );
}
