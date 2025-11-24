import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// 1. Defina um estilo para o container (obrigatório para que o mapa apareça)
const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  // Latitude: -8.0519 (Faculdade Senac Pernambuco)
  lat: -8.0519,
  // Longitude: -34.8876 (Faculdade Senac Pernambuco)
  lng: -34.8876
};


const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function MeuMapa() {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {/* Adiciona o componente Marker com a posição da faculdade */}
        <Marker 
          position={center} 
          title="Faculdade Senac Pernambuco" // Texto que aparece ao passar o mouse
        />
        
      </GoogleMap>
    </LoadScript>
  );
}