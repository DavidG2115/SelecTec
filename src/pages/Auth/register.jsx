import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex">
      {/* Imagen en la mitad derecha */}
      <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
        <img
          src="https://via.placeholder.com/400x400" // Cambia esta URL por la URL de la imagen que desees usar
          alt="Decorative illustration"
          className="w-3/4 h-auto object-contain"
        />
      </div>

      {/* Formulario de Registro */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Selecciona TecNM</h2>
          <h3 className="text-2xl font-semibold mb-4">Create an account</h3>
          <p className="text-gray-500 text-sm mb-8">
            Join us to start your journey. Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign up
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
            >
              <FaGoogle className="mr-2" />
              Sign up with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
            >
              <FaGithub className="mr-2" />
              Sign up with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
