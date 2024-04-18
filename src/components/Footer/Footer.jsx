import { faFacebook, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.scss'
function Footer () {
	return ( 
		<footer className={styles.footer}>
			<div className={styles.footer__block}>
				<h2 className={styles.footer__title}>Address</h2>
				<ul className={styles.footer__list}>
					<li className={styles.footer__item}>https://github.com/murderedhao</li>
				</ul>
			</div>
			<div className={styles.footer__block}>
				<h2 className={styles.footer__title}>Contact</h2>
				<ul className={styles.footer__list}>
					<li className={styles.footer__item}>+7 123 124 11 22</li>
					<li className={styles.footer__item}>+7 321 222 11 43</li>
					<li className={styles.footer__item}>+7 123 123 12 13</li>
				</ul>
			</div>
			<div className={styles.footer__block}>
				<h2 className={styles.footer__title}>Contact mail</h2>
				<ul className={styles.footer__list}>
					<li className={styles.footer__item}> fakeozon@fakeozon.com</li>
					<li className={styles.footer__item}> ozonfake@fakeozon.com</li>
					<li className={styles.footer__item}>ozon@fakeozon.com</li>
				</ul>
			</div>
			<div className={styles.footer__block}>
				<h2 className={styles.footer__title}>Social media</h2>
				<ul className={styles.footer__list_img}>
					<li className={styles.footer__item_img}><FontAwesomeIcon icon={faVk} /></li>
					<li className={styles.footer__item_img}><FontAwesomeIcon icon={faYoutube} /></li>
					<li className={styles.footer__item_img}><FontAwesomeIcon icon={faFacebook} /></li>
				</ul>
			</div>
		</footer>
	 );
}
 
export default Footer;