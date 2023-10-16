import './App.scss';
import Header from './components/header/header'
import Hero from './components/hero/hero';
import Back from './components/header/back';
import SecondTop from './components/second/secondTop';
import SecondCard from './components/second/secondCardItem';
import Third from './components/third/third';
import Subscribe from './components/subscribe/subscribe';
import Footer from './components/footer/footer';

function App() {

  
  return (
    <div className="wrapper">
      <div className="hero-container">
        <header className="header">
            <div className="header-container">
              <Header/>
            </div>
        </header>
        <section className="hero pad">
            <Hero/>
        </section>
        <Back className="back-hero"></Back>
      </div>
      <main className="main">
        <section className="second pad">
          <div className="container">
            <div className="second-top">
              <SecondTop/>
            </div>
            <div className="second-main">
              <SecondCard/>
            </div>
          </div>
        </section>
        <section className="third pad">
          <div className="container">
            <div className="third-container">
              <Third/>
            </div>
          </div>
          <img className='yellow' src="./img/thirdback1.svg" alt="" />
          <img className='red' src="./img/thirdback2.svg" alt="" />
        </section>
        <section className='subscribe pad'>
          <div className="container">
            <Subscribe/>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <Footer/>
        </div>
      </footer>
    </div>
  )
}

export default App;
