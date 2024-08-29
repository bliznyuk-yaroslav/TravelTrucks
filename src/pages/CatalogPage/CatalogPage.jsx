import css from './CatalogPage.module.css';
import Filter from '../../components/Filter/Filter';
import CampersList from '../../components/CampersList/CampersList';
import DetailModal from '../../components/DetailModal/DetaitModal';
export default function CatalogPage() {
  return (
    <div className={css.container}>
      <Filter></Filter>
      <CampersList></CampersList>
      <DetailModal></DetailModal>
    </div>
  );
}
