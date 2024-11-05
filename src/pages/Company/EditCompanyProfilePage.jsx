// EditCompanyProfilePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaIndustry, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaTwitter, FaBriefcase } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EditCompanyProfilePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "Nombre de la Empresa",
        industry: "Industria",
        description: "Somos una empresa dedicada a...",
        location: "Ciudad, País",
        jobs: [
            { title: "Nombre del Puesto", description: "Descripción breve del empleo", location: "Remoto / Ciudad" }
        ],
        contactEmail: "contacto@empresa.com",
        phone: "+123 456 7890",
        linkedin: "https://linkedin.com/company/empresa",
        twitter: "https://twitter.com/empresa",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleJobChange = (index, field, value) => {
        const updatedJobs = [...formData.jobs];
        updatedJobs[index][field] = value;
        setFormData({ ...formData, jobs: updatedJobs });
    };

    const handleAddJob = () => {
        setFormData({
            ...formData,
            jobs: [...formData.jobs, { title: "", description: "", location: "" }]
        });
    };

    const handleRemoveJob = (index) => {
        const updatedJobs = formData.jobs.filter((_, i) => i !== index);
        setFormData({ ...formData, jobs: updatedJobs });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para guardar los cambios, como una llamada a la API
        console.log("Datos guardados:", formData);
        navigate("/company/profile");
    };

    return (
        <>
        <Header />
        <div className="bg-gray-50 min-h-screen py-10 relative">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-8">
                <h1 className="text-3xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                    <FaBuilding /> Editar Perfil de la Empresa
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Nombre e Industria */}
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm space-y-4">
                        <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                            <FaBuilding /> Información General
                        </h2>
                        <div>
                            <label className="block text-gray-700 font-medium">Nombre de la Empresa</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Industria</label>
                            <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mt-1" />
                        </div>
                    </div>

                    {/* Descripción */}
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                            <FaIndustry /> Descripción de la Empresa
                        </h2>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mt-1" rows="4" placeholder="Describa su empresa y sus objetivos..."></textarea>
                    </div>

                    {/* Ubicación */}
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                            <FaMapMarkerAlt /> Ubicación
                        </h2>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="Ciudad, País" />
                    </div>

                    {/* Empleos Disponibles */}
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                            <FaBriefcase /> Empleos Disponibles
                        </h2>
                        {formData.jobs.map((job, index) => (
                            <div key={index} className="space-y-2 mb-4 border-b border-gray-200 pb-4">
                                <input
                                    type="text"
                                    value={job.title}
                                    onChange={(e) => handleJobChange(index, "title", e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    placeholder="Nombre del Puesto"
                                />
                                <textarea
                                    value={job.description}
                                    onChange={(e) => handleJobChange(index, "description", e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    placeholder="Descripción breve del empleo"
                                    rows="2"
                                />
                                <input
                                    type="text"
                                    value={job.location}
                                    onChange={(e) => handleJobChange(index, "location", e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    placeholder="Ubicación del puesto"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveJob(index)}
                                    className="text-red-600 text-sm mt-2 hover:underline"
                                >
                                    Eliminar empleo
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddJob}
                            className="text-blue-600 hover:underline text-sm"
                        >
                            + Agregar otro empleo
                        </button>
                    </div>

                    {/* Información de Contacto */}
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                            <FaEnvelope /> Información de Contacto
                        </h2>
                        <div>
                            <label className="block text-gray-700 font-medium">Correo Electrónico</label>
                            <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="correo@empresa.com" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Teléfono</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="+123 456 7890" />
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                            Redes Sociales
                        </h2>
                        <div>
                            <label className="block text-gray-700 font-medium">LinkedIn</label>
                            <FaLinkedin className="text-blue-600 text-2xl mt-2" />
                            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="https://linkedin.com/company/empresa" />
                            
                        </div>
                        <div>
                            <FaTwitter className="text-blue-600 text-2xl mt-2" />
                            <label className="block text-gray-700 font-medium">Twitter</label>
                            <input type="url" name="twitter" value={formData.twitter} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="https://twitter.com/empresa" />
                        </div>
                    </div>
                </form>
            </div>

            {/* Botón Guardar fijo */}
            <button
                onClick={handleSubmit}
                className="fixed bottom-4 right-4 bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition"
            >
                Guardar Cambios
            </button>
        </div>
        <Footer />
        </>
    );
};

export default EditCompanyProfilePage;
