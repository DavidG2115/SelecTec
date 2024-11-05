import  { useState } from 'react';

const sectionTitles = {
  objective: 'Objetivo Profesional',
  experience: 'Experiencia Profesional',
  specialty: 'Área de Especialidad',
  education: 'Educación',
};

export default function EditProfileModal({ section, initialData, onClose, onSave }) {
  const [inputValue, setInputValue] = useState(initialData);

  const handleSave = () => {
    onSave(section, inputValue);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{sectionTitles[section]}</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition">Cancelar</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Guardar</button>
        </div>
      </div>
    </div>
  );
}
