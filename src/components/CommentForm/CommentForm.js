import React, { useState } from 'react';
import { FormSt, BTN } from './CommentForm.styled';

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [reviewerName, setreviewerName] = useState('');
  const [reviewerEmail, setreviewerEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      comment,
      rating,
      reviewerName,
      reviewerEmail,
      date: new Date().toLocaleString(),
    };
    onAddComment(newComment);
    setComment('');
    setRating('');
    setreviewerName('');
    setreviewerEmail('');
  };

  return (
    <div>
    <h2>Залиште свій відгук</h2>
    <FormSt onSubmit={handleSubmit}>
      <input
        type="text"
        value={reviewerName}
        onChange={e => setreviewerName(e.target.value)}
        placeholder="Им'я"
        required
      />
      <input
        type="email"
        value={reviewerEmail}
        onChange={e => setreviewerEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="number"
        value={rating}
        onChange={e => setRating(e.target.value)}
        placeholder="Рейтинг (1-5)"
        min="1"
        max="5"
        required
      />
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Додати коментар"
        required
      />
      <BTN type="submit">Додати</BTN>
      </FormSt>
      </div>
  );
};

export default CommentForm;
