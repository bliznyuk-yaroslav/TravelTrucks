import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import { selectCampers } from '../../redux/selectors';
import css from './CampersList';
export default function CamperList() {
  const { items } = useSelector(selectCampers);
  console.log(items);
  return (
    <ul>
      {items.map(camper => (
        <li key={camper.id} className={css.item}>
          <CamperItem camper={camper} />
        </li>
      ))}
    </ul>
  );
}
