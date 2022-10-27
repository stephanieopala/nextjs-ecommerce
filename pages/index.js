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
          <button
            className={styles.button}
          >
            <Link href="/shop">Shop Now</Link>
          </button>
        </div>
        <div className={styles.sectiontwo}>
          <Image
            className={styles.image}
            src="https://res.cloudinary.com/drgmmgmmj/image/upload/v1666527186/ecommerce/couch_yqi3f0.jpg"
            alt="couch"
            layout='fill'
          />
        </div>
      </div>
    </>
  )
}

export default HomePage;