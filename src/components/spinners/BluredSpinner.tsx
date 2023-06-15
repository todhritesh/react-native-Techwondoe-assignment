import { VStack } from 'native-base'
import React from 'react'
import CustomSpinner from './CustomSpinner'
import { Dimensions } from 'react-native'
const {height,width} = Dimensions.get('screen')

const BluredSpinner = () => {
  return (
    <VStack justifyContent={'center'} alignItems={'center'} zIndex={2} position={'absolute'} bg='warmGray.500' opacity={.6} w={width} h={height}>
        <CustomSpinner/>
    </VStack>
  )
}

export default BluredSpinner