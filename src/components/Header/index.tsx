import Logo from "../../assets/Logo.svg";
import layer from '../Tasks/layer.svg'
import styles from './header.module.css'


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