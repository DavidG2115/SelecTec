// JobList.jsx
import PropTypes from 'prop-types';


function JobList({ jobs, setSelectedJob }) {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Empleos Disponibles</h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-50 ${job.highlighted ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => setSelectedJob(job)}
          >
            {job.highlighted && (
              <div className="text-red-500 font-bold text-xs mb-1">Se precisa Urgente • <span className="text-green-600">Empleo destacado</span></div>
            )}
            <h3 className="text-lg font-bold">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company} - {job.location}</p>
            <p className="text-sm font-medium text-blue-600">{job.salary}</p>
            <p className="text-xs text-gray-500 mt-2">Hace 3 horas</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSelectedJob: PropTypes.func.isRequired,
};

export default JobList;
