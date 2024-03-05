import { useEffect, useState } from "react";

export function useFetch(API_URL){
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
  },[])
  return {data,loading,error};
}