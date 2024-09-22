import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import CarList from './CarList/CarList';
import {
  Route, Routes,
} from 'react-router-dom';
import CarDetails from './CarDetails/CarDetails';
import { Container } from './main.styled';

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
        Notiflix.Notify.failure("Помилка при загрузці авто.");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
      <Container>
        {loading ? <p>Загрузка...</p> : (
          <Routes>
            <Route path="/" element={<CarList vehicles={vehicles} />} />
            <Route path="/vehicles/:vehicleId" element={<CarDetails />} />
            <Route path="*" element={<p>Сторінка не знайдена</p>} />
          </Routes>
        )}
      </Container>
  );
};

export default App;
