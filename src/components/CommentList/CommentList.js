import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h3>Коментарі:</h3>
      <ul>
        {comments.map((review, index) => (
          <li key={index}>
            <p>
              <strong>Коментар:</strong> {review.comment}
            </p>
            <p>
              <strong>Рейтинг:</strong> {review.rating}
            </p>
            <p>
              <strong>Ім'я рецензента:</strong> {review.reviewerName}
            </p>
            <p>
              <strong>Email рецензента:</strong> {review.reviewerEmail}
            </p>
            <p>
              <strong>Дата:</strong> {review.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
