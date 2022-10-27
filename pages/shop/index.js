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
        <section className={styles.filter}>
          <h4>FILTER</h4>
          <div>
            <form>
              <input type="checkbox" id="below500" name="below500" value="" className={styles.checkbox}/>
              <label for="below500">0 - 500</label><br/>
              <input type="checkbox" id="above500" name="above500" value="Boat" className={styles.checkbox}/>
              <label for="above500">Above 500</label><br/><br/>
              <input type="submit" value="Filter"/>
            </form>
          </div>
        </section>
        <section className={styles.products}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              url={product.image_url}
              name={product.name}
              price={product.price}
              categoryName={product.category.name}
            />
          ))}
        </section>
      </div>
    </>
  )
}

const xata = new XataClient();

export const getServerSideProps = async () => {
  const response = await xata.db.product.select(["*", "category.*"]).getAll();
  console.log(response);
  return {
    props: {
      products: response
    }
  }
};



export default Shop;