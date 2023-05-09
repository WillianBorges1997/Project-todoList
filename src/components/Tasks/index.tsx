import { useEffect, useState } from 'react';
import { Task } from '../Task';
import styles from './tasks.module.css';
import Logo from "../../assets/Logo.svg";
import layer from '../Tasks/layer.svg';
import layer2 from "../Tasks/layer2.svg";
import React from 'react';

interface ITasksProps {
    id: number;
    title: string;
    isComplete: boolean
}


export function Tasks() {
    const [values,setValues] = useState([] as ITasksProps[]); //o list vai iniciar com os valores que já estão nela por padrão
 
    const listsFilterIsComplete = values.filter((value) => value.isComplete);  //busca todas as tarefas que estão com isComplete true


 const [newOrder, setNewOrder] = React.useState ('');

 const [refresh, setRefresh] = React.useState (false);


  function submitNewOrder(ev:any) {
    ev.preventDefault();

    if( newOrder === '') {
        return alert('Necessário adicionar texto')
    }

    setValues([     
        ...values,
        {
            id: values.length + 1,
            title: newOrder,
            isComplete: false
        },
    ]        
    )

    setNewOrder('')
  }

  function deleteTask(ev:any, id: number) {
    ev.preventDefault();

    const index = values.findIndex(
        (task) => task.id === id
    )

    values.splice(index, 1)


    setValues(values)

    setRefresh(!refresh)


  }

  function completeTask(ev:any, id: number) {
    ev.preventDefault();

    // filtrar ou pegar o elemento da lista

    const index = values.findIndex(
        (task) => task.id === id
    )

    values[index].isComplete = !values[index].isComplete

    setValues(values)

    setRefresh(!refresh)
    
  }

  useEffect(() => {

  }, [
    refresh
  ])

    return(
        <>
        <header className={styles.header}> 
    <img src={Logo} />

    <form className={styles.newOrderClass} onSubmit={submitNewOrder}>  
   


    <input 
    value={newOrder}
    onChange={e => setNewOrder(e.target.value)}
    name='for12'
    type='text'
    placeholder="Adicione uma nova tarefa" 
    />

    <button type="submit" className="btn btn-primary"> Criar

    <img src={layer} /> </button> {/*imagem de + */}

    <span id="content"></span>

    </form>
    </header>

    <section className={styles.tasks}>

    <section className={styles.menu}>
    
        <div>
            <p>Tarefas Criadas </p>
            <span> {values.length}
            </span>
        </div>
        <div>
            <p className={styles.colorPurple}>Concluídas</p>
            <span> {listsFilterIsComplete.length} de {values.length}</span>  {/*lists é a const que filtra valores true */}
        </div>
    </section>

            <div className={styles.imput} 
            >

       <img src={layer2} /> 
       <form className={styles.Editlayer2}
       ></form>
       
       
            {values.map( task =>  { 
            return <Task 
            id={task.id} 
            title={task.title}
            isComplete={task.isComplete}
            onChangeCompleteTask={completeTask}
            onDeleteTask={deleteTask}
            />
           
        })}
        

       
    </div>


    </section>
    </>
    )
    }


