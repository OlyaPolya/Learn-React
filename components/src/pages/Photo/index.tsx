import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useSelector } from '../../hooks/redux';
import { getImageSource } from '../../utils/getImageSource';

const Photo: React.FC = () => {
  const navigate = useNavigate();
  const { description, id, ownername, secret, server, title, views } = useSelector(
    (state) => state.photoPageReducer
  );

  return (
    <>
      <div className="item-block">
        <div className="current-item">
          <img
            src={getImageSource(server, id, secret)}
            alt={title}
            className="current-item-image"
          />
          <div className="current-item-block">
            <p className="current-item-title">
              <>
                <b>Title: </b>
                {title.length > 0 ? title : 'No Title'}
              </>
            </p>
            <p className="current-item-description">
              <b>Description: </b>
              {description._content.length > 0 ? description._content : 'No Description'}
            </p>
            <p className="current-item-owner">
              <>
                <b>Owner: </b>
                {ownername.length > 0 ? ownername : 'No Name'}
              </>
            </p>
            <p className="current-item-views">
              <>
                <b>Views: </b>
                {views.length > 0 ? views : '0'}
              </>
            </p>
          </div>
        </div>
        <div className="current-item-button">
          <button onClick={() => navigate(-1)} className="button-back">
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Photo;
