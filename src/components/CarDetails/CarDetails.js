import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from 'components/CommentList/CommentList';
import CommentForm from 'components/CommentForm/CommentForm';

const CarDetails = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

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
    <div>
      <h2>Деталі автомобіля</h2>
      <h3>{vehicle.brand}</h3>
      <p>Ціна: {vehicle.price}</p>
      <p>Опис: {vehicle.description}</p>
      <div>
        <h3>Зображення:</h3>
        {vehicle.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={vehicle.title}
            style={{ width: '200px', margin: '10px' }}
          />
        ))}
      </div>
      <CommentForm onAddComment={handleAddComment} vehicleId={vehicleId} />
      <CommentList comments={allComments} />{' '}
    </div>
  );
};

export default CarDetails;
