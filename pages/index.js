import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Kwetu Furniture | Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.sectionone}>
          <h4 className={styles.title}>
            Home of elegant, stylish and affordable furniture
          </h4>
          <Link href="/shop">
            <button className={styles.button}>
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <section className={styles.products}>
        <h2>Our Products</h2>
        <div className={styles.categories}>
          <div className={styles.card}>
            <Image
              alt="furniture"
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1666542643/ecommerce/grey-armchair_l1jiue.jpg`}
              width={300}
              height={300}
            />
            <p className={styles.cardTitle}>Furniture</p>
            <p>Explore a variety of furniture. From house furniture to office furnture.</p>
          </div>
          <div className={styles.card}>
            <Image alt="furniture"
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1666542667/ecommerce/white-vase_uffcep.jpg`}
              width={300}
              height={300}
            />
            <p className={styles.cardTitle}>Accessories</p>
            <p>Explore various accessories for styling your home or office</p>
          </div>
          <div className={styles.card}>
            <Image
              alt="furniture"
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1666542550/ecommerce/green-couch_qzwzuy.jpg`}
              width={300}
              height={300} />
            <p className={styles.cardTitle}>Custom made</p>
            <p>Get custom-made pieces for your home or office.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;