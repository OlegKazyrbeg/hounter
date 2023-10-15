import './App.scss';
import Header from './components/header/header'
import Hero from './components/hero/hero';
import Back from './components/header/back';
import SecondTop from './components/second/secondTop';
import SecondCard from './components/second/secondCardItem';
import Third from './components/third/third';

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
      </section>
    </div>
  )
}

export default App;
