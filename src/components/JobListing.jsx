// JobListings.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobList from './JobList';
import JobDetails from './JobDetails';
import Header from './Header';
import { FaSearch } from 'react-icons/fa';

function JobListings() {
  const { category, id } = useParams();
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(''); // Estado para la palabra clave de búsqueda

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const simulatedJobs = [
        // Categoría: Diseño
        { id: 1, title: "Diseñador Gráfico", company: "Citelis", location: "Morelia, Michoacán", type: "Medio tiempo", salary: "$10,000.00 (Mensual)", category: "Diseño", description: "Creación de contenido visual para campañas de marketing...", logo: "/citelis_logo.png", highlighted: false },
        { id: 2, title: "Diseñador UI/UX", company: "Centro de inteligencia", location: "Ciudad de México", type: "Remoto", salary: "$18,000.00 (Mensual)", category: "Diseño", description: "Desarrollar interfaces de usuario atractivas y funcionales...",logo: "/cis_logo.png", highlighted: true },
    
        // Categoría: Ventas
        { id: 3, title: "Ejecutivo de Ventas", company: "Ventas Globales", location: "Guadalajara, Jalisco", type: "Tiempo completo", salary: "$15,000.00 (Mensual) + comisiones", category: "Ventas", description: "Gestión de ventas y relaciones con clientes...", logo: "/cis_logo.png", highlighted: false },
        { id: 4, title: "Gerente de Ventas", company: "GlobalCom", location: "Lima, Perú", type: "Tiempo completo", salary: "$20,000.00 (Mensual)", category: "Ventas", description: "Liderar el equipo de ventas para alcanzar los objetivos comerciales...", logo: "/cis_logo.png", highlighted: true },
    
        // Categoría: Marketing
        { id: 5, title: "Analista de Marketing Digital", company: "Marketing Hub", location: "Bogotá", type: "Tiempo completo", salary: "$9,000.00 (Mensual)", category: "Marketing", description: "Responsable de desarrollar estrategias de marketing digital...", logo: "/cis_logo.png", highlighted: false },
        { id: 6, title: "Especialista en Marketing de Contenidos", company: "Content Creators", location: "Buenos Aires, Argentina", type: "Remoto", salary: "$12,000.00 (Mensual)", category: "Marketing", description: "Creación y gestión de contenido para redes sociales y blogs...", logo: "/cis_logo.png", highlighted: true },
    
        // Categoría: Finanzas
        { id: 7, title: "Consultor Financiero", company: "Finanzas Seguras", location: "Ciudad de México", type: "Remoto", salary: "$20,000.00 (Mensual)", category: "Finanzas", description: "Asesoría financiera a clientes empresariales y particulares...", logo: "/cis_logo.png", highlighted: false },
        { id: 8, title: "Analista Financiero", company: "Inversiones XYZ", location: "Medellín, Colombia", type: "Tiempo completo", salary: "$22,000.00 (Mensual)", category: "Finanzas", description: "Análisis de inversiones y gestión de portafolio...", logo: "/cis_logo.png", highlighted: true },
    
        // Categoría: Tecnología
        { id: 9, title: "Soporte Técnico", company: "MC Servicios", location: "Morelia, Michoacán", type: "Presencial y remoto", salary: "$8,500.00 (Mensual)", category: "Tecnología", description: "Apoyo en el área de soporte técnico para soluciones de tecnología...", highlighted: true },
        { id: 10, title: "Administrador de Sistemas", company: "Tech Solutions", location: "Quito, Ecuador", type: "Tiempo completo", salary: "$19,000.00 (Mensual)", category: "Tecnología", description: "Gestión de infraestructura de TI y soporte de sistemas...", highlighted: false },
    
        // Categoría: Desarrollo
        { id: 11, title: "Desarrollador Backend", company: "InnovaSoft", location: "Ciudad de México", type: "Medio tiempo", salary: "$18,000.00 (Mensual)", category: "Desarrollo", description: "Desarrollo de APIs y lógica de backend para aplicaciones web...", logo: "/amazon_logo.png", highlighted: true },
        { id: 17, title: "Desarrollador Full Stack", company: "Code Solutions", location: "Guadalajara", type: "Tiempo completo", salary: "$25,000.00 (Mensual)", category: "Desarrollo", description: "Manejo de desarrollo frontend y backend para aplicaciones empresariales...", logo: "/citelis_logo.png",  highlighted: true },
        { id: 18, title: "Ingeniero de Software", company: "TechSoft", location: "Monterrey", type: "Medio tiempo", salary: "$20,000.00 (Mensual)", category: "Desarrollo", description: "Participación en el diseño e implementación de nuevos sistemas...", logo: "/Kostal_logo.svg", highlighted: false },
        { id: 19, title: "Desarrollador Móvil", company: "Mobile Solutions", location: "Remoto", type: "Freelance", salary: "$15,000.00 (Mensual)", category: "Desarrollo", description: "Desarrollo de aplicaciones móviles para Android e iOS...", logo: "/amazon_logo.png", highlighted: true },
        { id: 20, title: "Desarrollador Frontend", company: "StartUp Tech", location: "Ciudad de México", type: "Tiempo completo", salary: "$22,000.00 (Mensual)", category: "Desarrollo", description: "Desarrollo de interfaces de usuario modernas y responsivas...", logo: "/cis_logo.png", highlighted: false },
        { id: 21, title: "Ingeniero DevOps", company: "Innovatech", location: "Remoto", type: "Tiempo completo", salary: "$30,000.00 (Mensual)", category: "Desarrollo", description: "Gestión y automatización de infraestructura en la nube...", logo: "/citelis_logo.png", highlighted: true },
        { id: 22, title: "Analista de Calidad", company: "SoftLabs", location: "Querétaro", type: "Medio tiempo", salary: "$18,000.00 (Mensual)", category: "Desarrollo", description: "Pruebas de calidad y control de errores en aplicaciones web...", logo: "/amazon_logo.png", highlighted: false },
    
        // Categoría: Negocios
        { id: 13, title: "Consultor de Negocios", company: "Business Advisors", location: "Ciudad de Panamá", type: "Remoto", salary: "$25,000.00 (Mensual)", category: "Negocios", description: "Asesoramiento en estrategias de negocio para empresas emergentes...", highlighted: true },
        { id: 14, title: "Gerente de Operaciones", company: "Operaciones Eficientes", location: "Lima, Perú", type: "Tiempo completo", salary: "$28,000.00 (Mensual)", category: "Negocios", description: "Responsable de la gestión operativa y logística de la empresa...", highlighted: false },
    
        // Categoría: Recursos Humanos
        { id: 15, title: "Especialista en Reclutamiento", company: "HR Solutions", location: "Bogotá", type: "Presencial", salary: "$16,000.00 (Mensual)", category: "Recursos humanos", description: "Gestión y selección de talento para distintas áreas...", highlighted: true },
        { id: 16, title: "Gerente de Recursos Humanos", company: "Empresa Multinacional", location: "Ciudad de México", type: "Tiempo completo", salary: "$25,000.00 (Mensual)", category: "Recursos humanos", description: "Gestión y desarrollo de talento para la organización...", highlighted: false }
      ];
    
      const sortedJobs = [
        ...simulatedJobs.filter(job => job.highlighted), // Trabajos destacados
        ...simulatedJobs.filter(job => !job.highlighted) // Otros trabajos
      ];
  
      setJobListings(sortedJobs);

      // Filtra para obtener el trabajo seleccionado si `id` está presente en los parámetros
      const job = simulatedJobs.find((job) => job.id === parseInt(id));
      setSelectedJob(job || null);

      setLoading(false);
    }, 1000);
  }, [id]);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  
    // Obtener trabajos recientes de localStorage
    let recentJobs = JSON.parse(localStorage.getItem('recentJobs')) || [];
  
    // Agregar el trabajo seleccionado al inicio y evitar duplicados
    recentJobs = [job, ...recentJobs.filter(j => j.id !== job.id)].slice(0, 5); // Limitar a los últimos 5 trabajos
  
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('recentJobs', JSON.stringify(recentJobs));
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredJobs = jobListings.filter(job => {
    const keyword = searchKeyword.toLowerCase();
    return (
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword) ||
      job.description.toLowerCase().includes(keyword)
    );
  });

  const jobsToShow = filteredJobs.filter(job => !category || job.category.toLowerCase() === category.toLowerCase());

  return (
    <>
      <Header />
      <div className="flex flex-col w-full h-screen bg-gray-100">
        {/* Barra de Búsqueda */}
        <div className="bg-white shadow-md p-4 flex items-center justify-center sticky top-0 z-10">
          <div className="relative w-full md:w-2/3 lg:w-1/2">
            <input
              type="text"
              placeholder="Buscar empleos por título o empresa..."
              value={searchKeyword}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out shadow-sm"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>
  
        {/* Contenedor Principal */}
        <div className="flex flex-1 h-full overflow-hidden p-6 space-x-6 mt-4">
          {loading ? (
            <div className="flex items-center justify-center w-full h-full text-gray-500 text-xl">
              <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
              <span className="ml-3 text-gray-600">Cargando empleos...</span>
            </div>
          ) : (
            <>
              {/* Lista de Empleos */}
              <div className="w-1/3 h-full max-h-full overflow-y-auto bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out hover:shadow-xl">
                <JobList jobs={jobsToShow} setSelectedJob={handleJobSelect} />
              </div>

              {/* Detalles del Empleo */}
              <div className="w-2/3 h-full max-h-full overflow-y-auto bg-white shadow-lg rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl flex-grow">
                <JobDetails job={selectedJob} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  ); 
}

export default JobListings;