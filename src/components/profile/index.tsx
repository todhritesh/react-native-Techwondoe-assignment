import { useRoute } from '@react-navigation/native'
import { Avatar, Box, ScrollView, Text, VStack } from 'native-base'
import React from 'react'

import { Dimensions } from 'react-native'
const {height,width} = Dimensions.get('screen')
const Profile = () => {
    const route = useRoute()
    const {data} = route.params
  return (
    <ScrollView  flex={1} p={4} >
        <VStack space={110} alignItems='center' flex={1} mt={24} bg='coolGray.300' position='relative' >
            <Avatar source={{uri:data.picture}} top={-70} position={'absolute'} size="2xl" />
            <VStack p={2} alignItems='center' space={4} >
                <Text textAlign='center' fontSize={28}>{data.firstname} {data.surname}</Text>
                <Text textAlign='center' fontSize={18}>{data.email}</Text>
                <Text textAlign='center' fontSize={16}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
                <Text textAlign='center' fontSize={16}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
            </VStack>
        </VStack>
    </ScrollView>
  )
}

export default Profile