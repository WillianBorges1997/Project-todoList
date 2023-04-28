import { Header } from '../Header';
import { Task } from '../Task';
import styles from './tasks.module.css';



const list = [


    {
        id: 1,
        title: 'estudar',
        isComplete: true
    },
   
    {
        id: 2,
        title: 'correr',
        isComplete: false
    }, 
    {
        id: 3,
        title: 'dormir',
        isComplete: false
        },
                                                

]

const lists = list.filter((list) => list.isComplete);  //busca todas as tarefas que estão com isComplete true


export function Tasks() {


    
    return(
    <section className={styles.tasks}>
    
    <header className={styles.header}>
    
        <div>
            <p>Tarefas Criadas</p>
            <span> {list.length}
            </span>
        </div>
        <div>
            <p className={styles.colorPurple}>Concluídas</p>
            <span> {lists.length}</span>  {/*lists é a const que filtra valores true */}
        </div>
    </header>
    
    <div className={styles.imput}>
        {list.map( task =>  { 
            return <Task />
        })}
       
    </div>
    </section>
    )
    }