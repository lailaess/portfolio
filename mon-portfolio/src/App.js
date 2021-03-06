// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import React from 'react'; 
import './App.css';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Parcours from './components/Parcours/Parcours';
import Projets from './components/Projets/Projets';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Welcome from './components/Welcome/Welcome';


class App extends React.Component{
  render(){
    return(
      <body>
        <Header/>
        <Welcome />
        <AboutMe/>
        <Parcours/>
        <Projets />
        <Hobbies />
        <Contact />
        {/* <Footer/> */}

      </body>
    )
  }
}

export default App;
