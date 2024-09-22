import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CommentList from 'components/CommentList/CommentList';
import CommentForm from 'components/CommentForm/CommentForm';
import {
  Container,
  BTN,
  MainPart,
  ImgWrap,
  Img,
  Brand,
  Paragrapher,
} from './CarDetails.styled';


const CarDetails = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${vehicleId}`
        );
        setVehicle(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке информации о автомобиле!', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, [vehicleId]);

useEffect(() => {
  const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
  const vehicleComments = storedComments.filter(
    comment => comment.vehicleId === vehicleId
  );
  setComments(vehicleComments);
}, [vehicleId]);


const handleAddComment = newComment => {
  const updatedComments = [
    ...comments,
    { ...newComment, vehicleId }, 
  ];

  setComments(updatedComments);
  localStorage.setItem('comments', JSON.stringify(updatedComments));
};



  if (loading) return <p>Загрузка...</p>;

  const allComments = [...(vehicle.reviews || []), ...comments];

  return (
    <Container>
      <BTN onClick={() => navigate('/')}>BACK</BTN>
      <MainPart>
        {/* <h2>Car details</h2> */}
        <Brand>{vehicle.brand}</Brand>
        {/* <p>Images:</p> */}
        <ImgWrap>
          {vehicle.images.map((image, index) => (
            <Img
              key={index}
              src={image}
              alt={vehicle.title}
              style={{ width: '200px', margin: '10px' }}
            />
          ))}
        </ImgWrap>
        <Paragrapher>
          <strong>Price:</strong> {vehicle.price}$
        </Paragrapher>
        <Paragrapher>
          <strong>Description:</strong> {vehicle.description}
        </Paragrapher>
        <Paragrapher>
          <strong>Warranty Information:</strong> {vehicle.warrantyInformation}
        </Paragrapher>
        <Paragrapher>
          <strong>Availability Status:</strong> {vehicle.availabilityStatus}
        </Paragrapher>
      </MainPart>
      <CommentForm onAddComment={handleAddComment} vehicleId={vehicleId} />
      <CommentList comments={allComments} />{' '}
    </Container>
  );
};

export default CarDetails;
