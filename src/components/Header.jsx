import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        // Elimina todos los datos de localStorage
        localStorage.clear();
        
        // Cambia el estado de autenticación
        setIsAuthenticated(false);
        
        // Cierra el menú
        setIsMenuOpen(false);
        
        // Redirige a la página de inicio de sesión
        navigate('/login');
    };

    return (
        <header className="relative z-50 bg-white">
            <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-8 md:py-4">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#4640de] rounded-full w-8 h-8"></div>
                        <Link to="/" className="text-[#25324b] text-lg md:text-xl font-bold font-['Red Hat Display']">
                            UniBridge
                        </Link>
                    </div>
                    <nav className="hidden md:flex gap-6 text-[#515b6f] text-sm md:text-base font-medium">
                        <Link to="/jobs">Buscar Empleo</Link>
                        {/* <Link to="/company/profile">Perfil de Empresas</Link> */}
                    </nav>
                </div>

                {!isAuthenticated && (
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
                )}

                {isAuthenticated && (
                    <div className="relative">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <FaUserCircle className="text-blue-600 text-3xl cursor-pointer" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                                <Link
                                    to="/student/profile"
                                    className="block px-6 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Ver Perfil
                                </Link>
                                <Link
                                    to="/company/profile"
                                    className="block px-6 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Ver Perfil Empresa
                                </Link>
                                <Link
                                    to="/settings"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Configuración
                                </Link>
                                <button
                                    onClick={handleLogout} // Llama a handleLogout aquí
                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}
