import Header from './components/headerSection/header'
import About from './components/about/about'
import Newsletter from './components/newsletter/newsletter'
import Footer from './components/footer/footer'

// Stylings
import GlobalStyles from './components/styles/GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyles />
    <Header />
    <About />
    <Newsletter />
    <Footer />
    </>
  );
}

export default App;
