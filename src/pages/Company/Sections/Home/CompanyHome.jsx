
import { Link } from "react-router-dom";
import InterestedStudents from "../components/InterestedStudents";

// Datos simulados de la empresa
const companyData = {
  companyName: "Tech Solutions",
  stats: {
    jobPosts: 5,
    applications: 30,
    interviews: 8,
  },
  jobPosts: [
    { id: 1, title: "Diseñador UI/UX", location: "Ciudad de México, Remoto" },
    { id: 2, title: "Gerente de Ventas", location: "Lima, Perú" },
    { id: 3, title: "Desarrollador Backend", location: "Buenos Aires, Argentina" },
  ],
};

const CompanyHome = () => {
  const { companyName, stats, jobPosts } = companyData;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Bienvenido, {companyName}
      </h1>
      <p className="text-gray-600 mb-8">Aquí está el resumen de tu actividad en la plataforma.</p>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-500">{stats.jobPosts}</h2>
          <p className="text-gray-500">Vacantes Publicadas</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-500">{stats.applications}</h2>
          <p className="text-gray-500">Aplicaciones Recibidas</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-500">{stats.interviews}</h2>
          <p className="text-gray-500">Entrevistas Programadas</p>
        </div>
      </div>

      {/* Actividad Reciente */}
      <InterestedStudents jobPosts={jobPosts} />

      {/* Lista de Vacantes Activas */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Vacantes Activas</h3>
        <ul className="space-y-4">
          {jobPosts.map((job) => (
            <li key={job.id} className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
                <p className="text-gray-500">{job.location}</p>
              </div>
              <Link to={`/jobs/${job.id}`} className="text-blue-500 hover:underline">
                Ver Detalles
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón para Crear Nueva Vacante */}
      <div className="text-center">
        <Link
          to="/create-job"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Publicar Nueva Vacante
        </Link>
      </div>
    </div>
  );
};

export default CompanyHome;
