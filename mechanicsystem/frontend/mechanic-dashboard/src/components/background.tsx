import styles from '../styles/background.module.css';

type Props = {
  onOpenModal: () => void;
};

function Background({ onOpenModal }: Props) {
  return (
    <main>
      <div className={styles.container}>

        <div className={styles.box} onClick={onOpenModal}>
          <div className={styles.boxImage1}>
            <img
              className={styles.images}
              src="/images/client.png"
              alt="Client"
            />
          </div>
          <span className={styles.fontBackground}>Client</span>
        </div>

        <div className={styles.box} onClick={onOpenModal}>
          <div className={styles.boxImage1}>
            <img
              className={styles.images}
              src="/images/workorders.png"
              alt="Workorders"
            />
          </div>
          <span className={styles.fontBackground}>Workorders</span>
        </div>

        <div className={styles.box} onClick={onOpenModal}>
          <div className={styles.boxImage1}>
            <img
              className={styles.images}
              src="/images/mechanic.png"
              alt="Mechanic System"
            />
          </div>
          <span className={styles.fontBackground}>Mechanic System</span>
        </div>

      </div>
    </main>
  );
}

export default Background;
