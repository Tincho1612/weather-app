
import { useEffect, useState } from 'react';
import './App.css';
import { ProgressBar } from './Components/ProgressBar/ProgressBar';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { ViewCard } from './Components/ViewCard/ViewCard';
import { useFetch } from './CustomHooks/useFetch';



function App() {
  const [input, setInput] = useState('Argentina');
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input}&appid=${api_key}`;
  const {data,loading,error} = useFetch(API_URL,input)
   

  const handleUserInput = (inputValue) => {
    setInput(inputValue);
  };

  return (
    <div className="App">
      <h1>Consulta del clima</h1>
      <SearchBar onUserInput={handleUserInput} />
      {loading && <ProgressBar />}
      
      {data && !loading && <ViewCard content={data} />}
    </div>
  );
}


export default App;
