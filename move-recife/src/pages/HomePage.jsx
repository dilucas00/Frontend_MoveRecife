export default function HomePage() {
  return (

// div principal
    <div className="min-h-screen flex flex-1 flex-col min-w-screen bg-white bg-[linear-gradient(135deg,rgba(128,196,229,0.49)_0%,rgba(128,196,229,1)_22%)]">
{/* Div do cabeçalho */}
      <div className="flex justify-between items-center px-6">
        <h1 className="text-[#FFF] font-bold text-2xl ">Oi,<br /> Arnott!</h1>
        <div className="flex justify-end pt-4 ">
        <img src="./preto2.png" width={150} alt="" />
        </div>
        
      </div>
{/* div input */}
<div className="flex justify-center ">
      <input type="search" className="pl-10 text-black placeholder-gray-400 bg-[#FFF] shadow-[0px_4px_4px_ 0px_rgba(0,_0,_0,_0.25)] w-[325px] h-[52px] rounded-[20px] " placeholder="icone |  Procurar"/>
</div>

{/* div dos blocos brancos */}
      <div className= "flex bg-[#fff] w-[325px] h-[125px] rounded-4xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-10 ml-6 mt-6">

      </div>
      <div className= "flex sticky bg-[#F0F0F0] w-[375px] h-[412px] rounded-t-4xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] -my-24">
      </div>

    </div>
  );
}