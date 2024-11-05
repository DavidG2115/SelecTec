import { useState } from 'react';
import { FaUserAlt, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function StudentProfileDashboard() {
  const navigate = useNavigate(); // Hook de navegación de react-router-dom

  // Estado para controlar los datos del perfil y la visibilidad del modal
  const [profileData, setProfileData] = useState({
    objective: 'Cuéntanos qué es lo que buscas para tu carrera.',
    experience: 'Cuéntanos los detalles de tu último empleo o experiencia académica.',
    specialty: 'Selecciona tus áreas de mayor conocimiento.',
    education: 'Incluye tu formación académica para completar tu perfil.',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSection, setEditingSection] = useState(null);

  // Función para redirigir a la página de edición completa
  const navigateToEditProfilePage = () => {
    navigate('/student/profile/edit');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Banner y Avatar */}
      <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 h-48 rounded-t-lg">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-8 flex items-center">
          <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center relative">
            <FaUserAlt className="text-blue-500 text-6xl" />
            <button className="absolute bottom-1 right-1 bg-blue-500 p-1 rounded-full text-white hover:bg-blue-600">
              <FaPen className="text-sm" />
            </button>
          </div>
          <div className="ml-8 text-white">
            <h1 className="text-2xl font-bold">David García Aburto</h1>
            <p className="text-lg">Estudiante en Instituto Tecnológico de Morelia</p>
            <p className="text-sm">Morelia, Michoacán de Ocampo, México</p>
          </div>
        </div>
        {/* Botón de "Editar perfil completo" */}
        <button 
          onClick={navigateToEditProfilePage} 
          className="absolute top-4 right-4 bg-white p-2 px-4 rounded-full text-blue-600 font-semibold hover:bg-blue-100 flex items-center gap-1 shadow-md transition"
        >
          <FaPen className="text-blue-600" />
          Editar perfil completo
        </button>
      </div>

      
      <div className="bg-white shadow-lg rounded-b-lg p-6 mt-20">
        {/* Información adicional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Objetivo profesional */}
          <div className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Objetivo profesional</h2>
              <button onClick={() => openModal('objective')} className="text-blue-500 flex items-center gap-1 hover:text-blue-600 transition">
                <FaPen /> <span>Editar</span>
              </button>
            </div>
            <p className="text-gray-500 mt-2 text-sm">{profileData.objective}</p>
          </div>

          {/* Experiencia profesional */}
          <div className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Experiencia profesional</h2>
              <button onClick={() => openModal('experience')} className="text-blue-500 flex items-center gap-1 hover:text-blue-600 transition">
                <FaPen /> <span>Editar</span>
              </button>
            </div>
            <p className="text-gray-500 mt-2 text-sm">{profileData.experience}</p>
          </div>

          {/* Área de especialidad */}
          <div className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Área de especialidad</h2>
              <button onClick={() => openModal('specialty')} className="text-blue-500 flex items-center gap-1 hover:text-blue-600 transition">
                <FaPen /> <span>Editar</span>
              </button>
            </div>
            <p className="text-gray-500 mt-2 text-sm">{profileData.specialty}</p>
          </div>

          {/* Educación */}
          <div className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Educación</h2>
              <button onClick={() => openModal('education')} className="text-blue-500 flex items-center gap-1 hover:text-blue-600 transition">
                <FaPen /> <span>Editar</span>
              </button>
            </div>
            <p className="text-gray-500 mt-2 text-sm">{profileData.education}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
