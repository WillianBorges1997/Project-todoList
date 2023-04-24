
import { Task } from '../Task';
import styles from './tasks.module.css';


export function Tasks() {
return(
<section className={styles.tasks}>

<header className={styles.header}>

    <div>
        <p>Tarefas Criadas</p>
        <span>10</span>
    </div>
    <div>
        <p className={styles.colorPurple}>Concluídas</p>
        <span>2 de 10</span>
    </div>
</header>

<div className={styles.imput}>
   <Task />
   <Task />
</div>
</section>
)
}