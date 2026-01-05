import styles from '../../styles/modalRegisterClient.module.css';

function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.boxImage1}>
          </div>
          <span className={styles.fontBackground}>Client</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
