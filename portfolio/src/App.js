import { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Project from './components/Project';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  // const [currentPage, setCurrentPage] = useState('about');

  // const renderPage = () => {
  //   switch(currentPage) {
  //     case 'about':
  //       return <About setCurrentPage={setCurrentPage} />;
  //     case 'contact':
  //       return <Contact />;
  //     case 'resume':
  //       return <Resume />;
  //     default:
  //       return;
  //   }
  // };

  // const handlePageChange = (page) => setCurrentPage(page);
  const projectValues = [{
    title: "title",
    github: "github link",
    description: "this is a cool project",
    deploy: "deploy link",
  }];

  return (
    <div className="App">
      <body>
        <Navigation />
        <section>
          {projectValues.map((project) => <Project {...project}/>)}
        </section>
      </body>
    </div>
  );
}

export default App;
