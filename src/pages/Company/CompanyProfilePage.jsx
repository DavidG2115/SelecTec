
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaPen, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CompanyProfilePage = () => {
    const navigate = useNavigate();
    const navigateToEditCompanyProfile = () => {
        navigate("/company/profile/edit");
    };

    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen py-10">
                {/* Encabezado con nombre y logo de la empresa */}
                <div className="bg-blue-800 py-12 text-white relative shadow-lg">
                    <div className="max-w-4xl mx-auto flex items-center space-x-6">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Logo de la empresa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">Nombre de la Empresa</h1>
                            <p className="text-lg opacity-90">Industria / Sector</p>
                        </div>
                    </div>

                    {/* Botón de Editar Perfil */}
                    <button 
                        onClick={navigateToEditCompanyProfile} 
                        className="absolute top-6 right-6 bg-white text-blue-800 px-4 py-2 rounded-full shadow hover:bg-blue-100 transition flex items-center"
                    >
                        <FaPen className="mr-2" />
                        Editar perfil
                    </button>
                </div>

                {/* Contenido del perfil de la empresa */}
                <div className="max-w-4xl mx-auto mt-10 p-6 space-y-8">
                    {/* Descripción de la Empresa */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Descripción</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Somos una empresa dedicada a [Descripción de la empresa]. Nuestro objetivo es [Objetivo de la empresa]. Buscamos profesionales apasionados para unirse a nuestro equipo.
                        </p>
                    </div>

                    {/* Ubicación */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200 flex items-center">
                        <FaMapMarkerAlt className="text-blue-800 text-2xl mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Ubicación</h2>
                            <p className="text-gray-700 text-lg">Ciudad, País</p>
                        </div>
                    </div>

                    {/* Empleos Disponibles */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
                            <FaBriefcase className="mr-2 text-blue-800" /> Empleos Disponibles
                        </h2>
                        <ul className="space-y-6">
                            <li className="p-4 border border-gray-200 rounded-md shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-800">Nombre del Puesto</h3>
                                <p className="text-gray-600 mb-1">Descripción breve del empleo y requisitos.</p>
                                <span className="text-sm text-gray-500 flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-blue-600" /> Ubicación: Remoto / Ciudad
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Información de Contacto */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200 space-y-2">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
                            <FaEnvelope className="mr-2 text-blue-800" /> Información de Contacto
                        </h2>
                        <p className="text-gray-700 text-lg flex items-center">
                            <FaEnvelope className="mr-2 text-blue-600" /> Correo Electrónico: <span className="ml-2 text-blue-600">contacto@empresa.com</span>
                        </p>
                        <p className="text-gray-700 text-lg flex items-center">
                            <FaPhoneAlt className="mr-2 text-blue-600" /> Teléfono: <span className="ml-2 text-blue-600">+123 456 7890</span>
                        </p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200 flex items-center space-x-4">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Redes Sociales</h2>
                        <a href="https://linkedin.com/company/empresa" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/empresa" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompanyProfilePage;
