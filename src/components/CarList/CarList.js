import React, { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';



const CarList = ({ vehicles }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchForm onSearchChange={handleSearchChange} />
      <h2>Список автомобілів:</h2>
      {filteredVehicles.length > 0 ? (
        filteredVehicles.map(vehicle => (
          <div key={vehicle.id}>
            <h3>{vehicle.brand}</h3>
            {/* <img src={vehicle.images} alt="images" /> */}
            <p>Ціна: {vehicle.price}</p>
            <a href={`/vehicles/${vehicle.id}`}>Деталі</a>
          </div>
        ))
      ) : (
        <p>Автомобілі не найдены.</p>
      )}
    </div>
  );
};



export default CarList;
