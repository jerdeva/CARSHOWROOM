import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import CarList from './CarList/CarList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarDetails from './CarDetails/CarDetails';

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/category/vehicle');
        setVehicles(response.data.products);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        Notiflix.Notify.failure("Помилка при загрузці автомо.");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <Router>
      <div>
        <h1>Автомобілі</h1>
        {loading ? <p>Загрузка...</p> : (
          <Routes>
            <Route path="/CARSHOWROOM" element={<CarList vehicles={vehicles} />} />
            <Route path="/vehicles/:vehicleId" element={<CarDetails />} />
            <Route path="*" element={<p>Сторінка не знайдена</p>} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
