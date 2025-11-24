import Map from '../components/Map';
import Navbar from '../components/Navbar';

export default function Mapa() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pb-16">
        <h1 className="text-4xl font-bold mb-6">Mapa de Recife</h1>
        <div className="w-full h-96">
          <Map />
        </div>
      </div>
      <Navbar />
    </>
  );
}