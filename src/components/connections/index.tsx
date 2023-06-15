import { FlashList } from '@shopify/flash-list'
import { Box, HStack, Input, Text } from 'native-base'
import React, { useEffect, useReducer, useState } from 'react'
import ConnectionItem from './ConnectionItem'
import { ACTION, initialState, reducer } from './reducer'
import axios from 'axios'
import Container from '../container'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { Dimensions, TouchableOpacity } from 'react-native'
import Header from '../headers/Header'
import { sortByFullNameAsc, sortByFullNameDesc } from './logic/sort'
const {width,height} = Dimensions.get('screen')

const Connections = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [sortIcon,setSortIcon]  = useState('desc')
  console.log(state.search)
  useEffect(()=>{
    async function fetchData () {
     try{
       dispatch({type:ACTION.SET_LOADING,payload:true})
       const connectionsRes = await axios('https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17')
       const data = connectionsRes.data
       dispatch({type:ACTION.FETCH_DATA_SUCCESS,payload:data})
     }catch(err){
      dispatch({type:ACTION.FETCH_DATA_ERROR,payload:err.message})
     }finally{
      dispatch({type:ACTION.SET_LOADING,payload:false})

     }
    }
    fetchData()
  },[])
  // 'sdf'.toLowerCase
  // const filteredData = state.data.filter(item=>item.firstname.toLowerCase().includes(val.toLowerCase() || item.surname.toLowerCase().includes(val.toLowerCase()))

  function handleSearchText(val:string) {
    dispatch({type:ACTION.SET_SEARCH,payload:val})
    const filteredData = state.data.filter(item=>{
      return item.firstname.toLowerCase().includes(val.toLowerCase()) || item.surname.toLowerCase().includes(val.toLowerCase())
    })
    
    dispatch({type:ACTION.SET_SEARCH_RESULTS,payload:filteredData})
  }
  function handleSort(){
    let data;
    if(state.search) {
      data = [...state.searchResults]
    }else{
      data = [...state.data]
    }


    if(sortIcon === 'desc'){
      sortByFullNameAsc(data)
      setSortIcon('asc')
    }else{
      sortByFullNameDesc(data)
      setSortIcon('desc')
    }

    
    if(state.search) {
      dispatch({type:ACTION.SET_SEARCH_RESULTS,payload:data})
    }else{
      dispatch({type:ACTION.FETCH_DATA_SUCCESS,payload:data})
    }
  }
  return (
    <Container error={state.error} loading={state.loading}>
      <Header>
        <HStack space={2} px={2} alignItems='center' >
          <Input fontSize={18} cursorColor={'white'} onChangeText={handleSearchText} color='white' w='90%' />
          <TouchableOpacity onPress={handleSort} >
            {
              sortIcon === 'desc' ?
               <FontAwesome5 color='white' size={30} name='sort-amount-down' />
               :
               <FontAwesome5 color='white' size={30} name='sort-amount-up' />
            }
          </TouchableOpacity>
        </HStack>
      </Header>
      <Box px={2} width={width} height={height} flex={1} >
        {
          state.search === "" ?
            <FlashList 
              data={state.data}
              renderItem={({item,index})=><ConnectionItem item={item} index={index} />}
              estimatedItemSize={100}
              showsVerticalScrollIndicator={false}
              keyExtractor={item=>item.index.toString()}
            />
          :
          state.searchResults.length ?

            <FlashList 
              data={state.searchResults}
              renderItem={({item,index})=><ConnectionItem item={item} index={index} />}
              estimatedItemSize={100}
              showsVerticalScrollIndicator={false}
              keyExtractor={item=>item.index.toString()}
            />
            :
            <Text>Not found</Text>
        }
      </Box>
  </Container>
  )
}

export default Connections