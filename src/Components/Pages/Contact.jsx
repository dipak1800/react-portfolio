import React from 'react';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import Card from '../Card';
import Footer from '../Footer';
import './Pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From You to Me." subtitle="Avenues to get in contact with me" />
    <hr />
    <div className="row">
      <div className="col contactCol">
        <Card source={require('./images/gmail.png')} text="dslatuno@gmail.com" />
        <Card source={require('./images/github.png')} text={<a href="https://github.com/davidlatuno" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">GitHub</button></a>} />
        <Card source={require('./images/linkedin.png')} text={<a href="https://www.linkedin.com/in/david-latuno" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">LinkedIn</button></a>} />
        <Card source={require('./images/resume.png')} text={<a href="https://github.com/davidlatuno/react-portfolio/blob/master/src/Components/Pages/images/David%20Latuno%20Resume.pdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Resume</button></a>} />
        <Card source={require('./images/phone.png')} text="619-493-6024" />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;