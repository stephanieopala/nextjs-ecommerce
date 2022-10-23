import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';

const App = ({ Component, pageProps}) => {
  return (
    <div className="app">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default App;