import React from 'react';
import { ListItem, List, Paragrapher, NameSection } from './CommentList.styled';

const CommentList = ({ comments }) => {
  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div>
      <NameSection>Comments:</NameSection>
      <List>
        {sortedComments.map((review, index) => (
          <ListItem key={index}>
            <Paragrapher>
              <strong>Comment:</strong> {review.comment}
            </Paragrapher>
            <Paragrapher>
              <strong>Rating:</strong> {review.rating}
            </Paragrapher>
            <Paragrapher>
              <strong>Reviewer Name:</strong> {review.reviewerName}
            </Paragrapher>
            <Paragrapher>
              <strong>Reviewer Email:</strong> {review.reviewerEmail}
            </Paragrapher>
            <Paragrapher>
              <strong>Date:</strong> {new Date(review.date).toLocaleString()}{' '}
            </Paragrapher>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CommentList;
