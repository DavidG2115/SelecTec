// ProfilePage.jsx
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaPen, FaProjectDiagram, FaUserGraduate, FaCertificate, FaLanguage, FaBriefcase, FaHandsHelping } from "react-icons/fa";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(null);

    const navigateToEditProfilePage = () => {
        navigate("/student/profile/edit");
    };

    // Simular fetch de datos de la API
    useEffect(() => {
        const fetchProfileData = async () => {
            // Datos simulados del perfil del estudiante
            const simulatedData = {
                name: "Nombre del Estudiante",
                program: "Carrera o Programa Académico",
                profilePicture: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                coverLetter: "Soy un estudiante apasionado por la tecnología y el desarrollo de software. Me especializo en el área de desarrollo web y busco oportunidades para poner en práctica mis habilidades en un entorno profesional.",
                projects: [
                    {
                        title: "Nombre del Proyecto",
                        description: "Descripción breve del proyecto y su propósito.",
                        technologies: "React, Node.js",
                        role: "Desarrollador",
                        githubLink: "https://github.com/usuario/proyecto"
                    }
                ],
                skills: ["Desarrollo Web", "JavaScript y React", "Diseño UI/UX"],
                courses: [
                    {
                        title: "Curso de Desarrollo Web",
                        platform: "Plataforma Educativa",
                        year: 2023
                    }
                ],
                certifications: [
                    {
                        title: "Certificación en JavaScript Avanzado",
                        platform: "Plataforma Z",
                        year: 2023
                    }
                ],
                languages: [
                    { language: "Inglés", level: "Avanzado (C1)" },
                    { language: "Español", level: "Nativo" }
                ],
                volunteerExperience: [
                    {
                        title: "Voluntariado en ONG",
                        description: "Apoyo en la organización de eventos para recaudar fondos.",
                        duration: "Enero 2022 - Marzo 2023"
                    }
                ],
                jobPreferences: "Busco oportunidades de pasantía o empleo a tiempo completo en roles de desarrollo web. Prefiero un entorno de trabajo remoto o híbrido."
            };
            setProfileData(simulatedData);
        };
        fetchProfileData();
    }, []);

    if (!profileData) return <p className="text-center text-gray-500">Cargando datos del perfil...</p>;

    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen">
                {/* Encabezado con foto de perfil y estadísticas rápidas */}
                <div className="bg-blue-700 py-12 px-6 text-white relative shadow-lg">
                    <div className="max-w-4xl mx-auto flex items-center space-x-6">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                            <img
                                src={profileData.profilePicture}
                                alt="Foto de perfil"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold">{profileData.name}</h1>
                            <p className="text-lg opacity-90">{profileData.program}</p>
                        </div>
                    </div>

                    {/* Botón de Editar Perfil */}
                    <button
                        onClick={navigateToEditProfilePage}
                        className="absolute top-6 right-6 bg-white text-blue-700 px-4 py-2 rounded-full shadow hover:bg-blue-100 transition flex items-center"
                    >
                        <FaPen className="mr-2" />
                        Editar perfil
                    </button>
                </div>

                {/* Contenido del perfil */}
                <div className="max-w-4xl mx-auto mt-10 p-6 space-y-8">

                    {/* Carta de Presentación */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Carta de Presentación</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {profileData.coverLetter}
                        </p>
                    </div>

                    {/* Proyectos Realizados */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaProjectDiagram /> Proyectos Realizados
                        </h2>
                        <ul className="space-y-4">
                            {profileData.projects.map((project, index) => (
                                <li key={index}>
                                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                    <p className="text-sm text-gray-500">Tecnologías: {project.technologies}</p>
                                    <p className="text-sm text-gray-500">Rol: {project.role}</p>
                                    <a href={project.githubLink} className="text-blue-500 underline">
                                        Ver en GitHub
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Habilidades */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaUserGraduate /> Habilidades
                        </h2>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                            {profileData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Cursos Completados */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaCertificate /> Cursos Completados
                        </h2>
                        <ul className="mt-4 space-y-4">
                            {profileData.courses.map((course, index) => (
                                <li key={index} className="text-gray-700">
                                    <strong>{course.title}</strong> - {course.platform} ({course.year})
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certificaciones */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaCertificate /> Certificaciones
                        </h2>
                        <ul className="mt-4 space-y-4">
                            {profileData.certifications.map((certification, index) => (
                                <li key={index} className="text-gray-700">
                                    <strong>{certification.title}</strong> - {certification.platform} ({certification.year})
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Idiomas */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaLanguage /> Idiomas
                        </h2>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                            {profileData.languages.map((language, index) => (
                                <li key={index}>{language.language} - {language.level}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Experiencia Voluntaria o Extracurricular */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaHandsHelping /> Experiencia Voluntaria o Extracurricular
                        </h2>
                        <ul className="mt-4 space-y-4">
                            {profileData.volunteerExperience.map((experience, index) => (
                                <li key={index}>
                                    <h3 className="text-lg font-semibold text-gray-800">{experience.title}</h3>
                                    <p className="text-gray-600">{experience.description}</p>
                                    <p className="text-sm text-gray-500">Duración: {experience.duration}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Preferencias de Empleo */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaBriefcase /> Preferencias de Empleo
                        </h2>
                        <p className="mt-4 text-gray-700">
                            {profileData.jobPreferences}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;