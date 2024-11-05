import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const LoginForm = () => {
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

      {/* Formulario en la mitad izquierda */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Selecciona TecNM</h2>
          <h3 className="text-2xl font-semibold mb-4">Welcome back</h3>
          <p className="text-gray-500 text-sm mb-8">
            Start your website in seconds. Don’t have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2 border-gray-300 focus:ring-blue-500" />
                Remember me
              </label>
              <Link to="#" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign in
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

export default LoginForm;
