import css from './Filter.module.css';
import Icon from '../Icon';
export default function Filter() {
  return (
    <div className={css.container}>
      <div>
        <label htmlFor="" className={css.locationLab}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <Icon
            width={'20'}
            height={'20'}
            iconName="icon-location-1"
            styles={css.locationIcon}
          />
          <select className={css.locationInput}></select>
        </div>
      </div>
    </div>
  );
}
