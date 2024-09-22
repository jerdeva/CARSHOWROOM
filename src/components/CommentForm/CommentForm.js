import React, { useState } from 'react';
import { FormSt, BTN, NameSection } from './CommentForm.styled';

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [reviewerName, setreviewerName] = useState('');
  const [reviewerEmail, setreviewerEmail] = useState('');

const handleSubmit = event => {
  event.preventDefault();
  console.log('Form submission prevented');

  const newComment = {
    comment,
    rating,
    reviewerName,
    reviewerEmail,
    date: new Date(),
  };

  onAddComment(newComment);

  setComment('');
  setRating('');
  setreviewerName('');
  setreviewerEmail('');
};

  return (
    <div>
      <NameSection>Leave your feedback</NameSection>
      <FormSt onSubmit={handleSubmit}>
        <input
          type="text"
          value={reviewerName}
          onChange={e => setreviewerName(e.target.value)}
          placeholder="Name"
          required
          maxLength="200"
          minLength="3"
        />
        <input
          type="email"
          value={reviewerEmail}
          onChange={e => setreviewerEmail(e.target.value)}
          placeholder="Email"
          required
          maxLength="200"
          minLength="3"
        />
        <input
          type="number"
          value={rating}
          onChange={e => setRating(e.target.value)}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          required
        />
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment"
          required
          maxLength="200"
          minLength="8"
        />
        <BTN type="submit">Add</BTN>
      </FormSt>
    </div>
  );
};

export default CommentForm;
