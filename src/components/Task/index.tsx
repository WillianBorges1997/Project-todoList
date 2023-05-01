import styles from './task.module.css';
import buttonDelete from './bin.svg';

interface ITaskProps{
    id: number;
    title: string;
       
}

export function Task({id,title}: ITaskProps) {
    return (
        <div className={styles.task}>
            <button className={styles.check}>
            <div />
            </button>
              
              <p>
                {title}
              </p>


            <button className={styles.buttonDelete}>
            <img src={buttonDelete} />
            </button>
        </div>
    )
}