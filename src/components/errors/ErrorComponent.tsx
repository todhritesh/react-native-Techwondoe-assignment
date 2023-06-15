import { Text, VStack } from 'native-base'
import React from 'react'

type TErrorComponentProps = {
    error:string
}

const ErrorComponent : React.FC<TErrorComponentProps> = ({error}) => {
  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'} >
        <Text>
            {error}
        </Text>
    </VStack>
  )
}

export default ErrorComponent