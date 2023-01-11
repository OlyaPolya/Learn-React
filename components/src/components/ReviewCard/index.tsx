import React from 'react';
import { useSelector } from '../../hooks/redux';

function ReviewCards(): JSX.Element {
  const { cards } = useSelector((state) => state.formReviewReducer);

  return cards.length > 0 ? (
    <div className="review-list">
      {cards.map((card) => (
        <div key={card.userName} className="review-card">
          {card.userName && <h5 className="review-title">{card.userName}</h5>}
          {card.rate && <span className="review-rate">{card.rate}</span>}
          {card.imgSrc && <img src={card.imgSrc} alt="review image" className="review-image" />}
          <p className="review-description__title">Review</p>
          {card.description && <p className="review-description">{card.description}</p>}
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
}

export default ReviewCards;
