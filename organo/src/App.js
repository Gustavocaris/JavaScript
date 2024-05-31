
import Banner from './componentes/Banner/Banner/Banner';
import CampoTexto from './componentes/Banner/campoTexto';

function App() {
  return (
    <div className="App">
        <div className="App">
          <Banner />
          <CampoTexto label="Nome" placeholder="Digite seu Nome"/>
          <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
          <CampoTexto label="Imagem" placeholder="Digite seu Imagem" />

        </div>
    </div>
  );
}

export default App;
