import { Header } from '../Header';
import { Task } from '../Task';
import styles from './tasks.module.css';


const list = [


    {
        id: 1,
        title: 'estudar',
        isComplete: false
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
                                                    
];
/*
const result = list.filter(lists => lists.length > 3);

console.log(result);  //resultado 

*/

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
            <span>{list.length}</span>
        </div>
    </header>
    
    <div className={styles.imput}>
        {list.map( Header =>  { 
            return <Task />
        })}
       
    </div>
    </section>
    )
    }
