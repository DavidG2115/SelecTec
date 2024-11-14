import { useParams } from "react-router-dom";
import interestedStudentsData from './studentsData.json';

const CompanyStudentDetails = () => {
  const { id } = useParams();
  const student = interestedStudentsData.find((student) => student.id === parseInt(id));

  if (!student) {
    return <p>Estudiante no encontrado</p>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <img
          src={student.profilePicture}
          alt={student.name}
          className="w-32 h-32 rounded-full mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">{student.name}</h2>
        <p className="text-center text-gray-500 mb-4">{student.major}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Habilidades</h3>
          <div className="flex flex-wrap mt-2">
            {student.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Resumen</h3>
          <p className="text-gray-600">{student.summary}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Experiencia</h3>
          <p className="text-gray-600">{student.experience}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Educación</h3>
          <p className="text-gray-600">{student.education}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">Proyectos</h3>
          <ul className="list-disc list-inside text-gray-600">
            {student.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyStudentDetails;