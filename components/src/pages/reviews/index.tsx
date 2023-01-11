import ReviewCard from 'components/ReviewCard';
import React from 'react';
import Form from '../../components/Form';

const Reviews: React.FC = () => (
  <div className="reviews">
    <p className="reviews-header">Add Your Review </p>
    <Form />
    <ReviewCard />
  </div>
);

export default Reviews;
