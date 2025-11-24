import { Map,UserRound, House } from 'lucide-react';

export default function NavBar() {
    return (
        <div className="dock">
            <button className="dock-active">
            
                <House />
                <span className="dock-label text-sm">Home</span>
            </button>
            
            <button className="">
                <Map /> 
               <span className="dock-label text-sm">Mapa</span>
            </button>
            
            <button>
                <UserRound />
                <span className="dock-label text-sm">Perfil</span>
            </button>
        </div>
    )
}