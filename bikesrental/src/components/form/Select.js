import styles from './Select.module.css'

function Select({text, name, options, handleChange, value}) {
    return(
        <div className={styles.form_control}>
            <label htmlfor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )

}

export default Select