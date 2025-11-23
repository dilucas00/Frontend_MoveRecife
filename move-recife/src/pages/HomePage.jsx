export default function HomePage() {
  return (

// div principal
    <div className="min-h-screen flex flex-1 flex-col w-full bg-white bg-[linear-gradient(135deg,rgba(128,196,229,0.49)_0%,rgba(128,196,229,1)_22%)]">
{/* Div do cabeçalho */}
      <div className="flex justify-evenly  items-center px-6">
        <h1 className="text-[#FFF] gap-10 font-bold text-2xl ">Oi,<br /> Arnott!</h1>
        <div className="flex justify-end pt-4 ">
        <img src="./preto2.png" width={150} alt="Imagem de uma figura grafica de um homem" />
        </div>
        
      </div>
{/* div input */}
<div className="flex justify-center ">
      <label class="input h-11  rounded-3xl  shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" class="grow" placeholder="Para onde vamos?" />
      </label>
</div>

{/* div dos blocos brancos */}
      <div className= "flex  bg-white hover-3d w-[325px] h-[125px] rounded-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-10 mt-10 mx-auto">

        <div className="flex flex-row items-center w-[325px] align-center justify-evenly ">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="mb-1 font-medium">Temperatura</p>
            <div className="flex flex-row gap-1 items-center">
             <img src="/icon-sun.png" className="h-12 w-12" alt="Icone de sol"  />
             <p className="font-medium">25C°</p>
            </div>
          </div>
           <div className="flex flex-col items-center justify-center p-4">
            <p className="mb-1 font-medium">Umidade</p>
            <div className="flex flex-row gap-1 items-center">
              <img src="/icon-umidade.png" className="h-12 w-12" alt="Icone de umidade"  />
              <p className="font-medium">80%</p>
            </div>
          </div>


         

        </div>

      </div>
      <div className= "flex sticky justify-center bg-[#F0F0F0] w-113 h-150 rounded-t-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] -my-24  mx-auto"> 
      </div>

    </div>
  );
}