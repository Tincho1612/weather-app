import { useState } from 'react';
import './SearchBar.css'
export function SearchBar({ onUserInput }) {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        onUserInput(inputValue);
        setInputValue('');
      }
    };
  
    return (
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Ingrese la localidad"
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }