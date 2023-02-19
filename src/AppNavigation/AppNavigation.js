import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import AllNotes from '../screens/AllNotes/AllNotes'
import Note from '../screens/Note/Note'
import CreateNote from "../screens/CreateNote/CreateNote"

const Stack = createNativeStackNavigator()

const AppNavigation = ({AppState}) => {
    return (
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="AllNotes" >
                {props => <AllNotes {...props} AppState={AppState} /> }
            </Stack.Screen>

            <Stack.Screen name="Note" >
                {props => <Note {...props} AppState={AppState} /> }
            </Stack.Screen>
           
            <Stack.Screen name="CreateNote" >
                {props => <CreateNote {...props} AppState={AppState} /> }
            </Stack.Screen>
          

          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default AppNavigation