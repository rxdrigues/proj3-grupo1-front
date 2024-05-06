import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import styles from './CadastroForm.module.css'

function CadastroForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input
            type="text"
            text="Marca da bicicleta"
            name="name"
            placeholder="Marca da bicicleta" />

            <Input
            type="text"
            text="Tipo da bicicleta"
            name="type"
            placeholder="Tipo da bicicleta" />

            <Input
            type="number"
            text="Preço da bicicleta"
            name="price"
            placeholder="Preço da bicicleta" />

            <Select
            text="Selecione o Status"
            name="category_id" 
            placeholder="Selecione o Status"/>

            <Submit text={btnText} />

        </form>
    )
}

export default CadastroForm