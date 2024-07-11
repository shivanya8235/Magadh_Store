import React, { useEffect, useState } from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import useDebounce from '../Hook/useDebounce'
import { getSearchProducts } from '../Services/Index'
import { useDispatch } from 'react-redux'
import { addProducts, setSearchValue } from '../store/productSlice'
import { useSelector } from 'react-redux'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const Value = useDebounce(searchQuery, 2000)
    const {searchvalue} = useSelector(state=>state.products)
    const dispatch = useDispatch()
    const handleSearch = async()=>{
      const data = await getSearchProducts(searchvalue)
      dispatch(addProducts(data))
    }
    useEffect(()=>{
        dispatch(setSearchValue(Value))
    },[Value])
    useEffect(()=>{
        handleSearch()
    },[searchvalue])
  return (
    <div className="w-1/2">
    <InputGroup size={"lg"}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon boxSize={"1.5em"} className="!text-gray-400" />
      </InputLeftElement>
      <Input
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        variant="filled"
        backgroundColor={"white"}
        className="!bg-white !text-gray-500"
        colorScheme="whiteAlpha"
        type="text"
        placeholder="Search.."
      />
    </InputGroup>
  </div>
  )
}

export default SearchBar