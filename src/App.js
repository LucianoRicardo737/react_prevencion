import './App.css';
import Formulario from './component/formulario';
import Planes from './component/planes'
import Footer from './component/footer';
import Landing from './component/landing'
import Header from './component/header';
function App() {
  return (
    <div>
        <Header/>
        <Formulario/>
        <Planes/>
        <Landing/>
        <Footer/>
    </div>
  );
}

export default App;
