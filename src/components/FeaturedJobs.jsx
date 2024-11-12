import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function FeaturedJobs() {
  const navigate = useNavigate();

  const jobs = [
    { id: 1, title: "Diseñador Gráfico", company: "Creativos Unidos", location: "Monterrey, Nuevo León", type: "Medio tiempo", salary: "$10,000.00 (Mensual)", category: "Diseño", description: "Creación de contenido visual para campañas de marketing...", logo: "/citelis_logo.png", highlighted: false },
    { id: 2, title: "Diseñador UI/UX", company: "Tech Design Studio", location: "Ciudad de México", type: "Remoto", salary: "$18,000.00 (Mensual)", category: "Diseño", description: "Desarrollar interfaces de usuario atractivas y funcionales...",logo: "/cis_logo.png", highlighted: true },
    { id: 4, title: "Gerente de Ventas", company: "GlobalCom", location: "Lima, Perú", type: "Tiempo completo", salary: "$20,000.00 (Mensual)", category: "Ventas", description: "Liderar el equipo de ventas para alcanzar los objetivos comerciales...", logo: "/cis_logo.png", highlighted: true },
    // Categoría: Recursos Humanos
    { id: 15, title: "Especialista en Reclutamiento", company: "HR Solutions", location: "Bogotá", type: "Presencial", salary: "$16,000.00 (Mensual)", category: "Recursos humanos", description: "Gestión y selección de talento para distintas áreas...", highlighted: true },
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
