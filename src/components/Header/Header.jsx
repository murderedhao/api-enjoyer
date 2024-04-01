import styles from './Header.module.scss'
function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.div}>
          <span className={styles.a}>
            <a href ="/" alt="">Home</a>
            <a href ="/catalog" alt="">Catalog</a>
            <a href ="/men" alt="">Men</a>
            <a href ="/women" alt="">Women</a>
            <a href ="/about" alt="">About us</a>
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
