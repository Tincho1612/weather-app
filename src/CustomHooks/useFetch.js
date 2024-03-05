import { useEffect, useState } from "react";

export function useFetch(API_URL,input){
const [data,setData] = useState(null)
const [loading,setLoading] = useState(true)
const [error,setError]= useState(null)
  useEffect(()=>{
    setLoading(true)
    fetch(API_URL)
    .then((response)=> response.json())
    .then((data)=>setData(data))
    .catch((error)=>setError(error))
    .finally(()=>setLoading(false))
  },[input])
  return {data,loading,error};
}