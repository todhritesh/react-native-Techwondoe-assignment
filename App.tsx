import React from 'react'
import {NativeBaseProvider} from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import StackNavigator from './src/navigators/StackNavigator'
const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{flex:1}}>
        <StackNavigator/>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default App