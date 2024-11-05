import Header from '../../components/Header';
import Logos from '../../components/Logos';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/JobsCategories';
import FeaturedJobs from '../../components/FeaturedJobs';
import LatestJobs from '../../components/LatestJobs';
import Footer from '../../components/Footer';

export default function Home() {
    return (
       <>
        <Header />
        <div className="w-full h-screen relative bg-[#f8f8fd] overflow-hidden flex flex-col justify-center items-center">
            {/* Fondo con paralelogramos morados */}
            <div className="absolute inset-0 bg-transparent z-0">
                {/* Paralelogramos morados en la esquina superior derecha */}
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                    <div
                        className="absolute hidden md:block border-4 border-blue-500 w-[20vw] h-[40vh] opacity-40 z-10"
                        style={{ right: '5%', top: '20%', transform: 'rotate(78deg) skewY(20deg)' }}
                    ></div>
                    <div
                        className="absolute border-4 hidden md:block border-blue-500 w-[25vw] h-[60vh] opacity-40 z-10"
                        style={{ right: '2%', top: '0%', transform: 'rotate(78deg) skewY(20deg)' }}
                    ></div>
                    <div
                        className="absolute border-4 hidden md:block border-blue-500 w-[20vw] h-[40vh] opacity-40 z-10"
                        style={{ right: '10%', top: '5%', transform: 'rotate(78deg) skewY(20deg)' }}
                    ></div>
                </div>
            </div>

            {/* Contenedor principal */}
            <div className="flex flex-col md:flex-row w-full max-w-full md:max-w-[1440px] h-full relative px-4 md:px-20 pt-1 z-10">
                {/* Texto y Inputs */}
                <div className="flex flex-col w-full md:w-1/2 justify-center items-start gap-2 md:gap-2 pt-2 md:pt-2">
                    <div className="text-[#25324b] text-4xl md:text-6xl font-semibold leading-tight text-center md:text-left mb-2">
                        Encuentra empleos y prácticas que se ajustan a tu carrera
                        <br />
                        <span className="text-[#26a3ff] text-5xl md:text-7xl font-semibold">100+ Oportunidades</span>
                    </div>
                    <p className="text-[#515b6f] text-base md:text-lg opacity-70 leading-7 font-['Epilogue'] text-center md:text-left mb-4">
                        La plataforma ideal para estudiantes que buscan impulsar su carrera y encontrar oportunidades en empresas innovadoras.
                    </p>
                    <div className="flex flex-col w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
                        <SearchBar />
                    </div>
                    <div className="text-base text-[#202430] font-['Epilogue'] text-center md:text-left mt-4">
                        <span>Popular: </span>
                        <span className="font-medium">UI Designer, Software Developer, Android, Admin</span>
                    </div>
                </div>

                {/* Imagen visible solo en pantallas medianas y más grandes */}
                <div className="relative w-full md:w-1/2 h-full flex justify-center items-start hidden md:block">
                    <img
                        src="/imgHome.png"
                        alt="Banner"
                        className="absolute top-20 right-0 w-100% max-w-[100%] h-auto"
                    />
                </div>
            </div>
        </div>

        <div>
            <Logos />
        </div>
        
        <Categories />
        
        <div>
            <FeaturedJobs />
        </div>
        <div>
            <LatestJobs />
        </div>
        <div>
            <Footer />
        </div>
    </>
  );
}
