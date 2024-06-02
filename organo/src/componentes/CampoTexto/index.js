import './CampoTexto.css'

// esse 'props' poderia ser qualquer nome, apenas pra chamar
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    //let valor = 'Guilherme Silveira'

    

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>

        </div>
    )
}

export default CampoTexto