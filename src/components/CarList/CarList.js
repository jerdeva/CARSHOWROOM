import React, { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';

import {
  Container,
  List,
  Price,
  Photo,
  DescriptionWrap,
  Details,
  BtnWrap
} from './CarList.styled';



const CarList = ({ vehicles }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <div>
        <h1>Cars</h1>
        <SearchForm onSearchChange={handleSearchChange} />
      </div>
      {filteredVehicles.length > 0 ? (
        filteredVehicles.map(vehicle => (
          <List key={vehicle.id}>
            <DescriptionWrap>
              <h3>{vehicle.brand}</h3>
              {vehicle.images.length > 0 && (
                <Photo
                  src={vehicle.images[0]}
                  alt={vehicle.title}
                  style={{ margin: '10px' }}
                />
              )}
              <Price>Price: {vehicle.price}$</Price>
            </DescriptionWrap>
            <BtnWrap>
              <Details href={`#/vehicles/${vehicle.id}`}>Details</Details>
            </BtnWrap>
          </List>
        ))
      ) : (
        <p>Автомобілі не найдены.</p>
      )}
    </Container>
  );
};



export default CarList;
