import css from './Filter.module.css';
import Icon from '../Icon';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { fetchCampers } from '../../redux/operation';
import { selectCampers } from '../../redux/selectors';

const equipmentLabels = {
  AC: 'AC',
  transmission: 'Automatic',
  kitchen: 'Kitchen',
  TV: 'TV',
  bathroom: 'Bathroom',
};

const typeLabels = {
  panelTruck: 'Van',
  fullyIntegrated: 'Fully Integrated',
  alcove: 'Alcove',
};

export default function Filter() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState({
    AC: false,
    transmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });
  const [selectedType, setSelectedType] = useState({
    panelTruck: false,
    fullyIntegrated: false,
    alcove: false,
  });

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const locations = useMemo(() => {
    if (campers.items) {
      const locs = campers.items.map(camper => camper.location);
      return [...new Set(locs)];
    }
    return [];
  }, [campers]);

  const handleLocationChange = event => {
    setSelectedLocation(event.target.value);
  };

  const handleEquipmentChange = key => {
    setSelectedEquipment(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleTypeChange = key => {
    setSelectedType(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const onSearch = () => {
    // Handle search action
  };
  return (
    <div className={css.container}>
      <div>
        <label htmlFor="locationSelect" className={css.locationLab}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <Icon
            width={'20'}
            height={'20'}
            iconName="icon-location-1"
            styles={css.locationIcon}
          />
          <select
            id="locationSelect"
            className={css.locationInput}
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">Select Location</option>
            {locations.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={css.container}>
        <p className={css.filtersTitle}>Filters</p>
        <div className={css.filter}>
          <h2 className={css.filterTitle}>Vehicle equipment</h2>
          <div className={css.line}></div>
          <ul className={css.filtersList}>
            {Object.keys(equipmentLabels).map(key => (
              <li
                className={`${css.filtersItem} ${selectedEquipment[key] ? css.selected : ''}`}
                key={key}
                onClick={() => handleEquipmentChange(key)}
              >
                <Icon
                  width={'32'}
                  height={'32'}
                  iconName={key}
                  styles={css.featureIcon}
                />
                {equipmentLabels[key]}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.filter}>
          <h2 className={css.filterTitle}>Vehicle type</h2>
          <div className={css.line}></div>
          <ul className={css.filtersList}>
            {Object.keys(typeLabels).map(key => (
              <li
                className={`${css.filtersItem} ${selectedType[key] ? css.selected : ''}`}
                key={key}
                onClick={() => handleTypeChange(key)}
              >
                <Icon
                  width={'40'}
                  height={'28'}
                  iconName={key}
                  styles={css.featureIcon}
                />
                {typeLabels[key]}
              </li>
            ))}
          </ul>
        </div>
        <button className={css.searchBtn} onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
