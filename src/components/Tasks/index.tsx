import { Header } from '../Header';
import { Task } from '../Task';
import styles from './tasks.module.css';




const list = [


    {
        id: 1,
        title: 'Estudar',
        isComplete: true
    },
   
    {
        id: 2,
        title: 'Correr',
        isComplete: false
    }, 
    {
        id: 3,
        title: 'Dormir',
        isComplete: false
        },
                                                

]

const listsFilterIsComplete = list.filter((list) => list.isComplete);  //busca todas as tarefas que estão com isComplete true

/*const marking = () => {
    if (isCompleted.current.checked) {
      console.log('');
    } else {
      console.log('');
    }
  }; 
  
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
            <span> {listsFilterIsComplete.length} de {list.length}</span>  {/*lists é a const que filtra valores true */}
        </div>
    </header>

            <div className={styles.imput}>



        {list.map( task =>  { 
            return <Task 
            id={task.id} 
            title={task.title}
            isComplete={task.isComplete} />
        })}

       
    </div>


    </section>
    )
    }