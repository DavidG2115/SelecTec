import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecentJobs() {
  const [recentJobs, setRecentJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar los últimos trabajos guardados en localStorage
    const storedJobs = JSON.parse(localStorage.getItem('recentJobs')) || [];
    setRecentJobs(storedJobs);
  }, []);

  const handleJobClick = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <section className="w-full py-12 px-8 md:px-20 bg-[#f8f8fd]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#202430]">
          Últimos <span className="text-[#26a3ff]">trabajos abiertos</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => handleJobClick(job.id)}
          >
            <div className="flex items-center mb-4">
              <img src={job.logo || "/placeholder_logo.png"} alt={`${job.company} logo`} className="w-12 h-12 mr-4 rounded-full object-contain" />
              <div>
                <h3 className="text-xl font-semibold text-[#202430]">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green-600 border border-green-200">
                {job.type}
              </span>
              {job.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-2 py-1 rounded-full border ${
                    tag === "Marketing" ? "bg-yellow-50 text-yellow-600 border-yellow-200" :
                    tag === "Diseño" ? "bg-purple-50 text-purple-600 border-purple-200" :
                    "bg-blue-50 text-blue-600 border-blue-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentJobs;
