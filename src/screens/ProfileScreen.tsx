import React from 'react'
import Profile from '../components/profile'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../components/headers/Header'
import { HStack, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ProfileScreen = () => {
    const route = useRoute()
    const {data} = route.params
    const navigation = useNavigation()
    
  return (
    <>
    <Header>
        <HStack space={2} px={2} alignItems='center' >
          <TouchableOpacity onPress={()=>navigation.goBack()} >
            <Ionicons name='arrow-back' color='white' size={28} />
          </TouchableOpacity>
          <Text fontSize={20} color='white'>Profile ( {data.firstname} )</Text>
        </HStack>
      </Header>
    <Profile  />
    </>
  )
}

export default ProfileScreen