import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaPen, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CompanyProfilePage = () => {
    const navigate = useNavigate();
    const [companyData, setCompanyData] = useState(null);

    const navigateToEditCompanyProfile = () => {
        navigate("/company/profile/edit");
    };

    // Simular fetch de datos de la API
    useEffect(() => {
        const fetchCompanyData = async () => {
            // Datos simulados de la empresa Amazon
            const simulatedData = {
                name: "Amazon",
                industry: "E-commerce y Tecnología",
                logo: "/amazon_logo.png", // Logo de Amazon
                description: "Amazon es una de las mayores empresas de comercio electrónico y servicios de nube en el mundo. Nos dedicamos a la innovación y al servicio al cliente, ofreciendo una amplia gama de productos y servicios en más de 100 países.",
                location: "Seattle, Washington, Estados Unidos",
                jobs: [
                    { id: 1, title: "Ingeniero de Software", description: "Responsable de diseñar, desarrollar y mantener sistemas escalables para millones de usuarios.", location: "Seattle, Washington" },
                    { id: 2, title: "Gerente de Producto", description: "Liderar el desarrollo de productos innovadores y mejorar la experiencia del cliente.", location: "Remoto" },
                    { id: 3, title: "Analista de Datos", description: "Analizar datos de clientes y productos para tomar decisiones estratégicas de negocio.", location: "Nueva York, NY" },
                    { id: 4, title: "Desarrollador Full-Stack", description: "Desarrollar y mantener aplicaciones web para diversas plataformas de Amazon.", location: "San Francisco, California" },
                    { id: 5, title: "Especialista en Logística", description: "Optimizar y gestionar la cadena de suministro para mejorar la eficiencia operativa.", location: "Dallas, Texas" }
                ],
                contactEmail: "jobs@amazon.com",
                phone: "+1 (206) 266-1000",
                socialLinks: {
                    linkedin: "https://linkedin.com/company/amazon",
                    twitter: "https://twitter.com/amazon"
                }
            };
            setCompanyData(simulatedData);
        };
        fetchCompanyData();
    }, []);

    if (!companyData) return <p className="text-center text-gray-500">Cargando datos de la empresa...</p>;

    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen py-10">
                {/* Encabezado con nombre y logo de la empresa */}
                <div className="bg-blue-800 py-12 text-white relative shadow-lg">
                    <div className="max-w-4xl mx-auto flex items-center space-x-8">
                        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white bg-white flex items-center justify-center">
                            <img
                                src={companyData.logo}
                                alt="Logo de la empresa"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">{companyData.name}</h1>
                            <p className="text-lg opacity-90">{companyData.industry}</p>
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
                        <p className="text-gray-700 leading-relaxed">{companyData.description}</p>
                    </div>

                    {/* Ubicación */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200 flex items-center">
                        <FaMapMarkerAlt className="text-blue-800 text-2xl mr-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Ubicación</h2>
                            <p className="text-gray-700 text-lg">{companyData.location}</p>
                        </div>
                    </div>

                    {/* Empleos Disponibles */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
                            <FaBriefcase className="mr-2 text-blue-800" /> Empleos Disponibles
                        </h2>
                        <ul className="space-y-6">
                            {companyData.jobs.map(job => (
                                <li key={job.id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                                    <p className="text-gray-600 mb-1">{job.description}</p>
                                    <span className="text-sm text-gray-500 flex items-center">
                                        <FaMapMarkerAlt className="mr-2 text-blue-600" /> Ubicación: {job.location}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Información de Contacto */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200 space-y-2">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
                            <FaEnvelope className="mr-2 text-blue-800" /> Información de Contacto
                        </h2>
                        <p className="text-gray-700 text-lg flex items-center">
                            <FaEnvelope className="mr-2 text-blue-600" /> Correo Electrónico:{" "}
                            <span className="ml-2 text-blue-600">{companyData.contactEmail}</span>
                        </p>
                        <p className="text-gray-700 text-lg flex items-center">
                            <FaPhoneAlt className="mr-2 text-blue-600" /> Teléfono:{" "}
                            <span className="ml-2 text-blue-600">{companyData.phone}</span>
                        </p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200 flex items-center space-x-4">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Redes Sociales</h2>
                        {companyData.socialLinks.linkedin && (
                            <a
                                href={companyData.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 text-3xl"
                            >
                                <FaLinkedin />
                            </a>
                        )}
                        {companyData.socialLinks.twitter && (
                            <a
                                href={companyData.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 text-3xl"
                            >
                                <FaTwitter />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompanyProfilePage;
