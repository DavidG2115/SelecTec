import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="relative z-10 bg-white">
            <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-8 md:py-4">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#4640de] rounded-full w-8 h-8"></div>
                        <h1 className="text-[#25324b] text-lg md:text-xl font-bold font-['Red Hat Display']">
                            SeleccionaTec
                        </h1>
                    </div>
                    <nav className="hidden md:flex gap-6 text-[#515b6f] text-sm md:text-base font-medium">
                        <Link to="#">Buscar Empleo</Link>
                        <Link to="#">Buscar Empresas</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-0">
                    <Link to="/login">
                        <button className="px-3 py-1 md:px-4 md:py-2 bg-[#cbcbcb]/40 text-[#4640de] text-sm md:text-base font-bold rounded transform transition-transform duration-300 hover:scale-105">
                            Ingresa
                        </button>
                    </Link>
                    <div className="hidden md:block w-0.5 h-6 bg-[#d6ddeb]"></div>
                    <Link to="/register">
                        <button className="px-3 py-1 md:px-4 md:py-2 bg-[#4640de] text-white text-sm md:text-base font-bold rounded transform transition-transform duration-300 hover:scale-105">
                            Regístrate
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
