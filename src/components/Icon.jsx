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

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  styles: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Icon;
