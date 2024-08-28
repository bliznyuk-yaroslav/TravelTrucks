import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import sprite from '../../image/sprite/sprite.svg';
import clsx from 'clsx';
const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <div className={css.container}>
      <NavLink className={css.navLink}>
        <svg className={css.icon}>
          <use href={`${sprite}#TravelTrucks`}></use>
        </svg>
      </NavLink>
      <nav className={css.nav}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getNavLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
}
