import React from 'react';
import HeaderContainer from './header/header_container';
import Footer from './footer';
import { Link } from 'react-router';


const App = ({children}) => {
  return(
      <div id="app">
        <HeaderContainer />
        {children}
        <div className="footer"/>
      </div>
  );
};



export default App;
