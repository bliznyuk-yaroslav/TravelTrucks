import sprite from '../image/sprite/sprite.svg';
import PropTypes from 'prop-types';

const Icon = ({ width, height, iconName, styles, style, onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      className={styles}
      style={style}
      onClick={onClick}
    >
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
