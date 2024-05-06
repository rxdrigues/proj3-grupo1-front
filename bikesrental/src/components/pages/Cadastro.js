import CadastroForm from '../cadastro/CadastroForm'

import styles from './Cadastro.module.css'


function Cadastro() {
    return (
      <div className={styles.cadastro_container}>
        <h1>Cadastro de novas bicicletas</h1>
        <CadastroForm btnText="Cadastrar bicicleta"/>
      </div>
    )
  }
  
  export default Cadastro