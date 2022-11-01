import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const sumOfCartItems = () => {
    return cart?.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <nav className={styles.navbar}>
      <h4 className={styles.logo}>Kwetu Furniture</h4>
      <ul className={styles.navlinks}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <p className={styles.cart}>
              Cart <span>{sumOfCartItems()}</span>
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar