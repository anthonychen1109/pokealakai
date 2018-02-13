import React from 'react';

// Components
import Header from './header';
import About from './about';
import Signature from './signature';
import Parallax from './parallax';
import Contact from './contact';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Signature />
      <Parallax />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
