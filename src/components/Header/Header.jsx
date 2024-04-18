import styles from './Header.module.scss'
function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <span className={styles.header__menu__list}>
            <a className={styles.header__menu__item} href ="/" alt="">Home</a>
            <a className={styles.header__menu__item} href ="/catalog" alt="">Catalog</a>
            <a className={styles.header__menu__item} href ="/men" alt="">Men</a>
            <a className={styles.header__menu__item} href ="/women" alt="">Women</a>
            <a className={styles.header__menu__item} href ="/about" alt="">About us</a>
          </span>
        </nav>
      </header>
    </>
  );
}

export default Header;
