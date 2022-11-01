import Head from "next/head";
import { ProductCard } from "../../components/ProductCard";
import styles from '../../styles/Shop.module.css';
import { XataClient } from '../../src/xata';

const Shop = ({ products }) => {

  return (
    <>
      <Head>
        <title>Kwetu Furniture | Shop</title>
      </Head>
      <div className={styles.container}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            id={product.id}
            url={product.image_url}
            name={product.name}
            price={product.price}
            categoryName={product.category.name}
          />
        ))}
      </div>
    </>
  )
}

const xata = new XataClient();

export const getServerSideProps = async () => {
  const response = await xata.db.product.select(["*", "category.*"]).getAll();
  return {
    props: {
      products: response
    }
  }
};



export default Shop;