import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function FeaturedJobs() {
  const navigate = useNavigate();

  const jobs = [
    { id: 1, title: "Desarrollador Backend", company: "InnovaSoft", location: "Ciudad de México", type: "Medio tiempo", salary: "$18,000.00 (Mensual)", category: "Desarrollo", description: "Desarrollo de APIs y lógica de backend para aplicaciones web...", logo: "/amazon_logo.png", highlighted: true },
    { id: 2, title: "Desarrollador Frontend", company: "StartUp Tech", location: "Remoto", type: "Tiempo completo", salary: "$22,000.00 (Mensual)", category: "Desarrollo", description: "Desarrollo de interfaces de usuario modernas y responsivas...", logo: "/cis_logo.png", highlighted: false },
    // Añade más trabajos aquí...
  ];

  const handleJobClick = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <section className="w-full py-12 px-8 md:px-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#202430]">
          Trabajos <span className="text-[#26a3ff]">destacados</span>
        </h2>
        <a href="#" className="text-[#4640de] font-semibold text-sm md:text-base flex items-center hover:underline">
          Mostrar todo <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => handleJobClick(job.id)} // Redirige al hacer clic
          >
            <div className="flex items-center mb-4">
              <img src={job.logo} alt={`${job.company} logo`} className="w-10 h-10 mr-3 rounded-full object-contain" />
              <span className="text-sm font-medium px-2 py-1 border border-[#4640de] text-[#4640de] rounded">
                {job.type}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[#202430] mb-1">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
            <p className="text-sm text-gray-600 mt-2 mb-4">{job.description}</p>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                {job.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedJobs;
