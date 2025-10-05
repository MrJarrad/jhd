import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} data-theme="dark">
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>Build something great.</p>
        <div className={styles.ctas}>
          <a className={styles.primary} href="/get-started">Get started</a>
        </div>
      </div>
    </section>
  );
}
