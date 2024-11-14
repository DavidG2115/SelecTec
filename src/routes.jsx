// routes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importación de páginas
import Home from './pages/Home/Home';
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';
import StudentDashboard from './pages/Student/StudentDashboard';
import EditProfilePage from './pages/Student/EditProfilePage';
import ProfilePage from './pages/Student/ProfilePage.jsx';
import CompanyProfilePage from './pages/Company/CompanyProfilePage.jsx';
import EditCompanyProfilePage from './pages/Company/EditCompanyProfilePage.jsx';
import JobListings from './components/JobListing';
import AllJobs from './components/AllJobs';
import CompanyHome from './pages/Company/Sections/Home/CompanyHome';
import CompanyStudentDetails from './pages/Company/Sections/components/CompanyStudentDetail.jsx';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Rutas Públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Rutas Estudiantes */}
                <Route path="/student/dashboard" element={<StudentDashboard />} />
                <Route path="/student/profile/edit" element={<EditProfilePage />} />
                <Route path="/student/profile" element={<ProfilePage />} />

                {/* Rutas Empresas */}
                <Route path="/company/profile" element={<CompanyProfilePage />} />
                <Route path="/company/profile/edit" element={<EditCompanyProfilePage />} />
                <Route path="/company/home" element={<CompanyHome />} />
                <Route path="/company/student/:id" element={<CompanyStudentDetails />} />



                {/* Rutas de Empleos */}
                <Route path="/jobs/category/:category" element={<JobListings />} />
                <Route path="/jobs" element={<AllJobs />} />
                <Route path="/job/:id" element={<JobListings />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;