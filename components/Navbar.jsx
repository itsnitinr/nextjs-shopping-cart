import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>GamesKart</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
