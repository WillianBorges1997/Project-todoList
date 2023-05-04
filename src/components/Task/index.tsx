import styles from './task.module.css';
import buttonDelete from './bin.svg';
import layer1 from '../Tasks/layer1.svg'

interface ITaskProps{
    id: number;
    title: string;
    isComplete: boolean;
       
}

export function Task({id,title,isComplete}: ITaskProps) {
    return (
        <div className={styles.task}>  
            <button className={styles.check}>
              {isComplete ? <img src={layer1} /> : <div />}  {/*marca o botão como verificado ou check, cor roxa*/}
            
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