import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CategoryCard.module.css';

export const CategoryCard = ({name, image}) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <Link href="">SHOP NOW</Link>
      </div>
    </div>
  )
};