import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import interestedStudentsData from './studentsData.json';

const InterestedStudents = ({ jobPosts }) => {
  const navigate = useNavigate();

  const getJobTitle = (jobId) => {
    const job = jobPosts.find((job) => job.id === jobId);
    return job ? job.title : "Trabajo desconocido";
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Estudiantes Interesados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interestedStudentsData.map((student) => (
          <div key={student.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <img
              src={student.profilePicture}
              alt={student.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
            <p className="text-gray-500">{student.major}</p>
            
            <p className="text-blue-500 mt-2">Interesado en: {getJobTitle(student.jobId)}</p>
            
            <div className="flex flex-wrap justify-center mt-4">
              {student.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-gray-600 mt-4">{student.summary}</p>
            
            <div className="flex mt-6 space-x-4">
              <button
                onClick={() => navigate(`/company/student/${student.id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Ver Perfil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

InterestedStudents.propTypes = {
  jobPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InterestedStudents;