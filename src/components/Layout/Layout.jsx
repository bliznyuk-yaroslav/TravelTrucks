import { Suspense } from 'react';
import css from './Layout.module.css';
import Loader from '../Loader/Loader';
import Navigation from '../Navigation/Navigation';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
