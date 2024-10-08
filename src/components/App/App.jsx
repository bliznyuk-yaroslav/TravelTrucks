import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CalatogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage')
);
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CalatogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
