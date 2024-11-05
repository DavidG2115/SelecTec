// ProfilePage.jsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaPen, FaProjectDiagram, FaUserGraduate, FaCertificate, FaLanguage, FaBriefcase, FaHandsHelping } from "react-icons/fa";

const ProfilePage = () => {
    const navigate = useNavigate();
    const navigateToEditProfilePage = () => {
        navigate("/student/profile/edit");
    };

    return (
        <>
            <Header />
            <div className="bg-gray-50 min-h-screen">
                {/* Encabezado con foto de perfil y estadísticas rápidas */}
                <div className="bg-blue-700 py-12 px-6 text-white relative shadow-lg">
                    <div className="max-w-4xl mx-auto flex items-center space-x-6">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Foto de perfil"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold">Nombre del Estudiante</h1>
                            <p className="text-lg opacity-90">Carrera o Programa Académico</p>
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
                            Soy un estudiante apasionado por la tecnología y el desarrollo de software. Me especializo en el área de desarrollo web y busco oportunidades para poner en práctica mis habilidades en un entorno profesional.
                        </p>
                    </div>

                    {/* Proyectos Realizados */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaProjectDiagram /> Proyectos Realizados
                        </h2>
                        <ul className="space-y-4">
                            <li>
                                <h3 className="text-lg font-semibold text-gray-800">Nombre del Proyecto</h3>
                                <p className="text-gray-600">Descripción breve del proyecto y su propósito.</p>
                                <p className="text-sm text-gray-500">Tecnologías: React, Node.js</p>
                                <p className="text-sm text-gray-500">Rol: Desarrollador</p>
                                <a href="https://github.com/usuario/proyecto" className="text-blue-500 underline">
                                    Ver en GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Habilidades */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaUserGraduate /> Habilidades
                        </h2>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                            <li>Desarrollo Web</li>
                            <li>JavaScript y React</li>
                            <li>Diseño UI/UX</li>
                        </ul>
                    </div>

                    {/* Cursos Completados */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaCertificate /> Cursos Completados
                        </h2>
                        <ul className="mt-4 space-y-4">
                            <li className="text-gray-700">
                                <strong>Curso de Desarrollo Web</strong> - Plataforma Educativa (2023)
                            </li>
                        </ul>
                    </div>

                    {/* Certificaciones */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaCertificate /> Certificaciones
                        </h2>
                        <ul className="mt-4 space-y-4">
                            <li className="text-gray-700">
                                <strong>Certificación en JavaScript Avanzado</strong> - Plataforma Z (2023)
                            </li>
                        </ul>
                    </div>

                    {/* Idiomas */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaLanguage /> Idiomas
                        </h2>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                            <li>Inglés - Avanzado (C1)</li>
                            <li>Español - Nativo</li>
                        </ul>
                    </div>

                    {/* Experiencia Voluntaria o Extracurricular */}
                    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaHandsHelping /> Experiencia Voluntaria o Extracurricular
                        </h2>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <h3 className="text-lg font-semibold text-gray-800">Voluntariado en ONG</h3>
                                <p className="text-gray-600">Apoyo en la organización de eventos para recaudar fondos.</p>
                                <p className="text-sm text-gray-500">Duración: Enero 2022 - Marzo 2023</p>
                            </li>
                        </ul>
                    </div>

                    {/* Preferencias de Empleo */}
                    <div className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
                            <FaBriefcase /> Preferencias de Empleo
                        </h2>
                        <p className="mt-4 text-gray-700">
                            Busco oportunidades de pasantía o empleo a tiempo completo en roles de desarrollo web. Prefiero un entorno de trabajo remoto o híbrido.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;
