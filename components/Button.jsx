import styles from '../styles/Button.module.css';

const Button = ({ label, icon }) => {
  return (
    <button className={styles.button}>
      {label}
      <i>{icon}</i>
    </button>
  )
}

export default Button;