//  A gente tem uma função e estamos exportando e retornando um componente 
import './Banner.css'

function Banner() {
    // JSX 'como o react trabalha e vai entender lá no DOM'
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="logo" />
        </header>

    )
}

export default Banner