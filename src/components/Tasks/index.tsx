import { Task } from '../Task';
import styles from './tasks.module.css';
import Logo from "../../assets/Logo.svg";
import layer from '../Tasks/layer.svg';


export function Header() {
    return ( 
    <header className={styles.header}>
    <img src={Logo} /> 
    
    <form className={styles.newOrderClass}>
    <input
    placeholder="Adicione uma nova tarefa"/>
    <button> Criar
        <img src={layer} /> </button> {/*imagem de + */}
    </form>
    </header>
    );
    }
    

const list = [


    {
        id: 1,
        title: 'Estudar',
        isComplete: false
    },
   
    {
        id: 2,
        title: 'Correr',
        isComplete: true
    }, 
    {
        id: 3,
        title: 'Dormir',
        isComplete: true
    },
                                                


]

const listsFilterIsComplete = list.filter((list) => list.isComplete);  //busca todas as tarefas que estão com isComplete true

export function Tasks() {


    
    return(
    <section className={styles.tasks}>
    
    <section className={styles.menu}>
    
        <div>
            <p>Tarefas Criadas</p>
            <span> {list.length}
            </span>
        </div>
        <div>
            <p className={styles.colorPurple}>Concluídas</p>
            <span> {listsFilterIsComplete.length} de {list.length}</span>  {/*lists é a const que filtra valores true */}
        </div>
    </section>

            <div className={styles.imput}
            >



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