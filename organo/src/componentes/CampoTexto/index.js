import './CampoTexto.css'

// esse 'props' poderia ser qualquer nome, apenas pra chamar
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    let valor = 'Guilherme Silveira'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>

        </div>
    )
}

export default CampoTexto