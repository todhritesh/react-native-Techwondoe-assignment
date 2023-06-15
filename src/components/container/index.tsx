import { Box } from 'native-base'
import React from 'react'
import BluredSpinner from '../spinners/BluredSpinner'
import ErrorComponent from '../errors/ErrorComponent'

type TContainerProps = {
    children:React.ReactNode;
    loading:boolean;
    error:string|null;
}

const Container : React.FC<TContainerProps> = ({children,loading,error}) => {
    return (

        <Box justifyContent={'center'} position={'relative'} alignItems={'center'} flex={1}  >
            {
                loading && <BluredSpinner/>
            }
            {
                error ? 
                <ErrorComponent error={error} />
                :
                children
            }
        </Box>
    )
}

export default Container