import { ArrowRightIcon } from '@heroicons/react/24/outline';

function LatestJobs() {
  const jobs = [
    {
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      tags: ["Full-Time", "Marketing", "Diseño"],
      logo: "/nomad_logo.png",
    },
    {
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, USA",
      tags: ["Full-Time", "Marketing", "Diseño"],
      logo: "/dropbox_logo.png",
    },
    // Añade más trabajos aquí...
  ];

  return (
    <section className="relative w-full py-12 px-8 md:px-20 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      {/* Elementos geométricos en el fondo */}
      <div className="absolute -top-10 -left-20 w-80 h-80 bg-purple-100 opacity-30 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -right-20 w-80 h-80 bg-blue-100 opacity-30 rounded-full blur-xl"></div>

      {/* Título y enlace de "Mostrar todo" */}
      <div className="relative z-10 flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#202430]">
          Últimos <span className="text-[#26a3ff]">trabajos abiertos</span>
        </h2>
        <a href="#" className="text-[#4640de] font-semibold text-sm md:text-base flex items-center hover:underline">
          Mostrar todo <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Grid de trabajos */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              {/* Logo de la empresa */}
              <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 mr-3 rounded-full object-contain" />
              <div>
                <h3 className="text-lg font-semibold text-[#202430]">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
              </div>
            </div>

            {/* Etiquetas */}
            <div className="flex flex-wrap gap-2 mt-2">
              {job.tags.map((tag, idx) => (
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestJobs;
