import Logo from "../../assets/Logo.svg";

import styles from './header.module.css'

export function Header() {
return ( 
<header className={styles.header}>
<img src={Logo} />

<form className={styles.newOrderClass}>
<input
placeholder="Adicione uma nova tarefa"/>
<button>Criar</button>
</form>
</header>
);
}