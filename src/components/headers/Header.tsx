import { HStack } from 'native-base'
import React from 'react'

type THeaderProps = {
    children:React.ReactNode;
}
const Header : React.FC<THeaderProps> = ({children}) => {
  return (
    <HStack bg={'blue.600'} py={4} w={'100%'} >
        {children}
    </HStack>
  )
}

export default Header