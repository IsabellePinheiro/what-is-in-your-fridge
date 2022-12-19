import React, { useState } from "react";

interface ISearchBar{
  placeholder: string
}

export default function SearchBar({placeholder}:ISearchBar ){
  const [value, setValue] = useState('')
  
  return (
       <input
        className='flex w-full mt-4 px-6 py-4 rounded bg-gray-300 border border-gray-600 text-sm text-gray-900'
        type='text'  value={value} onChange={(event) => { setValue(event.target.value)}}  placeholder={placeholder}/>
 
  )
}