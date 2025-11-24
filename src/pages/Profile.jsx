import NavBar from "../components/Navbar";

export default function Profile() {
  return (

// div principal
    <div className="h-screen flex flex-1 flex-col w-full bg-[linear-gradient(135deg,rgba(128,196,229,0.49)_0%,rgba(128,196,229,1)_22%)]">
{/* Div do cabeçalho */}
      <div className="flex justify-evenly  items-center px-6">
        <h1 className="text-[#FFF] gap-10 font-bold text-2xl ">Oi,<br /> Arnott!</h1>
        <div className="flex justify-end pt-4 ">
        <img src="./preto2.png" width={150} alt="Imagem de uma figura grafica de um homem" />
        </div>
        
      </div>

      <NavBar />
    </div>
  );
}