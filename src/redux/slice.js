import css from './CampersList.module.css';
import CamperItem from '../CamperItem/CamperItem.jsx';
import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operation'; // Импортируйте необходимые действия
import { selectFilteredCampers } from '../../redux/selectors'; // Импортируйте селектор для получения фильтрованных данных

const CampersList = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers); // Используем селектор для получения отфильтрованных данных

  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const savedItemsPerPage = localStorage.getItem('itemsPerPage');
    return savedItemsPerPage ? parseInt(savedItemsPerPage, 10) : 4;
  });

  useEffect(() => {
    dispatch(fetchCampers()); // Загружаем данные при первом рендере
  }, [dispatch]);

  const handleLoadMore = () => {
    setItemsPerPage(prevItemsPerPage => {
      const newItemsPerPage = prevItemsPerPage + 4;
      localStorage.setItem('itemsPerPage', newItemsPerPage);
      return newItemsPerPage;
    });
  };

  const handleShowLess = () => {
    setItemsPerPage(prevItemsPerPage => {
      if (prevItemsPerPage > 4) {
        const newItemsPerPage = prevItemsPerPage - 4;
        localStorage.setItem('itemsPerPage', newItemsPerPage);
        return newItemsPerPage;
      }
      return prevItemsPerPage;
    });
  };

  const visibleCampers = useMemo(
    () => filteredCampers.slice(0, itemsPerPage),
    [filteredCampers, itemsPerPage]
  );

  return (
    <div className={css.container}>
      {filteredCampers.length > 0 ? (
        <>
          <ul className={css.campersList}>
            {visibleCampers.map(item => (
              <li className={css.camperItem} key={item._id}>
                <CamperItem item={item} />
              </li>
            ))}
          </ul>
          <div className={css.btnBox}>
            {filteredCampers.length > itemsPerPage && (
              <button className={css.loadMoreBtn} onClick={handleLoadMore}>
                Load More
              </button>
            )}
            {itemsPerPage > 4 && (
              <button className={css.loadMoreBtn} onClick={handleShowLess}>
                Show less
              </button>
            )}
          </div>
        </>
      ) : (
        <p className={css.noItemsMessage}>Sorry, there is no item matches...</p>
      )}
    </div>
  );
};

export default CampersList;