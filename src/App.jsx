import './App.scss';
import Header from './components/header/header'
import Hero from './components/hero/hero';
import Second from './components/second/second';
import Third from './components/third/third';
import Subscribe from './components/subscribe/subscribe';
import Footer from './components/footer/footer';
import Fifth from './components/fifth/fifth';

function App() {
  return (
    <div className="wrapper">
      <div className="hero-container">
        <Header/>
        <Hero/>
      </div>
      <main className="main">
        <Second/>
        <Third/>
        <Fifth/>
        <Subscribe/>
      </main>
        <Footer/>
    </div>
  )
}

export default App;
