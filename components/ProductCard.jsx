import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';

export const ProductCard = ({url, id, name, price, categoryName}) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image}
        src={url}
        width={320}
        height={300}
      />
      <h4 className={styles.name}>{name}</h4>
      <h5 className={styles.price}>{price}</h5>
      <h6>{categoryName}</h6>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <Link href={`/shop/${id}`}>
            Product Details
          </Link>
        </button>
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  )
};