import styles from './task.module.css';
import buttonDelete from './bin.svg';

export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.check}>
            <div />
            </button>

            <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>

            <button className={styles.buttonDelete}>
            <img src={buttonDelete} />
            </button>
        </div>
    )
}