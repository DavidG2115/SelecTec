import { ArrowRightIcon } from '@heroicons/react/24/outline';

function FeaturedJobs() {
  const jobs = [
    {
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma...",
      type: "Tiempo Completo",
      categories: ["Marketing", "Diseño"],
      logo: "/revolut_logo.png",
    },
    {
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, US",
      description: "Dropbox is looking for Brand Designer to help the team t...",
      type: "Tiempo Completo",
      categories: ["Diseño", "Negocio"],
      logo: "/dropbox_logo.png",
    },
    {
      title: "Email Marketing",
      company: "Pitch",
      location: "Berlin, Germany",
      description: "Pitch is looking for Customer Manager to join marketing t...",
      type: "Tiempo Completo",
      categories: ["Marketing"],
      logo: "/pitch_logo.png",
    },
    // Añade más trabajos aquí...
  ];

  return (
    <section className="w-full py-12 px-8 md:px-20">
      {/* Título y enlace de "Mostrar todo" */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#202430]">
          Trabajos <span className="text-[#26a3ff]">destacados</span>
        </h2>
        <a href="#" className="text-[#4640de] font-semibold text-sm md:text-base flex items-center hover:underline">
          Mostrar todo <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Grid de trabajos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition">
            {/* Logo de la empresa */}
            <div className="flex items-center mb-4">
              <img src={job.logo} alt={`${job.company} logo`} className="w-10 h-10 mr-3 rounded-full object-contain" />
              <span className="text-sm font-medium px-2 py-1 border border-[#4640de] text-[#4640de] rounded">
                {job.type}
              </span>
            </div>

            {/* Información del trabajo */}
            <h3 className="text-lg font-semibold text-[#202430] mb-1">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
            <p className="text-sm text-gray-600 mt-2 mb-4">{job.description}</p>

            {/* Categorías */}
            <div className="flex flex-wrap gap-2">
              {job.categories.map((category, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    category === "Marketing" ? "bg-orange-100 text-orange-600" :
                    category === "Diseño" ? "bg-green-100 text-green-600" :
                    category === "Negocio" ? "bg-purple-100 text-purple-600" :
                    "bg-blue-100 text-blue-600"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedJobs;
