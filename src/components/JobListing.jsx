// JobListings.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobList from './JobList';
import JobDetails from './JobDetails';
import Header from './Header';

function JobListings() {
  const { category } = useParams();
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const simulatedJobs = [
        // Categoría: Diseño
        { id: 1, title: "Diseñador Gráfico", company: "Creativos Unidos", location: "Monterrey, Nuevo León", type: "Medio tiempo", salary: "$10,000.00 (Mensual)", category: "Diseño", description: "Creación de contenido visual para campañas de marketing...", logo: "/citelis_logo.png", highlighted: false },
        { id: 2, title: "Diseñador UI/UX", company: "Tech Design Studio", location: "Ciudad de México", type: "Remoto", salary: "$18,000.00 (Mensual)", category: "Diseño", description: "Desarrollar interfaces de usuario atractivas y funcionales...",logo: "/cis_logo.png", highlighted: true },
    
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
    
    

      setJobListings(simulatedJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredJobs = category
    ? jobListings.filter(job => job.category.toLowerCase() === category.toLowerCase())
    : jobListings;


    return (
      <>
        <Header />
        <div className="flex flex-col w-full h-screen bg-gray-100">
          
          {/* Barra de Filtros Fija en la parte superior */}
          <div className="sticky top-0 z-10 bg-white p-4 shadow-md flex space-x-4 overflow-x-auto scrollbar-hide">
            {["Ordenar", "Distancia", "Fecha", "Categoría", "Lugar de trabajo", "Experiencia", "Salario", "Jornada", "Contrato", "Discapacidad"].map((filter, index) => (
              <button
                key={index}
                className="text-sm font-semibold px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 whitespace-nowrap"
              >
                {filter}
              </button>
            ))}
          </div>
  
          {/* Contenedor Principal que contiene la lista de empleos y los detalles */}
          <div className="flex flex-1 h-0 overflow-hidden p-6 space-x-6 mt-2">
            {loading ? (
              <div className="flex items-center justify-center w-full h-full text-gray-500 text-xl">
                <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full"></div>
                <span className="ml-3">Cargando empleos...</span>
              </div>
            ) : (
              <>
                {/* Lista de Empleos con su propio scroll vertical */}
                <div className="w-1/3 h-full overflow-y-auto bg-white shadow-md rounded-lg p-4">
                  <JobList jobs={filteredJobs} setSelectedJob={setSelectedJob} />
                </div>
  
                {/* Detalles del Empleo, también con su propio scroll vertical */}
                <div className="w-2/3 h-full overflow-y-auto bg-white shadow-md rounded-lg p-6">
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