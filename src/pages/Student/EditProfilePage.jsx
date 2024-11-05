// EditProfilePage.jsx
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EditProfilePage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/student/profile'); // Navega de regreso a la vista de perfil
  };
  const [formData, setFormData] = useState({
    email: "usuario@ejemplo.com",
    phone: "+123 456 7890",
    location: "Ciudad, País",
    jobTitle: "Estudiante de Ingeniería de Software",
    skills: "React, Tailwind CSS, Node.js",
    languages: [
      { name: "Inglés", level: "Avanzado (C1)" },
      { name: "Español", level: "Nativo" }
    ],
    projects: [
      { name: "Nombre del Proyecto", description: "Descripción breve del proyecto.", technologies: "React, Node.js", role: "Desarrollador", link: "https://github.com/usuario/proyecto" }
    ],
    volunteerExperience: [
      { name: "Voluntariado en ONG", description: "Apoyo en la organización de eventos para recaudar fondos.", duration: "Enero 2022 - Marzo 2023" }
    ],
    bio: "Soy un estudiante apasionado por la tecnología y el desarrollo de software.",
    jobPreferences: "Pasantía o tiempo completo en desarrollo web, modalidad remota o híbrida."
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar los cambios, como una llamada a la API
    console.log("Datos guardados:", formData);
  };

  return (
    <>
      <Header />
      <div className="bg-[#f8f8fd] min-h-screen py-10">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold text-blue-600">Editar Perfil</h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-8">

            {/* Información Personal */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">Información Personal</h2>
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold">Teléfono</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold">Ubicación</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Habilidades */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">Habilidades</h2>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Ejemplo: React, Tailwind CSS, Node.js"
              />
            </div>

            {/* Idiomas */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">Idiomas</h2>
              {formData.languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <input
                    type="text"
                    name={`language-${index}-name`}
                    value={language.name}
                    onChange={(e) => {
                      const languages = [...formData.languages];
                      languages[index].name = e.target.value;
                      setFormData({ ...formData, languages });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Nombre del idioma"
                  />
                  <input
                    type="text"
                    name={`language-${index}-level`}
                    value={language.level}
                    onChange={(e) => {
                      const languages = [...formData.languages];
                      languages[index].level = e.target.value;
                      setFormData({ ...formData, languages });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Nivel (Ej: Avanzado, Intermedio)"
                  />
                </div>
              ))}
            </div>

            {/* Proyectos Realizados */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">Proyectos Realizados</h2>
              {formData.projects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => {
                      const projects = [...formData.projects];
                      projects[index].name = e.target.value;
                      setFormData({ ...formData, projects });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Nombre del proyecto"
                  />
                  <textarea
                    value={project.description}
                    onChange={(e) => {
                      const projects = [...formData.projects];
                      projects[index].description = e.target.value;
                      setFormData({ ...formData, projects });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Descripción breve del proyecto"
                  />
                </div>
              ))}
            </div>

            {/* Experiencia Voluntaria */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">Experiencia Voluntaria</h2>
              {formData.volunteerExperience.map((experience, index) => (
                <div key={index} className="space-y-2">
                  <input
                    type="text"
                    value={experience.name}
                    onChange={(e) => {
                      const volunteerExperience = [...formData.volunteerExperience];
                      volunteerExperience[index].name = e.target.value;
                      setFormData({ ...formData, volunteerExperience });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Nombre de la actividad"
                  />
                  <textarea
                    value={experience.description}
                    onChange={(e) => {
                      const volunteerExperience = [...formData.volunteerExperience];
                      volunteerExperience[index].description = e.target.value;
                      setFormData({ ...formData, volunteerExperience });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Descripción de la actividad"
                  />
                </div>
              ))}
            </div>

            {/* Preferencias de Empleo */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">Preferencias de Empleo</h2>
              <textarea
                name="jobPreferences"
                value={formData.jobPreferences}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Describa el tipo de empleo que busca"
              />
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-200 rounded-md text-gray-600 hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfilePage;
