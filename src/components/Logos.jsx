export default function Logos() {
    return (
        <div className="flex flex-col items-center gap-8 px-8 py-12 bg-white">
            <h2 className="text-gray-500 text-xl font-['Epilogue']">Empresas que ayudamos a crecer</h2>
            <div className="flex gap-24 justify-center items-center">
                <img className="w-48 h-auto" src="/citelis-logo-color.png" alt="Citelis" />
                <img className="w-48 h-auto" src="Kostal_logo.svg" alt="Kostal" />
                <img className="w-48 h-auto" src="/amazon_logo.png" alt="Amazon" />
                <img className="w-48 h-auto" src="/cis_logo.png" alt="CIS" />
            </div>
        </div>
    );
}
