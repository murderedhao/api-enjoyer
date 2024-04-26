import cart from '../../assets/cart.png'
import favorite from '../../assets/favorite.png'
import styles from './Header.module.scss'

function Header() {
  return (
    <>
      <header className={styles['header']}>
        <nav className={styles['header__nav']}>
          <ul className={styles['header__nav-list']}>
            <li className={styles['header__nav-item']}>
              <a className={styles['header__link']} href="/" alt="">Home</a>
            </li>
            <li className={styles['header__nav-item']}>
              <a className={styles['header__link']} href="/catalog" alt="">Catalog</a>
            </li>
            <li className={styles['header__nav-item']}>
              <a className={styles['header__link']} href="/about" alt="">About us</a>
            </li>
          </ul>
          <nav className={styles["header__nav-btn"]}>
            <a className={styles["header__link"]} href ="/myfavorite" alt=""><img className={styles["header__link-img"]} src={favorite} alt=""/>Favorite</a>
            <a className={styles["header__link"]} href ="/mycart" alt=""><img className={styles["header__link-img"]} src={cart} alt=""/>Cart</a>
          </nav>
        </nav>
      </header>
    </>
  );
}

export default Header;
