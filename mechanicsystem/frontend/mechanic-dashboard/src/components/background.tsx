import styles from '../styles/background.module.css';

function Background(){
    return (
            <main>
                <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.boxImage1}>
                        <img className={styles.images} src="/images/client.png" alt="Workorders" />
                    </div>
                    <a className={styles.fontBackground}>Client</a>
                </div>

                <div className={styles.box}>
                    <div className={styles.boxImage1}>
                        <img className={styles.images} src="/images/workorders.png" alt="Workorders" />
                    </div>
                    <a className={styles.fontBackground}>Workorders</a>
                </div>

                    <div className={styles.box}>
                    <div className={styles.boxImage1}>
                        <img className={styles.images} src="/images/mechanic.png" alt="Workorders" />
                    </div>
                    <a className={styles.fontBackground}>Mechanic System</a>
                </div>

                </div>
            </main>
    );
}

export default Background;