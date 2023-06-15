import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ConnectionsScreen from '../screens/ConnectionsScreen'
import { useTheme } from 'native-base'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator()
const StackNavigator = () => {
  const theme = useTheme()
  return (
    <NavigationContainer>
        <StatusBar backgroundColor={theme.colors.blue['600']} />
        <Stack.Navigator>
            <Stack.Screen name="Connections" options={{headerShown:false}} component={ConnectionsScreen} />
            <Stack.Screen name="Profile" options={{headerShown:false}} component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator