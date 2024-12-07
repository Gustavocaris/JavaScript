const root = document.getElementById('root');
// pega o elemento root do HTML e guarda aqui no root


const p = React.createElement('p', null, 'Olá, Mundo');
// aqui a gente cria um elemento paragrafo com o texto olá mundo, em forma de paragrafo sem nehum atributo


const reactRoot = ReactDOM.createRoot(root);
// Aqui eu crio uma raiz no react


reactRoot.render(p);
// aqui a gente usa a raiz para iniciar um processo de renderização