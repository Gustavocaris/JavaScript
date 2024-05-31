import './CampoTexto.css'

// esse 'props' poderia ser qualquer nome, apenas pra chamar
const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={props.placeholder}></input>

        </div>
    )
}

export default CampoTexto