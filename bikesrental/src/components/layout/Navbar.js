import { Link } from "react-router-dom"

import styles from './Navbar.module.css'

import Container from "./Container"

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <ul class={styles.list}>
                    <li class={styles.item}><Link to="/">Home</Link></li>
                    <li class={styles.item}><Link to="/cadastro">Cadastrar</Link></li>
                    <li class={styles.item}><Link to="/edicao">Editar</Link></li>
                    <li class={styles.item}><Link to="/remocao">Remover</Link></li>
                    <li class={styles.item}><Link to="/lista">Listar</Link></li>
                </ul>
            </Container>
      </nav>
    )
}

export default Navbar