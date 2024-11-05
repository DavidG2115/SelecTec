// routes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importación de páginas
import Home from './pages/Home/home.jsx';
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Rutas Públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;