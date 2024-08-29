import css from './HomePage.module.css';
export default function HomePage() {
  return (
    <section className={css.heroSection}>
      <div className={css.container}>
        <div className={css.text}>
          <h1 className={css.textHeader}>Campers of your dreams</h1>
          <p className={css.textHero}>
            You can find everything you want in our catalog
          </p>
        </div>
        <button className={css.btn}>View Now</button>
      </div>
    </section>
  );
}
