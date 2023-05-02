import styles from './task.module.css';
import buttonDelete from './bin.svg';

interface ITaskProps{
    id: number;
    title: string;
    isComplete: boolean;
       
}

export function Task({id,title,isComplete}: ITaskProps) {
    return (
        <div className={styles.task}>
            <button className={styles.check}>
            <div />
            </button>
              
              <p>
                {title}
                {isComplete}
              </p>


            <button className={styles.buttonDelete}>
            <img src={buttonDelete} />
            </button>
        </div>
    )
}