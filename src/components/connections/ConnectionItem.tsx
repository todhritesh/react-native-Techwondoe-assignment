import { useNavigation } from '@react-navigation/native';
import { Avatar, Divider, HStack, Text, VStack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native';

interface IConnectionItemProps {
    item:any;
    index:number;
}
const ConnectionItem : React.FC<IConnectionItemProps> = ({item,index}) => {
    const navigation = useNavigation()
    function handleViewProfile(item) {
        navigation.navigate('Profile',{data:item})
    }
  return (
    <TouchableOpacity onPress={()=>handleViewProfile(item)} activeOpacity={.75} >
        <VStack >
            <HStack my={2} alignItems='center' space={2} >
                <Avatar source={{uri:item.picture}} size='lg' />
                <VStack flex={1} >
                    <Text fontSize={18} fontWeight='bold'>{item.firstname} {item.surname}</Text>
                    <Text fontSize={16} fontWeight='medium'>Looking for develope web ui</Text>
                    <Text fontSize={14} fontWeight='light'>Hey there I am interested to work with you ...</Text>
                </VStack>
            </HStack>
            <Divider/>
        </VStack>
    </TouchableOpacity>
  )
}

export default ConnectionItem