import { ArrowRightIcon } from '@heroicons/react/24/outline';

function JobsCategories() {
  const categories = [
    { title: "Diseño", jobs: 235, icon: "🖌️" },
    { title: "Ventas", jobs: 756, icon: "📈" },
    { title: "Marketing", jobs: 140, icon: "📣" },
    { title: "Finanzas", jobs: 325, icon: "💰" },
    { title: "Tecnología", jobs: 436, icon: "💻" },
    { title: "Desarrollo", jobs: 542, icon: "🖥️" },
    { title: "Negocios", jobs: 211, icon: "💼" },
    { title: "Recursos humanos", jobs: 346, icon: "👥" },
  ];

  return (
    <section className="w-full py-12 px-8 md:px-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#202430]">
          Explorar por <span className="text-[#26a3ff]">categoría</span>
        </h2>
        <a href="#" className="text-[#4640de] font-semibold text-sm md:text-base flex items-center hover:underline">
          Todos los trabajos <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
      
      {/* Grid de categorías */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between p-6 border rounded-lg transition transform hover:shadow-lg bg-white text-[#202430] hover:bg-[#4640de] hover:text-white"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl">{category.icon}</span>
            </div>
            <h3 className="text-lg font-semibold">
              {category.title}
            </h3>
            <p className="text-sm opacity-70 mb-2">{category.jobs} jobs available</p>
            <div className="text-sm font-medium flex items-center">
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobsCategories;
