import styles from '../styles/modal.module.css';

function Modal(){
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.boxImage1}>
                        <img className={styles.images} src="/images/client.png" alt="Workorders" />
                    </div>
                    <a className={styles.fontBackground}>Client</a>
                </div>
            </div>
        </main>
    );
}
export default Modal;