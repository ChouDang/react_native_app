import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import Home from '../screens/Home/Home'
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const AppNavigation = (AppState) => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" >
                {props => <Home {...props} AppState={AppState} /> }
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default AppNavigation