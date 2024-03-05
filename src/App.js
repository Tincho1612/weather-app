
import { useEffect, useState } from 'react';
import './App.css';
import { ProgressBar } from './Components/ProgressBar/ProgressBar';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { ViewCard } from './Components/ViewCard/ViewCard';



function App() {
  const [input, setInput] = useState('Argentina');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return; // No realizar la solicitud si el término de búsqueda está vacío
      setLoading(true);
      try { 
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input}&appid=${api_key}`;
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [input]);

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
