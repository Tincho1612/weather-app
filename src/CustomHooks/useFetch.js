import { useEffect, useState } from "react";

export function useFetch(API_URL,input){
const [data,setData] = useState(null)
const [loading,setLoading] = useState(true)
const [error,setError]= useState(false)
useEffect(() => {
  setLoading(true);
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Not Found");
        } else {
          throw new Error("HTTP error " + response.status);
        }
      }
      return response.json();
    })
    .then((data) => setData(data))
    .catch((e) => setError(true))
    .finally(() => setLoading(false));
}, [input]);

return { data, loading, error };
}