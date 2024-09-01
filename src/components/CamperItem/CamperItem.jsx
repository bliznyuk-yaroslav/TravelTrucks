import Card from '@mui/material/Card';
import css from './CamperItem.module.css';
import Icon from '../Icon';
import { useState, useEffect } from 'react';

export default function CamperItem({ camper }) {
  const {
    _id,
    gallery = [],
    name,
    price,
    rating,
    location,
    description,
    adults,
    transmission,
    engine,
    details = {},
    reviews = [],
  } = camper;
  const { kitchen, airConditioner } =
    typeof details === 'object' ? details : {};
  const reviewsCount = reviews.length;
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isItemFavorite = favorites.some(fav => fav._id === _id);
    setIsFavorite(isItemFavorite);
  }, [_id]);
  return (
    <Card className={css.card}>
      <div>
        <div className={css.cardInfo}>
          <div className={css.cardTitle}>
            <p className={css.cardName}>{name}</p>
            <div className={css.someTitleBox}>
              <p>€ {price}</p>
              <Icon
                width={'24'}
                height={'24'}
                iconName="favotite"
                styles={`${isFavorite ? css.heartIconActive : css.heartIcon}`}
              />
            </div>
          </div>
        </div>
        <div className={css.addInfo}>
          <div className={css.ratingBox}>
            <Icon
              width={'16'}
              height={'16'}
              iconName="rating"
              styles={css.ratingIcon}
            />
            <p className={css.ratingText}>
              {rating}({reviewsCount} Reviews)
            </p>
          </div>
          <div className={css.locationBox}>
            <Icon
              width={'16'}
              height={'16'}
              iconName="location"
              styles={css.locationIcon}
            />
            <p className={css.locationText}>{location}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.featuresList}>
          <li className={css.featureItem}>
            <Icon
              width={'20'}
              height={'20'}
              iconName="adults"
              styles={css.featureIcon}
            />
            {adults} adults
          </li>
          <li className={css.featureItem}>
            <Icon
              width={'20'}
              height={'20'}
              iconName="transmission"
              styles={css.featureIcon}
            />
            {transmission}
          </li>
          <li className={css.featureItem}>
            <Icon
              width={'20'}
              height={'20'}
              iconName="engine"
              styles={css.featureIcon}
            />
            {engine}
          </li>
          {kitchen && (
            <li className={css.featureItem}>
              <Icon
                width={'20'}
                height={'20'}
                iconName="kitchen"
                styles={css.featureIcon}
              />
              Kitchen
            </li>
          )}
          {airConditioner && (
            <li className={css.featureItem}>
              <Icon
                width={'20'}
                height={'20'}
                iconName="airConditioner"
                styles={css.featureIcon}
              />
              AC
            </li>
          )}
        </ul>
      </div>
    </Card>
  );
}
