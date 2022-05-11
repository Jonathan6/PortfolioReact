import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/Footer';

function App() {
  let [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      default:
        return;
    }
  };

  // const handlePageChange = (event) => setCurrentPage(event);
  const handlePageChange = (newPage) => setCurrentPage(newPage);

  return (
    <div className="App">
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main className='mt-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-auto'>
              <img src='https://placekitten.com/g/200/200' alt='kitten'></img>
            </div>
            <div className='col'>
              {renderPage()}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
