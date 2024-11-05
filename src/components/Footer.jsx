import { FaFacebook, FaInstagram, FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#1E1E28] text-white py-6 px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Logo y descripción */}
        <div className="md:w-1/3">
          <div className="flex items-center mb-2">
            <div className="bg-[#4640de] rounded-full w-6 h-6 mr-2"></div>
            <h2 className="text-xl font-bold">SeleccionaTec</h2>
          </div>
          <p className="text-gray-400 text-xs">
            La plataforma ideal para estudiantes que buscan impulsar su carrera y encontrar oportunidades en empresas innovadoras.
          </p>
        </div>

        {/* Enlaces de navegación */}
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">About</h3>
            <ul className="text-gray-400 text-xs space-y-1">
              <li><a href="#">Companies</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Advice</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Resources</h3>
            <ul className="text-gray-400 text-xs space-y-1">
              <li><a href="#">Help Docs</a></li>
              <li><a href="#">Guide</a></li>
              <li><a href="#">Updates</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Suscripción */}
        <div className="md:w-1/3">
          <h3 className="text-white font-semibold mb-2 text-sm">Obtén notificaciones de oferta de empleo</h3>
          <p className="text-gray-400 text-xs mb-2">
            Las últimas ofertas de trabajo, artículos, enviadas a tu correo.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-2 rounded-l-md text-gray-800 text-xs focus:outline-none"
            />
            <button className="bg-[#4640de] px-3 py-2 text-white font-semibold text-xs rounded-r-md hover:bg-[#3737b4] transition">
              Suscríbete
            </button>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-600 pt-4">
        {/* Derechos reservados y redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>2024 @ SeleccionaTec. Todos los derechos reservados.</p>
          <div className="flex gap-3 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook"><FaFacebook className="text-gray-400 hover:text-white transition" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-gray-400 hover:text-white transition" /></a>
            <a href="#" aria-label="Dribbble"><FaDribbble className="text-gray-400 hover:text-white transition" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-gray-400 hover:text-white transition" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="text-gray-400 hover:text-white transition" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
