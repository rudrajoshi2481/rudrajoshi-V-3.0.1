import React from 'react';
import './App.css';
import Header from './Utils/Header/Header'
import Carousel from './Components/Coursal/Coursal'
import Paragraph from './Components/Paragraph/Paragraph'
import Showoff from './Components/Showoff/Showoff'
function App() {
  return (
    <div className="App">
      {/* Header Section contains Nav-Bar and Contact Info */}
        <Header />
      {/* Coursal contains Photos of Blogs Info Text Editor Info etc */}
        <Carousel />
      {/* Paragraph of the Resume */}
        <Paragraph />
      {/* Badges and Skill and Showoff Stuff */}
        <Showoff />
    </div>
  );
}

export default App;
