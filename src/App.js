import React from 'react';

import Header from './Components/Header/header';
import Headline from './Components/Headline/headline';

import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>     
        <section className="main">
          <Headline header="Posts" description="Click the button to render the posts"/>
        </section>
      </div>
    );
  }
}

export default App;
