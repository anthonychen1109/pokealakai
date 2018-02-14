import React, { Component } from 'react';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Signature from './signature';
import Parallax from './parallax';
import Contact from './contact';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.toTop = this.toTop.bind(this);
  }

  toTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
     window.requestAnimationFrame(this.toTop);
     window.scrollTo (0,currentScroll - (currentScroll/5));
    }
  }

  render() {
    return (
      <div>
          <button
            className="up-btn btn btn-secdonary"
            onClick={this.toTop}
            >
              &#9650;
          </button>
        <Navbar />
        <Header />
        <About />
        <Signature />
        <Parallax />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
