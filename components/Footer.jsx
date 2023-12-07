import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footerBreak}/>
      <div className={styles.top}>
        <div>
          <p className={styles.logo}>Kwetu Furniture</p>
          <p>Designed and manufactured in Kenya</p>
        </div>
        <div className={styles.container}>
          <p>About</p>
          <ul>
            <li>
              Shop
            </li>
            <li>
              Cart
            </li>
          </ul>
        </div>
        <div className={styles.container}>
          <p>Get in touch</p>
          <ul>
            <li>
              LinkedIn
            </li>
            <li>
              Instagram
            </li>
            <li>
              Twitter
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>@2023.All rights reserved</p>
        <div>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer