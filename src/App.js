//components
import {Copy, Footer, Header, Products} from './components';
import {SocialMedia} from './components/SocialMedia';

//styles
import './styles.scss';

function App() {
  return (
    <>
      <Header/>
      <Products/>
      <SocialMedia/>
      <Footer/>
      <Copy/>
    </>
  );
}

export default App;
