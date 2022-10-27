import { XataClient } from "../../src/xata";
import Link from "next/link";
import Image from 'next/image';
import styles from '../../styles/ProductDetails.module.css';

const ProductDetails = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.wrapper}>
      <Link href="/shop">
        <a className={styles.link}>Go to shop</a>
      </Link>
      <div className={styles.container}>
        <Image
          src={item.image_url}
          width={400}
          height={450}
        />
        <div className={styles.details}>
          <h4>Name: {item.name}</h4>
          <p>Description: {item.description}</p>
          <p className={styles.price}>Price: {item.price}</p>
          <p className={styles.category}>Category: {item.category.name}</p>
          <div className={styles.button}>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const xata = new XataClient();

export const getServerSideProps = async(context) => {
  const products = await xata.db.product.select(["*", "category.*"]).getAll();

  const item = products.find((product) => product.id === context.params.id)
  return {
    props: {
      item
    }
  };
};

export default ProductDetails;