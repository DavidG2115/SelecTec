// AllJobs.jsx
import { useState, useEffect } from 'react';
import JobListings from './JobListing';

function AllJobs() {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simula una llamada a la API para obtener todos los trabajos
    setTimeout(() => {
      // Aquí deberías reemplazar con la llamada real a la API
      setJobListings([
        // Lista de trabajos simulada
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <JobListings jobListings={jobListings} loading={loading} />
  );
}

export default AllJobs;