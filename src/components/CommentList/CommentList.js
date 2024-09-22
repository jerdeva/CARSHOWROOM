import React from 'react';
import { ListItem } from './CommentList.styled';

const CommentList = ({ comments }) => {
  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div>
      <h3>Comments:</h3>
      <ul>
        {sortedComments.map((review, index) => (
          <ListItem key={index}>
            <p>
              <strong>Comment:</strong> {review.comment}
            </p>
            <p>
              <strong>Rating:</strong> {review.rating}
            </p>
            <p>
              <strong>Reviewer Name:</strong> {review.reviewerName}
            </p>
            <p>
              <strong>Reviewer Email:</strong> {review.reviewerEmail}
            </p>
            <p>
              <strong>Date:</strong> {new Date(review.date).toLocaleString()}{' '}
            </p>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
