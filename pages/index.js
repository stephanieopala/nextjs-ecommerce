import Image from 'next/image';
import Button from '../components/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionone}>
        <h4 className={styles.title}>
          Home of elegant, stylish and affordable furniture
        </h4>
        <Button
          label="Shop Now"
          icon={< AiOutlineArrowRight />}
        />
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
  )
}

export default HomePage;