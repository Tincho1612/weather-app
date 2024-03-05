import './ViewCard.css'

export function ViewCard({content}){
    return (
        <div className="weather-card">
          <h2>Información del Clima para {content?.name}</h2>
          <div className="weather-info">
            <img src="" alt="Estado del cielo" />
            <p>Temperatura Actual: {content?.main?.temp} °C</p>
            <p>Temperatura Minima: {content?.main?.temp_min} °C</p>
            <p>Temperatura Maxima: {content?.main?.temp_max} °C</p>
            <p>Viento: {content?.wind?.speed} km/h</p>
            <p>Humedad: {content?.main?.humidity} %</p>
            
          </div>
        </div>
      );
}