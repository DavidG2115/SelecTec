export default function SearchBar() {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <input
                type="text"
                placeholder="Título, palabra clave"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Morelia, Michoacan">Morelia, Michoacan</option>
                <option value="Ciudad de Mexico">Ciudad de Mexico</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Monterrey">Monterrey</option>
                <option value="Puebla">Puebla</option>
            </select>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Buscar</button>
        </div>
    );
}
