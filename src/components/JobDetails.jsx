// JobDetails.jsx
import PropTypes from 'prop-types';

function JobDetails({ job }) {
  if (!job) {
    return <p className="text-gray-500 w-full text-center py-6">Selecciona un empleo para ver los detalles.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-600">{job.title}</h2>
      <p className="text-lg text-gray-700">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location} - {job.type}</p>
      <p className="text-lg text-gray-800 font-semibold">{job.salary}</p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
        Postularme
      </button>

      <div className="flex space-x-4 mt-6">
        <button className="text-gray-500 hover:text-blue-600">❤️</button>
        <button className="text-gray-500 hover:text-blue-600">🔄</button>
        <button className="text-gray-500 hover:text-blue-600">...</button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Descripción</h3>
        <p className="text-gray-700">{job.description}</p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Requisitos</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
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
  }),
};

export default JobDetails;
