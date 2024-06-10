import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {CreateBookScreen} from './src/screens/CreateBook'
import {HomeScreen} from './src/screens/Home'
import {LoginScreen} from './src/screens/Login'
import {RegisterScreen} from './src/screens/Registrar'
import {RootStackParamsList} from './src/types/react-navigate'
import BooksProvider from './src/contexts/toDoList'

const Stack = createNativeStackNavigator<RootStackParamsList>()

function App(): React.JSX.Element {
  return (
    <BooksProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="CreateBook" component={CreateBookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BooksProvider>
  )
}

export default App
