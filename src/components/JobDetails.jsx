// JobDetails.jsx
import PropTypes from 'prop-types';

function JobDetails({ job }) {
  if (!job) {
    return <p className="text-gray-500 w-full text-center py-6">Selecciona un empleo para ver los detalles.</p>;
  }

  return (
    <div className="space-y-6">
      {/* Encabezado del Empleo */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img src={job.logo || "/placeholder_logo.png"} alt={`${job.company} logo`} className="object-cover w-full h-full" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">{job.title}</h2>
          <p className="text-lg text-gray-700">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location} - {job.type}</p>
        </div>
      </div>

      {/* Etiquetas */}
      <div className="flex flex-wrap gap-2 mt-2">
        {job.tags?.map((tag, idx) => (
          <span
            key={idx}
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              tag === "Full-Time" ? "bg-green-100 text-green-600" :
              tag === "Marketing" ? "bg-orange-100 text-orange-600" :
              tag === "Diseño" ? "bg-purple-100 text-purple-600" :
              "bg-blue-100 text-blue-600"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Salario */}
      <p className="text-lg text-gray-800 font-semibold">{job.salary}</p>

      {/* Botón de Postulación */}
      <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
        Postularme
      </button>

      {/* Opciones de Interacción */}
      <div className="flex space-x-4 mt-6">
        <button className="text-gray-500 hover:text-blue-600">❤️ Guardar</button>
        <button className="text-gray-500 hover:text-blue-600">🔄 Compartir</button>
        <button className="text-gray-500 hover:text-blue-600">Más opciones...</button>
      </div>

      {/* Descripción y Requisitos */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Descripción</h3>
        <p className="text-gray-700 mt-2">{job.description}</p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Requisitos</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Requisito 1</li>
          <li>Requisito 2</li>
          <li>Requisito 3</li>
        </ul>
      </div>
    </div>
  );
}

JobDetails.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    type: PropTypes.string,
    salary: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    logo: PropTypes.string,
  }),
};

export default JobDetails;
