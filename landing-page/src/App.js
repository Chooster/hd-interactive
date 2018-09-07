import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import DriverContact from './Components/DriverContact';
import DriverAbout from './Components/DriverAbout';
import DriverCar from './Components/DriverCar';
import AdditionalInfo from './Components/AdditionalInfo';

class App extends Component {
  render() {
    return (
      <main className="App">
        <section id="Header">
          <Header />
        </section>
        <section id="Driver-contact">
          <DriverContact />
        </section>
        <section id="Driver-about">
          <DriverAbout />
        </section>
        <section id="Driver-car">
          <DriverCar />
        </section>
        <section id="Additional-info">
          <AdditionalInfo />
        </section>
        <section id="Footer">
          <Footer />
        </section>
      </main>
    );
  }
}

export default App;
