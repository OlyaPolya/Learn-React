import React from 'react';
import { getImageSource } from '../../../../utils/getImageSource';
import { Link } from 'react-router-dom';
import { useDispatch } from 'hooks/redux';
import { setPhotoPage } from '../../../../store/slice/PhotoPageSlice';
import { Paths } from '../../../../constants';
import type { Photo } from '../../../../types';

type Props = {
  photos: Photo[];
};

const ResultList: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const cardOnClick = (photo: Photo) => {
    dispatch(setPhotoPage(photo));
  };

  return (
    <div className="result-search">
      {props.photos.map((photo) => (
        <Link key={photo.id} to={Paths.getPhotoPath(photo.id)}>
          <section className="search-item">
            <div className="item-card" onClick={() => cardOnClick(photo)}>
              <img
                src={getImageSource(photo.server, photo.id, photo.secret)}
                alt={photo.title}
                className="card-image"
              />
              <p className="card-views">views: {photo.views}</p>
            </div>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default React.memo(ResultList);
